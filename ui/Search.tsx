import { DocSearch } from '@docsearch/react';

export default function Search({ courseSlug }: { courseSlug: string }) {
  let index = '';

  switch (courseSlug) {
    case 'allergy-prevention':
      index = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_PREVENTION || '';
      break;
    case 'allergy-management':
      index = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_MANAGEMENT || '';
      break;
    case 'allergy-treatment':
      index = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_TREATMENT || '';
      break;
  }

  return (
    <DocSearch
      appId={process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID || ''}
      apiKey={process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY || ''}
      indexName={index}
    />
  );
}
