/* eslint-disable newline-per-chained-call */
import { urlForImage } from 'lib/sanity.image';
import Image from 'next/image';

interface Props {
  name: any;
  portrait: any;
}

export default function AuthorAvatar(props: Props) {
  const { name, portrait } = props;
  return (
    <div className="flex items-center">
      <div className="relative mr-4 h-12 w-12">
        <Image
          src={
            portrait?.asset?._ref
              ? urlForImage(portrait).height(96).width(96).fit('crop').url()
              : 'https://source.unsplash.com/96x96/?face'
          }
          className="rounded-full"
          height={96}
          width={96}
          // @TODO add alternative text to avatar image schema
          alt=""
        />
      </div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
}
