import { Carousel } from '@mantine/carousel';
import { Blockquote, createStyles, Text } from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';

interface QuotesProps {
  color: string;
}

const useStyles = createStyles((theme, { color }: QuotesProps) => ({
  carousel: {
    height: 350,

    [theme.fn.largerThan('sm')]: {
      height: 450,
    },
  },

  quote: {
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: 700,
    lineHeight: 1,

    [theme.fn.largerThan('sm')]: {
      fontSize: '2.5rem',
    },
  },
  highlight: {
    color,
  },
}));

export function Quotes({ color }: QuotesProps) {
  const { classes } = useStyles({ color });

  const autoplay = useRef(Autoplay({ delay: 4000 }));

  return (
    <Carousel
      sx={{}}
      mx="auto"
      withIndicators
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      className={classes.carousel}
      styles={{
        control: {
          opacity: 0,
          cursor: 'default',
        },
        indicator: {
          backgroundColor: 'black',
          width: 12,
          height: 4,
          transition: 'width 250ms ease',

          '&[data-active]': {
            width: 40,
          },
        },
      }}
    >
      <Carousel.Slide>
        <Blockquote
          color="dark"
          cite="__ Julie Janssen"
          styles={{
            cite: {
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: 12,
              color: 'black',
            },
          }}
        >
          <Text component="p" mt={0} className={classes.quote}>
            This <span className={classes.highlight}>comprehensive</span> allergy prevention course
            combines current research with practical strategies and is an{' '}
            <span className={classes.highlight}>invaluable resource</span> for parents who want to
            help their children{' '}
            <span className={classes.highlight}>
              avoid the struggles and suffering associated with food allergies
            </span>
            .
          </Text>
        </Blockquote>
      </Carousel.Slide>
      <Carousel.Slide>
        <Blockquote
          color="dark"
          cite="__ Rita Kane"
          styles={{
            cite: {
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: 12,
              color: 'black',
            },
          }}
        >
          <Text component="p" mt={0} className={classes.quote}>
            {' '}
            This is <span className={classes.highlight}>wonderful</span>. My son{' '}
            <span className={classes.highlight}>suffered from eczema</span> and after reading
            through these courses, I&apos;ve learned concepts that will help many new families{' '}
            <span className={classes.highlight}>avoid those struggles</span>.
          </Text>
        </Blockquote>
      </Carousel.Slide>
    </Carousel>
  );
}
