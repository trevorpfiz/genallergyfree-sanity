import { ComponentIcon } from '@sanity/icons';
import { orderRankField } from '@sanity/orderable-document-list';
import { defineType } from 'sanity';

export default defineType({
  name: 'course',
  title: 'Course',
  icon: ComponentIcon,
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
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'targetAudience',
      title: 'Target Audience',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
    orderRankField({ type: 'course' }),
  ],
});
