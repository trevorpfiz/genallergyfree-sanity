const postFields = `
  _id,
  name,
  title,
  publishedDate,
  excerpt,
  heroImage,
  "slug": slug.current,
  "author": author->{name, portrait},
`;

export const indexQuery = `
*[_type == "post"] | order(publishedDate desc, _updatedAt desc) {
  ${postFields}
}`;

export const postQuery = `
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    ${postFields}
    content[]{
      ...,
      markDefs[]{
        ...,
        _type == "internalLink" => {
          "slug": @.reference->slug
        }
      }
    }
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(publishedDate desc, _updatedAt desc) [0...2] {
    content,
    ${postFields}
  }
}`;

export const postSlugsQuery = `
*[_type == "post" && defined(slug.current)][].slug.current
`;

export const postBySlugQuery = `
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`;
