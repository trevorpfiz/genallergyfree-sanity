/**
 * This config is used to set up Sanity Studio that's mounted on the `/app/(studio)/studio/[[...index]]/page.tsx` route
 */

import { apiVersion, dataset, previewSecretId, projectId } from '#/lib/sanity.api';
import { previewDocumentNode } from '#/plugins/previewPane';
import { productionUrl } from '#/plugins/productionUrl';
import { settingsPlugin, settingsStructure } from '#/plugins/settings';
import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash';
import { media, mediaAssetSource } from 'sanity-plugin-media';
import { deskTool } from 'sanity/desk';

import authorType from 'schemas/author';
import courseType from 'schemas/course';
import postType from 'schemas/post';
import sectionType from 'schemas/section';
import settingsType from 'schemas/settings';

const title = process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || 'Generation Allergy Free';

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title,
  schema: {
    // If you want more content types, you can add them to this array
    types: [postType, sectionType, courseType, authorType, settingsType],
  },
  plugins: [
    deskTool({
      structure: settingsStructure(settingsType),
      // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
      defaultDocumentNode: previewDocumentNode({ apiVersion, previewSecretId }),
    }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    settingsPlugin({ type: settingsType.name }),
    // Add the "Open preview" action
    productionUrl({
      apiVersion,
      previewSecretId,
      types: [postType.name, settingsType.name],
    }),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    // Media browser plugin
    media(),
  ],
  form: {
    // Don't use this plugin when selecting files only (but allow all other enabled asset sources)
    file: {
      assetSources: (previousAssetSources) =>
        previousAssetSources.filter((assetSource) => assetSource !== mediaAssetSource),
    },
  },
});
