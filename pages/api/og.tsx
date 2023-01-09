/* eslint-disable @typescript-eslint/no-unused-vars */
import { ImageResponse } from '@vercel/og';
import { apiVersion, dataset, projectId } from 'lib/sanity.api';
import { createClient } from 'next-sanity';
import type { NextRequest, NextResponse } from 'next/server';
import type { PageConfig } from 'next/types';

import { height, OpenGraphImage, width } from '#/components/seo/OpenGraphImage';
import * as demo from '#/lib/demo.data';
import { Settings, settingsQuery } from '#/lib/sanity.queries';

export const config: PageConfig = { runtime: 'edge' };

export default async function og(req: NextRequest, nextRes: NextResponse) {
  const font = fetch(new URL('public/Inter-Bold.woff', import.meta.url)).then((res) =>
    res.arrayBuffer()
  );
  const { searchParams } = new URL(req.url);

  let title = searchParams.get('title');
  if (!title) {
    const client = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
    });
    const settings = (await client.fetch<Settings>(settingsQuery)) || {};
    title = settings?.ogImage?.title || demo.ogImageTitle;
  }

  return new ImageResponse(<OpenGraphImage title={title} />, {
    width,
    height,
    fonts: [
      {
        name: 'Inter',
        data: await font,
        style: 'normal',
        weight: 700,
      },
    ],
  });
}
