import sanitizeHtml from 'sanitize-html';

import ScrollUp from '#/components/ScrollUp';
import rawHTML from '#/lib/legal/privacy-html';

export default function PrivacyPage() {
  return (
    <>
      <ScrollUp />
      <div className="mx-auto mt-8 mb-32 max-w-4xl px-4">
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
    </>
  );
}
