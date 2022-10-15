// fields
const postFields = /* groq */ `
  _id,
  name,
  title,
  publishedDate,
  excerpt,
  heroImage {
    ...,
    "altText": asset->altText,
    "lqip": asset->metadata.lqip
  },
  "authors": authors[]->{name, portrait},
  "slug": slug.current,
`;

const sectionFields = /* groq */ `
  _id,
  title,
  "slug": slug.current,
  thumbnail {
    ...,
    "altText": asset->altText,
    "lqip": asset->metadata.lqip
  },
`;

const courseFields = /* groq */ `
  _id,
  title,
  "slug": slug.current,
  description,
  thumbnail {
    ...,
    "altText": asset->altText,
    "lqip": asset->metadata.lqip
  },
`;

// index
export const indexQuery = /* groq */ `
*[_type == "course"] | order(order) {
  ${courseFields}
}`;

// post
export const postQuery = /* groq */ `
{
  "post": *[_type == "post" && slug.current == $slug] | order(order) [0] {
    ${postFields}
    content[]{
      ...,
      _type == "image" => {
        ...,
        "altText": asset->altText,
        "lqip": asset->metadata.lqip
      },
      markDefs[]{
        ...,
        _type == "internalLink" => {
          "slug": @.reference->slug.current,
          "section": @.reference->sections[0]->slug.current,
          "course": @.reference->sections[0]->courses[0]->slug.current
        }
      }
    }
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(order) [0...2] {
    content,
    ${postFields}
  }
}`;

export const postSlugsQuery = /* groq */ `
*[_type == "post" && defined(slug.current)] {
  "slug": slug.current,
  sections[]->{
    "slug": slug.current,
    courses[]->{
      "slug": slug.current
    }
  }
}
`;

export const postBySlugQuery = /* groq */ `
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
  "slug": slug.current,
  sections[]->{
    "slug": slug.current,
    courses[]->{
      "slug": slug.current
    }
  }
}
`;

// section
export const sectionQuery = /* groq */ `
*[_type == "section" && slug.current == $slug] | order(order) [0] {
  ${sectionFields}
  "posts": *[_type == "post" && references(^._id)] | order(order) {
      title,
      "slug": slug.current
    }
  }
`;

export const sectionSlugsQuery = /* groq */ `
*[_type == "section" && defined(slug.current)] {
  "slug": slug.current,
  courses[]->{
    "slug": slug.current
  }
}
`;

// course
export const courseQuery = /* groq */ `
*[_type == "course" && slug.current == $slug] | order(order) [0] {
  ${courseFields}
  "sections": *[_type == "section" && references(^._id)] | order(order) {
      title,
      "slug": slug.current,
      "posts": *[_type == "post" && references(^._id)] | order(order) {
        title,
        "slug": slug.current
      }
    }
  }
`;

export const courseSlugsQuery = /* groq */ `
*[_type == "course" && defined(slug.current)][].slug.current
`;
