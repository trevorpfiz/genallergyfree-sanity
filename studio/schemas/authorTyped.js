import { s } from 'sanity-typed-schema-builder';

const author = s.document({
  name: 'author',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: s.string(),
    },
    {
      name: 'portrait',
      title: 'Portrait',
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

export default author;
