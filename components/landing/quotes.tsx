import clsx from 'clsx';

interface QuotesProps {
  color: string;
}

export default function Quotes({ color = 'oldyellow' }: QuotesProps) {
  return (
    <div className="mx-auto max-w-7xl md:grid md:grid-cols-2 md:px-6 lg:px-8">
      <div className="border-black py-12 px-4 sm:px-6 md:flex md:flex-col md:border-r md:py-16 md:pl-0 md:pr-10 lg:pr-16">
        <blockquote className="mt-6 md:flex md:flex-grow md:flex-col">
          <div className="relative text-lg font-medium md:flex-grow">
            <svg
              className={clsx('absolute top-0 left-0 h-8 w-8 -translate-y-9', {
                'text-yellow-300': color === 'oldyellow',
                'text-pink-300': color === 'oldpink',
              })}
              fill="currentColor"
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p className="relative font-bold italic md:h-32">
              This{' '}
              <span
                className={clsx({
                  'text-oldyellow': color === 'oldyellow',
                  'text-oldpink': color === 'oldpink',
                })}
              >
                comprehensive
              </span>{' '}
              allergy prevention course combines current research with practical strategies and is
              an{' '}
              <span
                className={clsx({
                  'text-oldyellow': color === 'oldyellow',
                  'text-oldpink': color === 'oldpink',
                })}
              >
                invaluable resource
              </span>{' '}
              for parents who want to help their children{' '}
              <span
                className={clsx({
                  'text-oldyellow': color === 'oldyellow',
                  'text-oldpink': color === 'oldpink',
                })}
              >
                avoid the struggles and suffering associated with food allergies
              </span>
              .
            </p>
          </div>
          <footer className="mt-2">
            <div className="flex items-start">
              <div className="text-xs font-bold">__Julie Janssen</div>
            </div>
          </footer>
        </blockquote>
      </div>
      <div
        className={clsx(
          'border-t-2 border-black py-12 px-4 sm:px-6 md:border-t-0 md:border-l md:py-16 md:pr-0 md:pl-10 lg:pl-16'
          // {
          //   'border-oldyellow': color === 'oldyellow',
          //   'border-oldpink': color === 'oldpink',
          // }
        )}
      >
        <blockquote className="mt-6 md:flex md:flex-grow md:flex-col">
          <div className="relative text-lg md:flex-grow">
            <svg
              className={clsx('absolute top-0 left-0 h-8 w-8 -translate-y-9', {
                'text-yellow-300': color === 'oldyellow',
                'text-pink-300': color === 'oldpink',
              })}
              fill="currentColor"
              viewBox="0 0 32 32"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p className="relative font-bold italic md:h-32">
              This is <span className="">wonderful</span>. My son{' '}
              <span
                className={clsx({
                  'text-oldyellow': color === 'oldyellow',
                  'text-oldpink': color === 'oldpink',
                })}
              >
                suffered from eczema
              </span>{' '}
              and after reading through these courses, I&apos;ve learned concepts that will help
              many new families{' '}
              <span
                className={clsx({
                  'text-oldyellow': color === 'oldyellow',
                  'text-oldpink': color === 'oldpink',
                })}
              >
                avoid those struggles
              </span>
              .
            </p>
          </div>
          <footer className="mt-2">
            <div className="flex items-start">
              <div className="text-xs font-bold">__Rita Kane</div>
            </div>
          </footer>
        </blockquote>
      </div>
    </div>
  );
}
