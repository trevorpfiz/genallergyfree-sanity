import { s } from 'sanity-typed-schema-builder';

const course = s.document({
  name: 'course',
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
      name: 'description',
      title: 'Description',
      type: s.text(),
    },
    {
      name: 'heroDescription',
      title: 'Hero Description',
      type: s.text(),
    },
    {
      name: 'targetAudience',
      title: 'Target Audience',
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

export default course;
