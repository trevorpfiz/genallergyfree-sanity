import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from 'sanity-codegen';

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Post
 *
 *
 */
export interface Post extends SanityDocument {
  _type: 'post';

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: 'slug'; current: string };

  /**
   * Content — `array`
   *
   *
   */
  content?: Array<SanityKeyed<SanityBlock>>;

  /**
   * Excerpt — `string`
   *
   *
   */
  excerpt?: string;

  /**
   * Cover Image — `image`
   *
   *
   */
  coverImage?: {
    _type: 'image';
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Date — `datetime`
   *
   *
   */
  date?: string;

  /**
   * Author — `reference`
   *
   *
   */
  author?: SanityReference<Author>;
}

/**
 * Author
 *
 *
 */
export interface Author extends SanityDocument {
  _type: 'author';

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Picture — `image`
   *
   *
   */
  picture?: {
    _type: 'image';
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

export type Documents = Post | Author;
