/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...index]].tsx` route
 */

import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';
import { visionTool } from '@sanity/vision';
import { apiVersion, dataset, previewSecretId, projectId } from 'lib/sanity.api';
import { previewDocumentNode } from 'plugins/previewPane';
import { productionUrl } from 'plugins/productionUrl';
import { defineConfig } from 'sanity';
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash';
import { deskTool } from 'sanity/desk';

import authorType from 'schemas/author';
import courseType from 'schemas/course';
import postType from 'schemas/post';
import sectionType from 'schemas/section';

const title = process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || 'Next.js Blog with Sanity.io';

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title,
  schema: {
    // If you want more content types, you can add them to this array
    types: [postType, sectionType, courseType, authorType],
  },
  plugins: [
    deskTool({
      structure: (S, context) =>
        S.list()
          .title('Content')
          .items([
            // Minimum required configuration
            orderableDocumentListDeskItem({ type: courseType.name, S, context }),
            orderableDocumentListDeskItem({ type: sectionType.name, S, context }),
            orderableDocumentListDeskItem({ type: postType.name, S, context }),
            orderableDocumentListDeskItem({ type: authorType.name, S, context }),
          ]),
      // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
      defaultDocumentNode: previewDocumentNode({ apiVersion, previewSecretId }),
    }),
    // Add the "Open preview" action
    productionUrl({
      apiVersion,
      previewSecretId,
      types: [postType.name, sectionType.name, courseType.name],
    }),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
