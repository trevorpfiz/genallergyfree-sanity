import { Title, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  myResponsiveText: {
    fontSize: '6rem',

    [theme.fn.smallerThan('sm')]: {
      fontSize: '2.75rem',
      textAlign: 'center',
    },
  },
}));

export default function PostTitle({ children }) {
  const { classes } = useStyles();
  return (
    <Title
      order={1}
      weight='bold'
      mb={'3rem'}
      sx={{ lineHeight: '1.25', letterSpacing: '-0.025em' }}
      className={classes.myResponsiveText}
    >
      {children}
    </Title>
  );
}
