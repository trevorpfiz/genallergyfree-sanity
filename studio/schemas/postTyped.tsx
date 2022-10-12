import React from 'react';
import { s } from 'sanity-typed-schema-builder';

import authorTyped from './authorTyped';
import sectionTyped from './sectionTyped';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type _react = typeof React;

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
        of: [
          s.block({
            marks: {
              decorators: [
                { title: 'Strong', value: 'strong' },
                { title: 'Emphasis', value: 'em' },
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
          }),
          s.image({}),
        ],
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
