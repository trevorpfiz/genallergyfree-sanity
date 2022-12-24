import React from 'react';

// RichTextEditor.jsx
const SuperscriptIcon = () => (
  <span>
    x<sup>2</sup>
  </span>
);

const InternalLinkIcon = () => (
  <span>
    x<sup>2</sup>
  </span>
);

const SuperscriptDecorator = (props) => <sup>{props.children}</sup>;

export default {
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
            icon: SuperscriptIcon,
            component: SuperscriptDecorator,
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
            icon: InternalLinkIcon,
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
            icon: SuperscriptIcon,
            component: SuperscriptDecorator,
          },
        ],
      },
    },
    {
      type: 'image',
    },
  ],
};
