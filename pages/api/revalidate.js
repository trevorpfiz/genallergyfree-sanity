import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook';
import { sanityClient } from '../../lib/sanity.server';

// Next.js will by default parse the body, which can lead to invalid signatures
export const config = {
  api: {
    bodyParser: false,
  },
};

const POST_UPDATED_QUERY = /* groq */ `
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

const SECTION_UPDATED_QUERY = /* groq */ `
*[_type == "section" && _id == $id] {
  "slug": slug.current,
  courses[]->{
    "slug": slug.current
  }
}
`;

const COURSE_UPDATED_QUERY = /* groq */ `
*[_type == "course" && _id == $id].slug.current
`;

const AUTHOR_UPDATED_QUERY = /* groq */ `
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

const getQueryForType = (type) => {
  switch (type) {
    case 'post':
      return POST_UPDATED_QUERY;
    case 'section':
      return SECTION_UPDATED_QUERY;
    case 'course':
      return COURSE_UPDATED_QUERY;
    case 'author':
      return AUTHOR_UPDATED_QUERY;
    default:
      throw new TypeError(`Unknown type: ${type}`);
  }
};

const getSlugsForType = (type, slug) => {
  switch (type) {
    case 'post':
      return (Array.isArray(slug) ? slug : [slug]).flatMap((post) =>
        post.sections.flatMap((section) =>
          section.courses.flatMap((course) => [
            `/learn/${course.slug}/${section.slug}`,
            `/learn/${course.slug}/${section.slug}/${post.slug}`,
          ])
        )
      );
    case 'section':
      return (Array.isArray(slug) ? slug : [slug]).flatMap((section) =>
        section.courses.flatMap((course) => [
          `/learn/${course.slug}`,
          `/learn/${course.slug}/${section.slug}`,
        ])
      );
    case 'course':
      return (Array.isArray(slug) ? slug : [slug]).map((_slug) => `/learn/${_slug}`);
    case 'author':
      return (Array.isArray(slug) ? slug : [slug]).flatMap((author) =>
        author.posts.flatMap((post) =>
          post.sections.flatMap((section) =>
            section.courses.flatMap((course) => [
              `/learn/${course.slug}/${section.slug}/${post.slug}`,
            ])
          )
        )
      );
    default:
      throw new TypeError(`Unknown type: ${type}`);
  }
};

// eslint-disable-next-line no-console
const log = (msg, error) => console[error ? 'error' : 'log'](`[revalidate] ${msg}`);

async function readBody(readable) {
  const chunks = [];
  // eslint-disable-next-line no-restricted-syntax
  for await (const chunk of readable) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks).toString('utf8');
}

export default async function revalidate(req, res) {
  const signature = req.headers[SIGNATURE_HEADER_NAME];
  const body = await readBody(req); // Read the body into a string
  if (!isValidSignature(body, signature, process.env.SANITY_REVALIDATE_SECRET?.trim())) {
    const invalidSignature = 'Invalid signature';
    log(invalidSignature, true);
    return res.status(401).json({ success: false, message: invalidSignature });
  }

  const jsonBody = JSON.parse(body);
  const { _id: id, _type } = jsonBody;
  if (typeof id !== 'string' || !id) {
    const invalidId = 'Invalid _id';
    log(invalidId, true);
    return res.status(400).json({ message: invalidId });
  }

  log(`Querying post slug for _id '${id}', type '${_type}' ..`);
  const slug = await sanityClient.fetch(getQueryForType(_type), { id });
  const slugs = getSlugsForType(_type, slug);
  const staleRoutes = ['/', ...slugs];

  try {
    await Promise.all(staleRoutes.map((route) => res.revalidate(route)));
    const updatedRoutes = `Updated routes: ${staleRoutes.join(', ')}`;
    log(updatedRoutes);
    return res.status(200).json({ message: updatedRoutes });
  } catch (err) {
    log(err.message, true);
    return res.status(500).json({ message: err.message });
  }
}
