import { createStyles, Title } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  myResponsiveTitle: {
    fontSize: '3rem',

    [theme.fn.smallerThan('sm')]: {
      fontSize: '2.75rem',
      textAlign: 'center',
    },
  },
}));

export default function PostTitle(props: { children: React.ReactNode }) {
  const { classes } = useStyles();

  return (
    <Title
      order={1}
      weight="bold"
      mt="3rem"
      mb="3rem"
      className={classes.myResponsiveTitle}
      sx={{ lineHeight: '1.25', letterSpacing: '-0.025em' }}
    >
      {props.children}
    </Title>
  );
}
