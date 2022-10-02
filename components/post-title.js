import { Title } from '@mantine/core';

import { useStyles } from './intro';

export default function PostTitle({ children }) {
  const { classes } = useStyles();

  return (
    <Title
      order={1}
      weight='bold'
      mb={'3rem'}
      className={classes.myResponsiveTitle}
      sx={{ lineHeight: '1.25', letterSpacing: '-0.025em' }}
    >
      {children}
    </Title>
  );
}
