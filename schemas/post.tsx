import { DocumentIcon } from '@sanity/icons';
import { orderRankField } from '@sanity/orderable-document-list';
import { defineType } from 'sanity';

import authorType from './author';
import sectionType from './section';

/**
 * This file is the schema definition for a post.
 *
 * Here you'll be able to edit the different fields that appear when you
 * create or edit a post in the studio.
 *
 * Here you can see the different schema types that are available:

  https://www.sanity.io/docs/schema-types

 */

export default defineType({
  name: 'post',
  title: 'Post',
  icon: DocumentIcon,
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
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading 1', value: 'h1' },
            { title: 'Heading 2', value: 'h2' },
            { title: 'Heading 3', value: 'h3' },
            { title: 'Heading 4', value: 'h4' },
            { title: 'Heading 5', value: 'h5' },
            { title: 'Heading 6', value: 'h6' },
            { title: 'Quote', value: 'blockquote' },
            {
              title: 'Intro',
              value: 'intro',
            },
            {
              title: 'Summary',
              value: 'summary',
            },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Underline', value: 'underline' },
              { title: 'Strike', value: 'strike-through' },
              {
                title: 'Sup',
                value: 'sup',
                blockEditor: {
                  icon: () => (
                    <div>
                      x<sup>2</sup>
                    </div>
                  ),
                  render: ({ children }: any) => <sup>{children}</sup>,
                },
              },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'External link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                  {
                    title: 'Open in new tab',
                    name: 'blank',
                    type: 'boolean',
                  },
                ],
              },
              {
                name: 'internalLink',
                type: 'object',
                title: 'Internal link',
                fields: [
                  {
                    name: 'reference',
                    type: 'reference',
                    title: 'Reference',
                    to: [{ type: 'post' }],
                  },
                ],
                blockEditor: {
                  icon: () => <div>in</div>,
                },
              },
              {
                name: 'footnote',
                type: 'object',
                title: 'Footnote',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                  {
                    title: 'Open in new tab',
                    name: 'blank',
                    type: 'boolean',
                  },
                ],
                blockEditor: {
                  icon: () => (
                    <div>
                      x<sup>2</sup>
                    </div>
                  ),
                  render: ({ children }: { children: any }) => <sup>{children}</sup>,
                },
              },
            ],
          },
        },
        {
          type: 'image',
        },
      ],
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'publishedDate',
      title: 'Published Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: authorType.name }],
        },
      ],
    },
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: sectionType.name }],
        },
      ],
    },
    orderRankField({ type: 'post' }),
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
