import { Button, Container, Group } from '@mantine/core';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons';
import { PostSanity } from 'additional';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface PrevNextProps {
  prev?: PostSanity;
  next?: PostSanity;
}

export function PrevNext({ prev, next }: PrevNextProps) {
  const router = useRouter();
  const { course, slug } = router.query;

  return (
    <Container size="md" px={0} pb={80}>
      <Group position="apart">
        {prev && slug !== 'medical-disclaimer' ? (
          <Link
            href={`/learn/${course}/${prev.section}/${prev.slug}`}
            style={{ textDecoration: 'none' }}
          >
            <Button
              variant="light"
              color="pink"
              size="lg"
              radius="xl"
              sx={{ paddingLeft: 16, paddingRight: 24 }}
            >
              <IconChevronLeft />
              Previous
            </Button>
          </Link>
        ) : (
          <Button
            variant="light"
            color="pink"
            size="lg"
            radius="xl"
            sx={{ paddingLeft: 16, paddingRight: 24 }}
            disabled
          >
            <IconChevronLeft />
            Previous
          </Button>
        )}
        {next && slug !== 'citation-list' ? (
          <Link
            href={`/learn/${course}/${next.section}/${next.slug}`}
            style={{ textDecoration: 'none' }}
          >
            <Button
              variant="light"
              color="pink"
              size="lg"
              radius="xl"
              sx={{ paddingLeft: 24, paddingRight: 16 }}
            >
              Next
              <IconChevronRight />
            </Button>
          </Link>
        ) : (
          <Button
            variant="light"
            color="pink"
            size="lg"
            radius="xl"
            sx={{ paddingLeft: 24, paddingRight: 16 }}
            disabled
          >
            Next
            <IconChevronRight />
          </Button>
        )}
      </Group>
    </Container>
  );
}
