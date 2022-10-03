import { Anchor, Container, Text } from '@mantine/core';

export default function Alert({ preview }) {
  return (
    <>
      {preview && (
        <Container
          fluid={true}
          px='lg'
          sx={{
            backgroundColor: '#333',
            borderBottom: '1px solid #333',
            paddingTop: '8px',
            paddingBottom: '8px',
          }}
        >
          <Text size='sm' align='center' sx={{ color: 'white' }}>
            <>
              This page is a preview.{' '}
              <Anchor
                href='/api/exit-preview'
                underline='true'
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
