import { Anchor, Container, Text } from '@mantine/core';

export default function Alert({ preview }: { preview: boolean }) {
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
            width: '100%',
          }}
        >
          <Text size="sm" align="center" sx={{ color: 'white' }}>
            <>
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
