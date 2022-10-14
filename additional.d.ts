import { s } from 'sanity-typed-schema-builder';

import authorTyped from 'studio/schemas/authorTyped';
import courseTyped from 'studio/schemas/courseTyped';
import postTyped from 'studio/schemas/postTyped';
import sectionTyped from 'studio/schemas/sectionTyped';

type BasePostSanity = s.resolved<typeof postTyped>;
interface PostSanity extends BasePostSanity {
  heroImage: ImageWithAltSanity;
}

type BaseSectionSanity = s.resolved<typeof sectionTyped>;
interface SectionSanity extends BaseSectionSanity {
  thumbnail: ImageWithAltSanity;
}

type BaseCourseSanity = s.resolved<typeof courseTyped>;
interface CourseSanity extends BaseCourseSanity {
  thumbnail: ImageWithAltSanity;
}

type BaseAuthorSanity = s.resolved<typeof authorTyped>;

const sanityImage = s.image();
type ImageSanity = s.infer<typeof sanityImage>;
type ImageWithAltSanity = ImageSanity & { altText: string };
