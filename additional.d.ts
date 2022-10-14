import { s } from 'sanity-typed-schema-builder';

import authorTyped from 'studio/schemas/authorTyped';
import courseTyped from 'studio/schemas/courseTyped';
import postTyped from 'studio/schemas/postTyped';
import sectionTyped from 'studio/schemas/sectionTyped';

type PostSanity = s.resolved<typeof postTyped>;

type SectionSanity = s.resolved<typeof sectionTyped>;

type CourseSanity = s.resolved<typeof courseTyped>;

type AuthorSanity = s.resolved<typeof authorTyped>;

const sanityImage = s.image();
type ImageSanity = s.infer<typeof sanityImage>;
type ImageWithAltSanity = ImageSanity & { altText: string };
