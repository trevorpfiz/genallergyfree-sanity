import { format, parseISO } from 'date-fns';

export default function Date({ dateString }: { dateString: Date }) {
  if (!dateString) return null;

  const date = parseISO(dateString.toString());

  return <time dateTime={dateString.toString()}>{format(date, 'LLLL d, yyyy')}</time>;
}
