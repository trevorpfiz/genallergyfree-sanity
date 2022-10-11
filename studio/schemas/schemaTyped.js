// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

import author from './authorTyped';
import post from './postTyped.tsx';
import section from './sectionTyped';

export default createSchema({
  name: 'default',
  types: [post.schema(), author.schema(), section.schema()],
});
