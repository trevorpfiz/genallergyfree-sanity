/**
 * This code is responsible for revalidating the cache when a post or author is updated.
 *
 * It is set up to receive a validated GROQ-powered Webhook from Sanity.io:
 * https://www.sanity.io/docs/webhooks
 *
 * 1. Go to the API section of your Sanity project on sanity.io/manage or run `npx sanity hook create`
 * 2. Click "Create webhook"
 * 3. Set the URL to https://YOUR_NEXTJS_SITE_URL/api/revalidate
 * 4. Trigger on: "Create", "Update", and "Delete"
 * 5. Filter: _type == "post" || _type == "author" || _type == "settings"
 * 6. Projection: Leave empty
 * 7. HTTP method: POST
 * 8. API version: v2021-03-25
 * 9. Include drafts: No
 * 10. HTTP Headers: Leave empty
 * 11. Secret: Set to the same value as SANITY_REVALIDATE_SECRET (create a random one if you haven't)
 * 12. Save the configuration
 * 13. Add the secret to Vercel: `npx vercel env add SANITY_REVALIDATE_SECRET`
 * 14. Redeploy with `npx vercel --prod` to apply the new environment variable
 */

import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient, groq, type SanityClient } from 'next-sanity';
import { parseBody, type ParseBody } from 'next-sanity/webhook';

import { apiVersion, dataset, projectId } from '#/lib/sanity.api';
import { allPostSlugsQuery, Author, Course, Post, Section } from '#/lib/sanity.queries';

export { config } from 'next-sanity/webhook';

// update queries
const postUpdatedQuery = groq`
*[_type == "post" && _id == $id] {
  "slug": slug.current,
  sections[]->{
    "slug": slug.current,
    courses[]->{
      "slug": slug.current
    }
  }
}
`;

const sectionUpdatedQuery = groq`
*[_type == "section" && _id == $id] {
  "slug": slug.current,
  courses[]->{
    "slug": slug.current
  }
}
`;

const courseUpdatedQuery = groq`
*[_type == "course" && _id == $id].slug.current
`;

const authorUpdatedQuery = groq`
*[_type == "author" && _id == $id] {
  "posts": *[_type == "post" && references(^._id)] {
    "slug": slug.current,
    sections[]->{
      "slug": slug.current,
      courses[]->{
        "slug": slug.current
      }
    },
  },
}
`;

type StaleRoute =
  | '/'
  | '/courses'
  | `/learn/${string}`
  | `/learn/${string}/${string}`
  | `/learn/${string}/${string}/${string}`;

async function _queryAllRoutes(client: SanityClient): Promise<Post[]> {
  return client.fetch(allPostSlugsQuery);
}

async function queryAllRoutes(client: SanityClient): Promise<StaleRoute[]> {
  const posts = await _queryAllRoutes(client);

  const slugs: StaleRoute[] = [];

  posts.forEach((post) => {
    const postSlug = post?.slug;
    post?.sections?.forEach((section) => {
      const sectionSlug = section?.slug;
      section?.courses?.forEach((course) => {
        const courseSlug = course?.slug;

        slugs.push(`/learn/${courseSlug}`);
        slugs.push(`/learn/${courseSlug}/${sectionSlug}`);
        slugs.push(`/learn/${courseSlug}/${sectionSlug}/${postSlug}`);
      });
    });
  });

  return ['/', '/courses', ...slugs];
}

async function queryStalePostRoutes(client: SanityClient, id: string): Promise<StaleRoute[]> {
  const posts: Post[] = await client.fetch(postUpdatedQuery, { id });

  const slugs: StaleRoute[] = [];

  posts.forEach((post) => {
    const postSlug = post?.slug;
    post?.sections?.forEach((section) => {
      const sectionSlug = section?.slug;
      section?.courses?.forEach((course) => {
        const courseSlug = course?.slug;

        slugs.push(`/learn/${courseSlug}`);
        slugs.push(`/learn/${courseSlug}/${sectionSlug}`);
        slugs.push(`/learn/${courseSlug}/${sectionSlug}/${postSlug}`);
      });
    });
  });

  return [...slugs];
}

async function queryStaleSectionRoutes(client: SanityClient, id: string): Promise<StaleRoute[]> {
  const sections: Section[] = await client.fetch(sectionUpdatedQuery, { id });

  const slugs: StaleRoute[] = [];

  sections?.forEach((section) => {
    const sectionSlug = section?.slug;
    section?.courses?.forEach((course) => {
      const courseSlug = course?.slug;

      slugs.push(`/learn/${courseSlug}`);
      slugs.push(`/learn/${courseSlug}/${sectionSlug}`);
    });
  });

  return [...slugs];
}

async function queryStaleCourseRoutes(client: SanityClient, id: string): Promise<StaleRoute[]> {
  const courses: Course[] = await client.fetch(courseUpdatedQuery, { id });

  const slugs: StaleRoute[] = [];

  courses?.forEach((course) => {
    const courseSlug = course?.slug;

    slugs.push(`/learn/${courseSlug}`);
  });

  return [...slugs];
}

async function queryStaleAuthorRoutes(client: SanityClient, id: string): Promise<StaleRoute[]> {
  const author: Author = await client.fetch(authorUpdatedQuery, { id });

  const slugs: StaleRoute[] = [];

  if (author?.posts && author?.posts?.length > 0) {
    author?.posts?.forEach((post) => {
      const postSlug = post?.slug;
      post?.sections?.forEach((section) => {
        const sectionSlug = section?.slug;
        section?.courses?.forEach((course) => {
          const courseSlug = course?.slug;

          slugs.push(`/learn/${courseSlug}`);
          slugs.push(`/learn/${courseSlug}/${sectionSlug}`);
          slugs.push(`/learn/${courseSlug}/${sectionSlug}/${postSlug}`);
        });
      });
    });

    return ['/', '/courses', ...slugs];
  }

  return [];
}

async function queryStaleRoutes(
  body: Pick<ParseBody['body'], '_type' | '_id' | 'slug'>
): Promise<StaleRoute[]> {
  const client = createClient({ projectId, dataset, apiVersion, useCdn: false });

  switch (body._type) {
    case 'settings':
      return queryAllRoutes(client);
    case 'post':
      return queryStalePostRoutes(client, body._id);
    case 'section':
      return queryStaleSectionRoutes(client, body._id);
    case 'course':
      return queryStaleCourseRoutes(client, body._id);
    case 'author':
      return queryStaleAuthorRoutes(client, body._id);

    default:
      throw new TypeError(`Unknown type: ${body._type}`);
  }
}

export default async function revalidate(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { body, isValidSignature } = await parseBody(req, process.env.SANITY_REVALIDATE_SECRET);
    if (isValidSignature === false) {
      const message = 'Invalid signature';
      console.log(message);
      return res.status(401).send(message);
    }

    if (typeof body._id !== 'string' || !body._id) {
      const invalidId = 'Invalid _id';
      console.error(invalidId, { body });
      return res.status(400).send(invalidId);
    }

    const staleRoutes = await queryStaleRoutes(body as any);
    await Promise.all(staleRoutes.map((route) => res.revalidate(route)));

    const updatedRoutes = `Updated routes: ${staleRoutes.join(', ')}`;
    console.log(updatedRoutes);
    return res.status(200).send(updatedRoutes);
  } catch (err: any) {
    console.error(err);
    return res.status(500).send(err.message);
  }
}
