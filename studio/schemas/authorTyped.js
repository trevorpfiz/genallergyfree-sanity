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
      name: 'picture',
      title: 'Picture',
      type: s.image({
        hotspot: true,
      }),
    },
  ],
});

export default author;
