import Script from 'next/script';

import { WEBSITE_URL } from '#/lib/constants';
import { urlForImage } from '#/lib/sanity.image';
import { Post } from '#/lib/sanity.queries';

function transformSlug(slug: string): string {
  // Split the slug into words
  const words = slug.split('-');

  // Capitalize each word
  const capitalizedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));

  // Join the words back into a single string
  const transformedString = capitalizedWords.join(' ');

  return transformedString;
}

interface Params {
  courseSlug: string;
  sectionSlug: string;
  postSlug: string;
}

export default function ArticleStructuredData({
  post,
  params,
  logo,
}: {
  post: Post;
  params: Params;
  logo: any;
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    image: [urlForImage(post.heroImage).width(1920).url()],
    datePublished: post.publishedDate,
    dateModified: post.modifiedDate || '2022-12-23T09:20:00+08:00',
    author: post?.authors?.map((author) => ({
      '@type': 'Person',
      name: author.name,
      url: author.url,
    })),
    publisher: {
      '@type': 'Organization',
      name: 'Generation Allergy Free',
      url: `${WEBSITE_URL}`,
      logo: urlForImage(logo).width(500).url(),
    },
    // keywords: ''
    // mainEntityOfPage: ''
    description: post.excerpt,
  };

  const structuredBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Learn',
        item: `${WEBSITE_URL}/learn`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: transformSlug(params.courseSlug),
        item: `${WEBSITE_URL}/learn/${params.courseSlug}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: transformSlug(params.sectionSlug),
        item: `${WEBSITE_URL}/learn/${params.courseSlug}/${params.sectionSlug}`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: post.title,
      },
    ],
  };

  return (
    <>
      <Script
        id="structured-data-article"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData, null, '\t') }}
      />
      <Script
        id="structured-data-breadcrumbs"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredBreadcrumb, null, '\t') }}
      />
    </>
  );
}
