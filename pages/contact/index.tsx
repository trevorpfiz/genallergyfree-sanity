import {
  Box,
  Button,
  Container,
  createStyles,
  Stack,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { showNotification, updateNotification } from '@mantine/notifications';
import { IconCheck, IconX } from '@tabler/icons';
import useWeb3Forms from '@web3forms/react';
import Head from 'next/head';
import type { ReactElement } from 'react';

import Layout from '../../components/layouts/primary/layout';
import { WEBSITE_NAME } from '../../lib/constants';
import type { NextPageWithLayout } from '../_app';

const useStyles = createStyles((theme) => ({
  titleSection: {
    backgroundColor: '#FEED00',
    paddingBottom: 100,

    [theme.fn.smallerThan('lg')]: {
      paddingBottom: 0,
    },
  },
  title: {
    fontSize: '3rem',
    textTransform: 'uppercase',
    marginBottom: 0,

    [theme.fn.largerThan('sm')]: {
      fontSize: '6rem',
    },
  },
  description: {
    fontWeight: 400,

    [theme.fn.largerThan('sm')]: {
      paddingBottom: 24,
    },
  },

  formStack: {
    maxWidth: 500,
  },
}));

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: NextPageWithLayout = () => {
  const { classes } = useStyles();

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },

    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  const { submit } = useWeb3Forms<FormData>({
    access_key: '336fa9be-c4a6-4347-a855-64651fc2c17c',
    onSuccess: () => {
      form.setValues({
        name: '',
        email: '',
        message: '',
      });

      updateNotification({
        id: 'send-email',
        title: 'Email Sent!',
        message: 'We will send you a reply shortly!',
        color: 'green',
        icon: <IconCheck />,
        autoClose: 30000,
      });
    },
    onError: () => {
      updateNotification({
        id: 'send-email',
        title: 'Error.',
        message: 'We will fix this soon! Sorry!',
        color: 'red',
        icon: <IconX />,
        autoClose: 30000,
      });
    },
  });

  return (
    <>
      <Head>
        <title>{`Contact | ${WEBSITE_NAME}`}</title>
      </Head>
      <Box component="section" className={classes.titleSection}>
        <Container size="lg" pt={80} pb={300}>
          <Stack spacing="xl">
            <Title order={1} className={classes.title}>
              Let&apos;s connect
            </Title>
            <Title order={4} className={classes.description}>
              Insight and feedback helps everyone. Send us a message with the form below to start
              the conversation.
            </Title>
            <form onSubmit={form.onSubmit((values) => submit(values))}>
              <Stack className={classes.formStack}>
                <TextInput
                  placeholder="Name"
                  radius="xl"
                  size="lg"
                  aria-label="Name"
                  {...form.getInputProps('name')}
                />
                <TextInput
                  placeholder="Email"
                  radius="xl"
                  size="lg"
                  aria-label="Email"
                  {...form.getInputProps('email')}
                />
                <Textarea
                  placeholder="Message"
                  radius="xl"
                  size="xl"
                  autosize
                  minRows={2}
                  aria-label="Message"
                  {...form.getInputProps('message')}
                />

                <Button
                  type="submit"
                  onClick={() =>
                    showNotification({
                      id: 'send-email',
                      loading: true,
                      title: 'Sending your message',
                      message: 'Your message is being sent.',
                      autoClose: false,
                      disallowClose: true,
                    })
                  }
                  color="dark"
                  radius="xl"
                  size="lg"
                >
                  Submit
                </Button>
              </Stack>
            </form>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Contact.getLayout = function getLayout(page: ReactElement, pageProps) {
  return (
    <Layout preview={pageProps.preview} headerColor="#FEED00" footerColor="black">
      {page}
    </Layout>
  );
};

export default Contact;
