import { TriangleOutlineIcon } from '@sanity/icons';
import { orderRankField } from '@sanity/orderable-document-list';
import { defineType } from 'sanity';

import courseType from './course';

export default defineType({
  name: 'section',
  title: 'Section',
  icon: TriangleOutlineIcon,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'chapter',
      title: 'Chapter',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'courses',
      title: 'Courses',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: courseType.name }],
        },
      ],
    },
    orderRankField({ type: 'section' }),
  ],
});
