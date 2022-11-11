import sanitizeHtml from 'sanitize-html';

import rawHTML from '../../../lib/terms-html';

export default function TermsPage() {
  return (
    <div className="mx-auto mt-8 mb-32 max-w-4xl px-4 pt-[88px]">
      <div
        className="break-words [&_h1]:text-[32px] [&_h1]:font-bold [&_a]:underline [&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-10"
        dangerouslySetInnerHTML={{
          __html: sanitizeHtml(rawHTML, {
            allowedAttributes: {
              '*': ['style', 'class', 'id', 'href', 'align', 'data-custom-class'],
            },
          }),
        }}
      />
    </div>
  );
}
