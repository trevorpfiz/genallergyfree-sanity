import { s } from 'sanity-typed-schema-builder';
import authorTyped from './authorTyped';

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
        of: [s.block()],
      }),
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: s.string(),
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: s.image({
        hotspot: true,
      }),
    },
    {
      name: 'date',
      title: 'Date',
      type: s.datetime(),
    },
    {
      name: 'author',
      title: 'Author',
      type: s.reference({
        to: [authorTyped],
      }),
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'coverImage',
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});

export default post;
