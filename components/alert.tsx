import { Anchor, Container, Text } from '@mantine/core';

export default function Alert({ preview }: any) {
  return (
    <>
      {preview && (
        <Container
          fluid
          px="lg"
          sx={{
            backgroundColor: '#333',
            borderBottom: '1px solid #333',
            paddingTop: '8px',
            paddingBottom: '8px',
          }}
        >
          <Text size="sm" align="center" sx={{ color: 'white' }}>
            <>
              This page is a preview.{' '}
              <Anchor
                href="/api/exit-preview"
                underline
                sx={{
                  '&:hover': {
                    color: 'coral',
                  },
                  transition: 'color 200ms',
                  color: 'white',
                }}
              >
                Click here
              </Anchor>{' '}
              to exit preview mode.
            </>
          </Text>
        </Container>
      )}
    </>
  );
}
