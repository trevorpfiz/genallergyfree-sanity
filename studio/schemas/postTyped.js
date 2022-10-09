import { s } from 'sanity-typed-schema-builder';

import authorTyped from './authorTyped';
import sectionTyped from './sectionTyped';

const post = s.document({
  name: 'post',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: s.string(),
    },
    {
      name: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      type: s.slug(),
    },
    {
      name: 'content',
      title: 'Content',
      type: s.array({
        of: [s.block()],
      }),
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: s.string(),
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: s.image({
        hotspot: true,
      }),
    },
    {
      name: 'publishedDate',
      title: 'Published Date',
      type: s.datetime(),
    },
    {
      name: 'author',
      title: 'Author',
      type: s.reference({
        to: [authorTyped],
      }),
    },
    {
      name: 'section',
      title: 'Section',
      type: s.reference({
        to: [sectionTyped],
      }),
    },
    {
      name: 'order',
      title: 'Order',
      type: s.number(),
      optional: true,
      hidden: true,
    },
  ],
  orderings: [
    {
      name: 'manualOrder',
      title: 'Manual order',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'heroImage',
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});

export default post;
