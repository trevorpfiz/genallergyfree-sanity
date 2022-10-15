import { s } from 'sanity-typed-schema-builder';

import courseTyped from './courseTyped';

const section = s.document({
  name: 'section',
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
      name: 'chapter',
      title: 'Chapter',
      type: s.string(),
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: s.image({
        hotspot: true,
      }),
    },
    {
      name: 'courses',
      title: 'Courses',
      type: s.array({
        of: [
          s.reference({
            to: [courseTyped],
          }),
        ],
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
});

export default section;
