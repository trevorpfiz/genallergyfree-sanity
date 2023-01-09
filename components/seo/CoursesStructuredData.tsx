import { WEBSITE_URL } from '#/lib/constants';
import { Course } from '#/lib/sanity.queries';
import Script from 'next/script';

export default function CoursesStructuredData({ courses }: { courses: Course[] }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Course',
          url: `${WEBSITE_URL}/learn/allergy-prevention`,
          name: courses[0]?.title,
          description: courses[0]?.heroDescription,
          provider: {
            '@type': 'Organization',
            name: 'Generation Allergy Free',
            sameAs: `${WEBSITE_URL}`,
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'Course',
          url: `${WEBSITE_URL}/learn/allergy-management`,
          name: courses[1]?.title,
          description: courses[1]?.heroDescription,
          provider: {
            '@type': 'Organization',
            name: 'Generation Allergy Free',
            sameAs: `${WEBSITE_URL}`,
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'Course',
          url: `${WEBSITE_URL}/learn/allergy-treatment`,
          name: courses[2]?.title,
          description: courses[2]?.heroDescription,
          provider: {
            '@type': 'Organization',
            name: 'Generation Allergy Free',
            sameAs: `${WEBSITE_URL}`,
          },
        },
      },
    ],
  };

  return (
    <Script
      id="structured-data-courses"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData, null, '\t') }}
    />
  );
}
