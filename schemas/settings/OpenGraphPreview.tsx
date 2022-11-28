import { Card } from '@sanity/ui';
import { createIntlSegmenterPolyfill } from 'intl-segmenter-polyfill';
import { cache, use, useMemo } from 'react';
import _satori, { type SatoriOptions } from 'satori';
import styled from 'styled-components';

import { height, OpenGraphImage, width } from '#/components/seo/OpenGraphImage';
import type { Settings } from '#/lib/sanity.queries';

const init = cache(async (): Promise<SatoriOptions['fonts']> => {
  if (!globalThis?.Intl?.Segmenter) {
    console.debug('Polyfilling Intl.Segmenter');
    globalThis.Intl = globalThis.Intl || {};
    //@ts-expect-error says Segmenter is read-only
    globalThis.Intl.Segmenter = await createIntlSegmenterPolyfill(
      fetch(new URL('public/break_iterator.wasm', import.meta.url))
    );
  }

  const fontData = await fetch(new URL('public/Inter-Bold.woff', import.meta.url)).then((res) =>
    res.arrayBuffer()
  );

  return [{ name: 'Inter', data: fontData, style: 'normal', weight: 700 }];
});

const OpenGraphSvg = styled(Card).attrs({
  radius: 3,
  shadow: 1,
  overflow: 'hidden',
})`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    display: block;
    object-fit: cover;
    aspect-ratio: ${width} / ${height};
    object-position: center;
    height: 100%;
    width: 100%;
  }
`;

const satori = cache(_satori);

export default function OpenGraphPreview(props: Settings['ogImage']) {
  const fonts = use(init());

  const __html = use(
    satori(
      useMemo(() => <OpenGraphImage title={props?.title || ''} />, [props?.title]),
      useMemo(() => ({ width, height, fonts }), [fonts])
    )
  );

  return <OpenGraphSvg dangerouslySetInnerHTML={{ __html }} />;
}
