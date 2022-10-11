import { s } from 'sanity-typed-schema-builder';

const section = s.document({
  name: 'section',
  fields: [
    {
      name: 'title',
      title: 'Title',
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
