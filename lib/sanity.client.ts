import 'server-only';

import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId, useCdn } from '#/lib/sanity.api';
import {
  courseQuery,
  indexQuery,
  postBySlugQuery,
  postQuery,
  postSlugsQuery,
  sectionQuery,
  settingsQuery,
  type Course,
  type Post,
  type Section,
  type Settings,
} from '#/lib/sanity.queries';

/**
 * Checks if it's safe to create a client instance, as `@sanity/client` will throw an error if `projectId` is false
 */
const client = projectId ? createClient({ projectId, dataset, apiVersion, useCdn }) : null;

// settings
export async function getSettings(): Promise<Settings> {
  if (client) {
    return (await client.fetch(settingsQuery)) || {};
  }
  return {} as any;
}

// index
export async function getAllCourses(): Promise<Course[]> {
  if (client) {
    return (await client.fetch(indexQuery)) || [];
  }
  return [];
}

// post
export async function getPost(slug: string, token?: string | null): Promise<Post> {
  if (projectId) {
    const client = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn,
      token: token || undefined,
    });
    return (await client.fetch(postQuery, { slug })) || ({} as any);
  }
  return {} as any;
}

export async function getAllPostsSlugs(): Promise<Post[]> {
  if (client) {
    return (await client.fetch(postSlugsQuery)) || [];
  }
  return [];
}

export async function getPostBySlug(slug: string): Promise<Post> {
  if (client) {
    return (await client.fetch(postBySlugQuery, { slug })) || ({} as any);
  }
  return {} as any;
}

// section
export async function getSection(slug: string): Promise<Section> {
  if (client) {
    return (await client.fetch(sectionQuery, { slug })) || ({} as any);
  }
  return {} as any;
}

// course
export async function getCourse(slug: string, token?: string | null): Promise<Course> {
  if (projectId) {
    const client = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn,
      token: token || undefined,
    });
    return (await client.fetch(courseQuery, { slug })) || ({} as any);
  }
  return {} as any;
}
