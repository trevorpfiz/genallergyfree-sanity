import Moment from 'moment';

export default function Date({ dateCreated }: { dateCreated: Date }) {
  return (
    <time dateTime={dateCreated.toString()}>{Moment(dateCreated).format('MMMM D, YYYY')}</time>
  );
}
