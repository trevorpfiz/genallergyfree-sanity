import { CogIcon } from '@sanity/icons';
import * as demo from 'lib/demo.data';
import { defineField, defineType } from 'sanity';

import OpenGraphInput from './OpenGraphInput';

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: CogIcon,
  preview: { select: { title: 'title', subtitle: 'description' } },
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'title',
      description: 'This field is the title of your blog.',
      title: 'Title',
      type: 'string',
      initialValue: demo.title,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      description: 'Used for the <meta> description tag for SEO.',
      title: 'Description',
      type: 'text',
      initialValue: demo.description,
      validation: (rule) => rule.max(155).required(),
    }),
    defineField({
      name: 'logo',
      description: 'This field is the logo of your blog.',
      title: 'Logo',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      description: 'Used for social media previews when linking to the index page.',
      type: 'object',
      components: {
        input: OpenGraphInput as any,
      },
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          initialValue: demo.ogImageTitle,
        }),
      ],
    }),
  ],
});
