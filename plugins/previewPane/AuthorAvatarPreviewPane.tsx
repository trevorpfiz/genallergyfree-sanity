import { Card, Flex } from '@sanity/ui';
import AuthorAvatar from 'components/AuthorAvatar';

interface Props {
  name: any;
  portrait: any;
}

export default function AuthorAvatarPreviewPane(props: Props) {
  const { name, portrait } = props;
  return (
    <Card padding={6}>
      <Flex justify="center">
        <AuthorAvatar name={name || 'Untitled'} portrait={portrait} />
      </Flex>
    </Card>
  );
}
