// fields
const postFields = /* groq */ `
  _id,
  title,
  publishedDate,
  excerpt,
  heroImage {
    ...,
    "altText": asset->altText,
    "lqip": asset->metadata.lqip
  },
  orderRank,
  "authors": authors[]->{name, portrait},
  "slug": slug.current,
`;

const sectionFields = /* groq */ `
  _id,
  title,
  chapter,
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
  heroDescription,
  targetAudience,
  thumbnail {
    ...,
    "altText": asset->altText,
    "lqip": asset->metadata.lqip
  },
`;

// index
export const indexQuery = /* groq */ `
*[_type == "course"] | order(orderRank) {
  ${courseFields}
}`;

// post
export const postQuery = /* groq */ `
*[_type == "post" && slug.current == $slug][0] {
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
  }
  `;

export const prevNextPostQuery = /* groq */ `
 {
  "prev": *[_type == "post" && orderRank == $order - 1] | order(orderRank) [0] {
    "slug": slug.current,
    "section": sections[0]->slug.current,
  },
  "next": *[_type == "post" && orderRank == $order + 1] | order(orderRank) [0] {
    "slug": slug.current,
    "section": sections[0]->slug.current,
  }
}
`;

// export const postSlugsQuery = /* groq */ `
// *[_type == "post" && references(*[_type == "section" && slug.current == $sectionSlug]._id)][].slug.current
// `;

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
*[_type == "section" && slug.current == $slug] | order(orderRank) [0] {
  ${sectionFields}
  "posts": *[_type == "post" && references(^._id)] | order(orderRank) {
    ${postFields}
    }
  }
`;

// export const sectionSlugsQuery = /* groq */ `
// *[_type == "section" && references(*[_type == "course" && slug.current == $courseSlug]._id)][].slug.current
// `;

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
  "sections": *[_type == "section" && references(^._id)] | order(orderRank) {
      ${sectionFields}
      "posts": *[_type == "post" && references(^._id)] | order(orderRank) {
        title,
        "slug": slug.current
      }
    }
  }
`;

export const courseSlugsQuery = /* groq */ `
*[_type == "course" && defined(slug.current)][].slug.current
`;

// types
export interface Post {
  _id: string;
  title: string;
  slug: string;
  content?: any;
  excerpt: string;
  heroImage: any;
  publishedDate: string;
  authors?: Author[];
  sections?: Section[];
  orderRank?: any;
  // ---
  section?: string;
}

export interface Section {
  _id: string;
  title: string;
  slug: string;
  chapter: string;
  thumbnail: any;
  courses?: Course[];
  orderRank?: any;
  // ---
  posts?: Post[];
}

export interface Course {
  _id: string;
  title: string;
  slug: string;
  description: string;
  heroDescription: string;
  targetAudience: string;
  thumbnail: any;
  orderRank?: any;
  // ---
  sections?: Section[];
}

export interface Author {
  _id: string;
  name: string;
  slug: string;
  portrait: any;
  orderRank?: any;
}
