/* eslint-disable @next/next/no-html-link-for-pages */

export default function AlertBanner({
  preview,
  loading,
}: {
  preview?: boolean;
  loading?: boolean;
}) {
  return (
    <>
      {preview && (
        <div className="border-accent-7 bg-accent-7 border-b text-white">
          <div className="container mx-auto px-5">
            <div className="py-2 text-center text-sm">
              {loading ? 'Loading... ' : 'This page is a preview. '}
              <a
                href="/api/exit-preview"
                className="hover:text-cyan underline transition-colors duration-200"
              >
                Click here
              </a>{' '}
              to exit preview mode.
            </div>
          </div>
        </div>
      )}
    </>
  );
}
