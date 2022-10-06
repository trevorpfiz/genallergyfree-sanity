import { format, parseISO } from 'date-fns';
import { useEffect, useState } from 'react';

// Sanity Date is an ISO 8601 formatted string, so we use toString() to get the correct type for date-fns
export default function Date({ dateCreated }: { dateCreated: Date }) {
  const [date, setDate] = useState(parseISO(dateCreated.toString()));

  useEffect(() => {
    // prevent server side rendering
    if (dateCreated && window) {
      setDate(parseISO(dateCreated.toString()));
    }
  }, [dateCreated]);

  return <time dateTime={dateCreated.toString()}>{format(date, 'LLLL d, yyyy')}</time>;
}
