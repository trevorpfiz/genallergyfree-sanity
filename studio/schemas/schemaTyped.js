// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

import author from './authorTyped';
import course from './courseTyped';
import post from './postTyped.tsx';
import section from './sectionTyped';

export default createSchema({
  name: 'default',
  types: [post.schema(), section.schema(), course.schema(), author.schema()],
});
