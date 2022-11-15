/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** A string used to identify an i18n locale */
  I18NLocaleCode: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  Long: any;
  /** A time string with format HH:mm:ss.SSS */
  Time: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type BacklightType = {
  __typename?: 'BacklightType';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BacklightTypeEntity = {
  __typename?: 'BacklightTypeEntity';
  attributes?: Maybe<BacklightType>;
  id?: Maybe<Scalars['ID']>;
};

export type BacklightTypeEntityResponse = {
  __typename?: 'BacklightTypeEntityResponse';
  data?: Maybe<BacklightTypeEntity>;
};

export type BacklightTypeEntityResponseCollection = {
  __typename?: 'BacklightTypeEntityResponseCollection';
  data: Array<BacklightTypeEntity>;
  meta: ResponseCollectionMeta;
};

export type BacklightTypeFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<BacklightTypeFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<BacklightTypeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<BacklightTypeFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type BacklightTypeInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type BacklightTypeRelationResponseCollection = {
  __typename?: 'BacklightTypeRelationResponseCollection';
  data: Array<BacklightTypeEntity>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  eqi?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type Brand = {
  __typename?: 'Brand';
  createdAt?: Maybe<Scalars['DateTime']>;
  logo?: Maybe<UploadFileEntityResponse>;
  name: Scalars['String'];
  series?: Maybe<TvSerieRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type BrandSeriesArgs = {
  filters?: InputMaybe<TvSerieFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BrandEntity = {
  __typename?: 'BrandEntity';
  attributes?: Maybe<Brand>;
  id?: Maybe<Scalars['ID']>;
};

export type BrandEntityResponse = {
  __typename?: 'BrandEntityResponse';
  data?: Maybe<BrandEntity>;
};

export type BrandEntityResponseCollection = {
  __typename?: 'BrandEntityResponseCollection';
  data: Array<BrandEntity>;
  meta: ResponseCollectionMeta;
};

export type BrandFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<BrandFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<BrandFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<BrandFiltersInput>>>;
  series?: InputMaybe<TvSerieFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type BrandInput = {
  logo?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  series?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type BrandRelationResponseCollection = {
  __typename?: 'BrandRelationResponseCollection';
  data: Array<BrandEntity>;
};

export type Color = {
  __typename?: 'Color';
  createdAt?: Maybe<Scalars['DateTime']>;
  hex: Scalars['String'];
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ColorCreation = {
  __typename?: 'ColorCreation';
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ColorCreationEntity = {
  __typename?: 'ColorCreationEntity';
  attributes?: Maybe<ColorCreation>;
  id?: Maybe<Scalars['ID']>;
};

export type ColorCreationEntityResponse = {
  __typename?: 'ColorCreationEntityResponse';
  data?: Maybe<ColorCreationEntity>;
};

export type ColorCreationEntityResponseCollection = {
  __typename?: 'ColorCreationEntityResponseCollection';
  data: Array<ColorCreationEntity>;
  meta: ResponseCollectionMeta;
};

export type ColorCreationFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ColorCreationFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ColorCreationFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ColorCreationFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ColorCreationInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ColorCreationRelationResponseCollection = {
  __typename?: 'ColorCreationRelationResponseCollection';
  data: Array<ColorCreationEntity>;
};

export type ColorDepth = {
  __typename?: 'ColorDepth';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ColorDepthEntity = {
  __typename?: 'ColorDepthEntity';
  attributes?: Maybe<ColorDepth>;
  id?: Maybe<Scalars['ID']>;
};

export type ColorDepthEntityResponse = {
  __typename?: 'ColorDepthEntityResponse';
  data?: Maybe<ColorDepthEntity>;
};

export type ColorDepthEntityResponseCollection = {
  __typename?: 'ColorDepthEntityResponseCollection';
  data: Array<ColorDepthEntity>;
  meta: ResponseCollectionMeta;
};

export type ColorDepthFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ColorDepthFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ColorDepthFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ColorDepthFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ColorDepthInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ColorDepthRelationResponseCollection = {
  __typename?: 'ColorDepthRelationResponseCollection';
  data: Array<ColorDepthEntity>;
};

export type ColorEntity = {
  __typename?: 'ColorEntity';
  attributes?: Maybe<Color>;
  id?: Maybe<Scalars['ID']>;
};

export type ColorEntityResponse = {
  __typename?: 'ColorEntityResponse';
  data?: Maybe<ColorEntity>;
};

export type ColorEntityResponseCollection = {
  __typename?: 'ColorEntityResponseCollection';
  data: Array<ColorEntity>;
  meta: ResponseCollectionMeta;
};

export type ColorFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ColorFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  hex?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ColorFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ColorFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ColorInput = {
  hex?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ColorRelationResponseCollection = {
  __typename?: 'ColorRelationResponseCollection';
  data: Array<ColorEntity>;
};

export type ComponentConnectionConnection = {
  __typename?: 'ComponentConnectionConnection';
  connectionTechnologies?: Maybe<ConnectionTechnologyRelationResponseCollection>;
  id: Scalars['ID'];
  privateName?: Maybe<Scalars['String']>;
  quantity: Scalars['Int'];
  type?: Maybe<ConnectionTypeEntityResponse>;
};


export type ComponentConnectionConnectionConnectionTechnologiesArgs = {
  filters?: InputMaybe<ConnectionTechnologyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentConnectionConnectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentConnectionConnectionFiltersInput>>>;
  connectionTechnologies?: InputMaybe<ConnectionTechnologyFiltersInput>;
  not?: InputMaybe<ComponentConnectionConnectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentConnectionConnectionFiltersInput>>>;
  privateName?: InputMaybe<StringFilterInput>;
  quantity?: InputMaybe<IntFilterInput>;
  type?: InputMaybe<ConnectionTypeFiltersInput>;
};

export type ComponentConnectionConnectionInput = {
  connectionTechnologies?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id?: InputMaybe<Scalars['ID']>;
  privateName?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['ID']>;
};

export type ComponentDesignDimensions = {
  __typename?: 'ComponentDesignDimensions';
  depth: Scalars['Float'];
  height: Scalars['Float'];
  id: Scalars['ID'];
  weight: Scalars['Float'];
  width: Scalars['Float'];
};

export type ComponentDesignDimensionsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentDesignDimensionsFiltersInput>>>;
  depth?: InputMaybe<FloatFilterInput>;
  height?: InputMaybe<FloatFilterInput>;
  not?: InputMaybe<ComponentDesignDimensionsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentDesignDimensionsFiltersInput>>>;
  weight?: InputMaybe<FloatFilterInput>;
  width?: InputMaybe<FloatFilterInput>;
};

export type ComponentDesignDimensionsInput = {
  depth?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['ID']>;
  weight?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type ComponentGeneralBrand = {
  __typename?: 'ComponentGeneralBrand';
  id: Scalars['ID'];
  model: Scalars['String'];
  serie?: Maybe<TvSerieEntityResponse>;
};

export type ComponentGeneralBrandFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentGeneralBrandFiltersInput>>>;
  model?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentGeneralBrandFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentGeneralBrandFiltersInput>>>;
  serie?: InputMaybe<TvSerieFiltersInput>;
};

export type ComponentGeneralBrandInput = {
  id?: InputMaybe<Scalars['ID']>;
  model?: InputMaybe<Scalars['String']>;
  serie?: InputMaybe<Scalars['ID']>;
};

export type ComponentHelpArticleSubsection = {
  __typename?: 'ComponentHelpArticleSubsection';
  articles?: Maybe<ExternalSiteRelationResponseCollection>;
  id: Scalars['ID'];
  title: Scalars['String'];
};


export type ComponentHelpArticleSubsectionArticlesArgs = {
  filters?: InputMaybe<ExternalSiteFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentHelpArticleSubsectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentHelpArticleSubsectionFiltersInput>>>;
  articles?: InputMaybe<ExternalSiteFiltersInput>;
  not?: InputMaybe<ComponentHelpArticleSubsectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentHelpArticleSubsectionFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentHelpArticleSubsectionInput = {
  articles?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentImageBacklightAndContrast = {
  __typename?: 'ComponentImageBacklightAndContrast';
  backlightType?: Maybe<BacklightTypeEntityResponse>;
  brightness?: Maybe<Scalars['Int']>;
  contrast?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  zoneNumber?: Maybe<Scalars['Int']>;
};

export type ComponentImageBacklightAndContrastFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentImageBacklightAndContrastFiltersInput>>>;
  backlightType?: InputMaybe<BacklightTypeFiltersInput>;
  brightness?: InputMaybe<IntFilterInput>;
  contrast?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentImageBacklightAndContrastFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentImageBacklightAndContrastFiltersInput>>>;
  zoneNumber?: InputMaybe<IntFilterInput>;
};

export type ComponentImageBacklightAndContrastInput = {
  backlightType?: InputMaybe<Scalars['ID']>;
  brightness?: InputMaybe<Scalars['Int']>;
  contrast?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  zoneNumber?: InputMaybe<Scalars['Int']>;
};

export type ComponentImageColorimetry = {
  __typename?: 'ComponentImageColorimetry';
  colorDepth?: Maybe<ColorDepthEntityResponse>;
  dciP3?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  rec709?: Maybe<Scalars['Float']>;
  rec2020?: Maybe<Scalars['Float']>;
  sRGB?: Maybe<Scalars['Float']>;
};

export type ComponentImageColorimetryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentImageColorimetryFiltersInput>>>;
  colorDepth?: InputMaybe<ColorDepthFiltersInput>;
  dciP3?: InputMaybe<FloatFilterInput>;
  not?: InputMaybe<ComponentImageColorimetryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentImageColorimetryFiltersInput>>>;
  rec709?: InputMaybe<FloatFilterInput>;
  rec2020?: InputMaybe<FloatFilterInput>;
  sRGB?: InputMaybe<FloatFilterInput>;
};

export type ComponentImageColorimetryInput = {
  colorDepth?: InputMaybe<Scalars['ID']>;
  dciP3?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['ID']>;
  rec709?: InputMaybe<Scalars['Float']>;
  rec2020?: InputMaybe<Scalars['Float']>;
  sRGB?: InputMaybe<Scalars['Float']>;
};

export type ComponentImageCrystal = {
  __typename?: 'ComponentImageCrystal';
  antiReflectiveFilter?: Maybe<Enum_Componentimagecrystal_Antireflectivefilter>;
  horizontalVisionAngle?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  verticalVisionAngle?: Maybe<Scalars['Float']>;
};

export type ComponentImageCrystalFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentImageCrystalFiltersInput>>>;
  antiReflectiveFilter?: InputMaybe<StringFilterInput>;
  horizontalVisionAngle?: InputMaybe<FloatFilterInput>;
  not?: InputMaybe<ComponentImageCrystalFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentImageCrystalFiltersInput>>>;
  verticalVisionAngle?: InputMaybe<FloatFilterInput>;
};

export type ComponentImageCrystalInput = {
  antiReflectiveFilter?: InputMaybe<Enum_Componentimagecrystal_Antireflectivefilter>;
  horizontalVisionAngle?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['ID']>;
  verticalVisionAngle?: InputMaybe<Scalars['Float']>;
};

export type ComponentImageHdr = {
  __typename?: 'ComponentImageHdr';
  id: Scalars['ID'];
  technologies?: Maybe<HdrTechnologyRelationResponseCollection>;
};


export type ComponentImageHdrTechnologiesArgs = {
  filters?: InputMaybe<HdrTechnologyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentImageHdrFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentImageHdrFiltersInput>>>;
  not?: InputMaybe<ComponentImageHdrFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentImageHdrFiltersInput>>>;
  technologies?: InputMaybe<HdrTechnologyFiltersInput>;
};

export type ComponentImageHdrInput = {
  id?: InputMaybe<Scalars['ID']>;
  technologies?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type ComponentImageProcessing = {
  __typename?: 'ComponentImageProcessing';
  id: Scalars['ID'];
  processor?: Maybe<ImageProcessorEntityResponse>;
};

export type ComponentImageProcessingFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentImageProcessingFiltersInput>>>;
  not?: InputMaybe<ComponentImageProcessingFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentImageProcessingFiltersInput>>>;
  processor?: InputMaybe<ImageProcessorFiltersInput>;
};

export type ComponentImageProcessingInput = {
  id?: InputMaybe<Scalars['ID']>;
  processor?: InputMaybe<Scalars['ID']>;
};

export type ComponentImageResponseTimes = {
  __typename?: 'ComponentImageResponseTimes';
  gaming?: Maybe<GamingTechnologyRelationResponseCollection>;
  id: Scalars['ID'];
  inputLag60?: Maybe<Scalars['Float']>;
  inputLag120?: Maybe<Scalars['Float']>;
};


export type ComponentImageResponseTimesGamingArgs = {
  filters?: InputMaybe<GamingTechnologyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentImageResponseTimesFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentImageResponseTimesFiltersInput>>>;
  gaming?: InputMaybe<GamingTechnologyFiltersInput>;
  inputLag60?: InputMaybe<FloatFilterInput>;
  inputLag120?: InputMaybe<FloatFilterInput>;
  not?: InputMaybe<ComponentImageResponseTimesFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentImageResponseTimesFiltersInput>>>;
};

export type ComponentImageResponseTimesInput = {
  gaming?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id?: InputMaybe<Scalars['ID']>;
  inputLag60?: InputMaybe<Scalars['Float']>;
  inputLag120?: InputMaybe<Scalars['Float']>;
};

export type ComponentImageTechnology = {
  __typename?: 'ComponentImageTechnology';
  creationColor?: Maybe<ColorCreationEntityResponse>;
  id: Scalars['ID'];
  image?: Maybe<ImageTechnologyEntityResponse>;
  lightingType?: Maybe<LightingTypeEntityResponse>;
  panel?: Maybe<PanelTechnologyEntityResponse>;
  panelManufacturer?: Maybe<PanelManufacturerEntityResponse>;
  refreshRate?: Maybe<Scalars['Float']>;
};

export type ComponentImageTechnologyFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentImageTechnologyFiltersInput>>>;
  creationColor?: InputMaybe<ColorCreationFiltersInput>;
  image?: InputMaybe<ImageTechnologyFiltersInput>;
  lightingType?: InputMaybe<LightingTypeFiltersInput>;
  not?: InputMaybe<ComponentImageTechnologyFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentImageTechnologyFiltersInput>>>;
  panel?: InputMaybe<PanelTechnologyFiltersInput>;
  panelManufacturer?: InputMaybe<PanelManufacturerFiltersInput>;
  refreshRate?: InputMaybe<FloatFilterInput>;
};

export type ComponentImageTechnologyInput = {
  creationColor?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
  lightingType?: InputMaybe<Scalars['ID']>;
  panel?: InputMaybe<Scalars['ID']>;
  panelManufacturer?: InputMaybe<Scalars['ID']>;
  refreshRate?: InputMaybe<Scalars['Float']>;
};

export type ComponentSectionsConnections = {
  __typename?: 'ComponentSectionsConnections';
  cable?: Maybe<Array<Maybe<ComponentConnectionConnection>>>;
  dvb?: Maybe<DvbRelationResponseCollection>;
  extraFeatures?: Maybe<ExtraFeatureRelationResponseCollection>;
  hbbTV?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  score: Scalars['Float'];
  wireless?: Maybe<WirelessConnectionTechnologyRelationResponseCollection>;
};


export type ComponentSectionsConnectionsCableArgs = {
  filters?: InputMaybe<ComponentConnectionConnectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ComponentSectionsConnectionsDvbArgs = {
  filters?: InputMaybe<DvbFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ComponentSectionsConnectionsExtraFeaturesArgs = {
  filters?: InputMaybe<ExtraFeatureFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ComponentSectionsConnectionsWirelessArgs = {
  filters?: InputMaybe<WirelessConnectionTechnologyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSectionsConnectionsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsConnectionsFiltersInput>>>;
  cable?: InputMaybe<ComponentConnectionConnectionFiltersInput>;
  dvb?: InputMaybe<DvbFiltersInput>;
  extraFeatures?: InputMaybe<ExtraFeatureFiltersInput>;
  hbbTV?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<ComponentSectionsConnectionsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsConnectionsFiltersInput>>>;
  score?: InputMaybe<FloatFilterInput>;
  wireless?: InputMaybe<WirelessConnectionTechnologyFiltersInput>;
};

export type ComponentSectionsConnectionsInput = {
  cable?: InputMaybe<Array<InputMaybe<ComponentConnectionConnectionInput>>>;
  dvb?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  extraFeatures?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  hbbTV?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  score?: InputMaybe<Scalars['Float']>;
  wireless?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type ComponentSectionsDesign = {
  __typename?: 'ComponentSectionsDesign';
  colors?: Maybe<ColorRelationResponseCollection>;
  dimensionsWithStand?: Maybe<ComponentDesignDimensions>;
  dimensionsWithoutStand?: Maybe<ComponentDesignDimensions>;
  id: Scalars['ID'];
  pictures?: Maybe<UploadFileRelationResponseCollection>;
  score: Scalars['Float'];
  screenShape?: Maybe<ScreenShapeEntityResponse>;
  vesa?: Maybe<VesaSizeEntityResponse>;
};


export type ComponentSectionsDesignColorsArgs = {
  filters?: InputMaybe<ColorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ComponentSectionsDesignPicturesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSectionsDesignFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsDesignFiltersInput>>>;
  colors?: InputMaybe<ColorFiltersInput>;
  dimensionsWithStand?: InputMaybe<ComponentDesignDimensionsFiltersInput>;
  dimensionsWithoutStand?: InputMaybe<ComponentDesignDimensionsFiltersInput>;
  not?: InputMaybe<ComponentSectionsDesignFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsDesignFiltersInput>>>;
  score?: InputMaybe<FloatFilterInput>;
  screenShape?: InputMaybe<ScreenShapeFiltersInput>;
  vesa?: InputMaybe<VesaSizeFiltersInput>;
};

export type ComponentSectionsDesignInput = {
  colors?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  dimensionsWithStand?: InputMaybe<ComponentDesignDimensionsInput>;
  dimensionsWithoutStand?: InputMaybe<ComponentDesignDimensionsInput>;
  id?: InputMaybe<Scalars['ID']>;
  pictures?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  score?: InputMaybe<Scalars['Float']>;
  screenShape?: InputMaybe<Scalars['ID']>;
  vesa?: InputMaybe<Scalars['ID']>;
};

export type ComponentSectionsGeneral = {
  __typename?: 'ComponentSectionsGeneral';
  brand?: Maybe<ComponentGeneralBrand>;
  id: Scalars['ID'];
  releaseDate: Scalars['Date'];
  screenSize: Scalars['Float'];
};

export type ComponentSectionsGeneralFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsGeneralFiltersInput>>>;
  brand?: InputMaybe<ComponentGeneralBrandFiltersInput>;
  not?: InputMaybe<ComponentSectionsGeneralFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsGeneralFiltersInput>>>;
  releaseDate?: InputMaybe<DateFilterInput>;
  screenSize?: InputMaybe<FloatFilterInput>;
};

export type ComponentSectionsGeneralInput = {
  brand?: InputMaybe<ComponentGeneralBrandInput>;
  id?: InputMaybe<Scalars['ID']>;
  releaseDate?: InputMaybe<Scalars['Date']>;
  screenSize?: InputMaybe<Scalars['Float']>;
};

export type ComponentSectionsImage = {
  __typename?: 'ComponentSectionsImage';
  backlightAndContrast?: Maybe<ComponentImageBacklightAndContrast>;
  colorimetry?: Maybe<ComponentImageColorimetry>;
  crystal?: Maybe<ComponentImageCrystal>;
  hdr?: Maybe<ComponentImageHdr>;
  id: Scalars['ID'];
  processing?: Maybe<ComponentImageProcessing>;
  resolution?: Maybe<ScreenResolutionEntityResponse>;
  responseTimes?: Maybe<ComponentImageResponseTimes>;
  score: Scalars['Float'];
  technology?: Maybe<ComponentImageTechnology>;
};

export type ComponentSectionsImageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsImageFiltersInput>>>;
  backlightAndContrast?: InputMaybe<ComponentImageBacklightAndContrastFiltersInput>;
  colorimetry?: InputMaybe<ComponentImageColorimetryFiltersInput>;
  crystal?: InputMaybe<ComponentImageCrystalFiltersInput>;
  hdr?: InputMaybe<ComponentImageHdrFiltersInput>;
  not?: InputMaybe<ComponentSectionsImageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsImageFiltersInput>>>;
  processing?: InputMaybe<ComponentImageProcessingFiltersInput>;
  resolution?: InputMaybe<ScreenResolutionFiltersInput>;
  responseTimes?: InputMaybe<ComponentImageResponseTimesFiltersInput>;
  score?: InputMaybe<FloatFilterInput>;
  technology?: InputMaybe<ComponentImageTechnologyFiltersInput>;
};

export type ComponentSectionsImageInput = {
  backlightAndContrast?: InputMaybe<ComponentImageBacklightAndContrastInput>;
  colorimetry?: InputMaybe<ComponentImageColorimetryInput>;
  crystal?: InputMaybe<ComponentImageCrystalInput>;
  hdr?: InputMaybe<ComponentImageHdrInput>;
  id?: InputMaybe<Scalars['ID']>;
  processing?: InputMaybe<ComponentImageProcessingInput>;
  resolution?: InputMaybe<Scalars['ID']>;
  responseTimes?: InputMaybe<ComponentImageResponseTimesInput>;
  score?: InputMaybe<Scalars['Float']>;
  technology?: InputMaybe<ComponentImageTechnologyInput>;
};

export type ComponentSectionsReviews = {
  __typename?: 'ComponentSectionsReviews';
  comparatives?: Maybe<ExternalSiteRelationResponseCollection>;
  id: Scalars['ID'];
  reviews?: Maybe<ExternalSiteRelationResponseCollection>;
};


export type ComponentSectionsReviewsComparativesArgs = {
  filters?: InputMaybe<ExternalSiteFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ComponentSectionsReviewsReviewsArgs = {
  filters?: InputMaybe<ExternalSiteFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSectionsReviewsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsReviewsFiltersInput>>>;
  comparatives?: InputMaybe<ExternalSiteFiltersInput>;
  not?: InputMaybe<ComponentSectionsReviewsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsReviewsFiltersInput>>>;
  reviews?: InputMaybe<ExternalSiteFiltersInput>;
};

export type ComponentSectionsReviewsInput = {
  comparatives?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id?: InputMaybe<Scalars['ID']>;
  reviews?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type ComponentSectionsSound = {
  __typename?: 'ComponentSectionsSound';
  id: Scalars['ID'];
  outputChannels?: Maybe<Scalars['String']>;
  power?: Maybe<Scalars['Float']>;
  score: Scalars['Float'];
  speakers?: Maybe<Array<Maybe<ComponentSoundSpeaker>>>;
  subwoofers?: Maybe<Array<Maybe<ComponentSoundSpeaker>>>;
  technologies?: Maybe<SoundTechnologyRelationResponseCollection>;
};


export type ComponentSectionsSoundSpeakersArgs = {
  filters?: InputMaybe<ComponentSoundSpeakerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ComponentSectionsSoundSubwoofersArgs = {
  filters?: InputMaybe<ComponentSoundSpeakerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ComponentSectionsSoundTechnologiesArgs = {
  filters?: InputMaybe<SoundTechnologyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSectionsSoundFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsSoundFiltersInput>>>;
  not?: InputMaybe<ComponentSectionsSoundFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsSoundFiltersInput>>>;
  outputChannels?: InputMaybe<StringFilterInput>;
  power?: InputMaybe<FloatFilterInput>;
  score?: InputMaybe<FloatFilterInput>;
  speakers?: InputMaybe<ComponentSoundSpeakerFiltersInput>;
  subwoofers?: InputMaybe<ComponentSoundSpeakerFiltersInput>;
  technologies?: InputMaybe<SoundTechnologyFiltersInput>;
};

export type ComponentSectionsSoundInput = {
  id?: InputMaybe<Scalars['ID']>;
  outputChannels?: InputMaybe<Scalars['String']>;
  power?: InputMaybe<Scalars['Float']>;
  score?: InputMaybe<Scalars['Float']>;
  speakers?: InputMaybe<Array<InputMaybe<ComponentSoundSpeakerInput>>>;
  subwoofers?: InputMaybe<Array<InputMaybe<ComponentSoundSpeakerInput>>>;
  technologies?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type ComponentSectionsSystem = {
  __typename?: 'ComponentSectionsSystem';
  consumption?: Maybe<ComponentSystemConsumption>;
  hardware?: Maybe<ComponentSystemHardware>;
  id: Scalars['ID'];
  operatingSystem?: Maybe<OperatingSystemVersionEntityResponse>;
  powerSupply?: Maybe<Scalars['Int']>;
  powerSupplyFrequency?: Maybe<Scalars['Int']>;
  score: Scalars['Float'];
  voiceAssistants?: Maybe<VoiceAssistantRelationResponseCollection>;
};


export type ComponentSectionsSystemVoiceAssistantsArgs = {
  filters?: InputMaybe<VoiceAssistantFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentSectionsSystemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSectionsSystemFiltersInput>>>;
  consumption?: InputMaybe<ComponentSystemConsumptionFiltersInput>;
  hardware?: InputMaybe<ComponentSystemHardwareFiltersInput>;
  not?: InputMaybe<ComponentSectionsSystemFiltersInput>;
  operatingSystem?: InputMaybe<OperatingSystemVersionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSectionsSystemFiltersInput>>>;
  powerSupply?: InputMaybe<IntFilterInput>;
  powerSupplyFrequency?: InputMaybe<IntFilterInput>;
  score?: InputMaybe<FloatFilterInput>;
  voiceAssistants?: InputMaybe<VoiceAssistantFiltersInput>;
};

export type ComponentSectionsSystemInput = {
  consumption?: InputMaybe<ComponentSystemConsumptionInput>;
  hardware?: InputMaybe<ComponentSystemHardwareInput>;
  id?: InputMaybe<Scalars['ID']>;
  operatingSystem?: InputMaybe<Scalars['ID']>;
  powerSupply?: InputMaybe<Scalars['Int']>;
  powerSupplyFrequency?: InputMaybe<Scalars['Int']>;
  score?: InputMaybe<Scalars['Float']>;
  voiceAssistants?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type ComponentSoundSpeaker = {
  __typename?: 'ComponentSoundSpeaker';
  id: Scalars['ID'];
  power: Scalars['Float'];
  privateName?: Maybe<Scalars['String']>;
  quantity: Scalars['Int'];
};

export type ComponentSoundSpeakerFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSoundSpeakerFiltersInput>>>;
  not?: InputMaybe<ComponentSoundSpeakerFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSoundSpeakerFiltersInput>>>;
  power?: InputMaybe<FloatFilterInput>;
  privateName?: InputMaybe<StringFilterInput>;
  quantity?: InputMaybe<IntFilterInput>;
};

export type ComponentSoundSpeakerInput = {
  id?: InputMaybe<Scalars['ID']>;
  power?: InputMaybe<Scalars['Float']>;
  privateName?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
};

export type ComponentSystemConsumption = {
  __typename?: 'ComponentSystemConsumption';
  averageConsumption?: Maybe<Scalars['Float']>;
  consumption?: Maybe<Scalars['Float']>;
  energyEfficiency?: Maybe<Enum_Componentsystemconsumption_Energyefficiency>;
  id: Scalars['ID'];
  standbyConsumption?: Maybe<Scalars['Float']>;
};

export type ComponentSystemConsumptionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSystemConsumptionFiltersInput>>>;
  averageConsumption?: InputMaybe<FloatFilterInput>;
  consumption?: InputMaybe<FloatFilterInput>;
  energyEfficiency?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSystemConsumptionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSystemConsumptionFiltersInput>>>;
  standbyConsumption?: InputMaybe<FloatFilterInput>;
};

export type ComponentSystemConsumptionInput = {
  averageConsumption?: InputMaybe<Scalars['Float']>;
  consumption?: InputMaybe<Scalars['Float']>;
  energyEfficiency?: InputMaybe<Enum_Componentsystemconsumption_Energyefficiency>;
  id?: InputMaybe<Scalars['ID']>;
  standbyConsumption?: InputMaybe<Scalars['Float']>;
};

export type ComponentSystemHardware = {
  __typename?: 'ComponentSystemHardware';
  id: Scalars['ID'];
  ram?: Maybe<Scalars['Float']>;
  rom?: Maybe<Scalars['Float']>;
  soc?: Maybe<SocModelEntityResponse>;
};

export type ComponentSystemHardwareFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSystemHardwareFiltersInput>>>;
  not?: InputMaybe<ComponentSystemHardwareFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSystemHardwareFiltersInput>>>;
  ram?: InputMaybe<FloatFilterInput>;
  rom?: InputMaybe<FloatFilterInput>;
  soc?: InputMaybe<SocModelFiltersInput>;
};

export type ComponentSystemHardwareInput = {
  id?: InputMaybe<Scalars['ID']>;
  ram?: InputMaybe<Scalars['Float']>;
  rom?: InputMaybe<Scalars['Float']>;
  soc?: InputMaybe<Scalars['ID']>;
};

export type Connection = {
  __typename?: 'Connection';
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ConnectionEntity = {
  __typename?: 'ConnectionEntity';
  attributes?: Maybe<Connection>;
  id?: Maybe<Scalars['ID']>;
};

export type ConnectionEntityResponse = {
  __typename?: 'ConnectionEntityResponse';
  data?: Maybe<ConnectionEntity>;
};

export type ConnectionEntityResponseCollection = {
  __typename?: 'ConnectionEntityResponseCollection';
  data: Array<ConnectionEntity>;
  meta: ResponseCollectionMeta;
};

export type ConnectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ConnectionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ConnectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ConnectionFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ConnectionInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type ConnectionRelationResponseCollection = {
  __typename?: 'ConnectionRelationResponseCollection';
  data: Array<ConnectionEntity>;
};

export type ConnectionTechnology = {
  __typename?: 'ConnectionTechnology';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ConnectionTechnologyEntity = {
  __typename?: 'ConnectionTechnologyEntity';
  attributes?: Maybe<ConnectionTechnology>;
  id?: Maybe<Scalars['ID']>;
};

export type ConnectionTechnologyEntityResponse = {
  __typename?: 'ConnectionTechnologyEntityResponse';
  data?: Maybe<ConnectionTechnologyEntity>;
};

export type ConnectionTechnologyEntityResponseCollection = {
  __typename?: 'ConnectionTechnologyEntityResponseCollection';
  data: Array<ConnectionTechnologyEntity>;
  meta: ResponseCollectionMeta;
};

export type ConnectionTechnologyFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ConnectionTechnologyFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ConnectionTechnologyFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ConnectionTechnologyFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ConnectionTechnologyInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ConnectionTechnologyRelationResponseCollection = {
  __typename?: 'ConnectionTechnologyRelationResponseCollection';
  data: Array<ConnectionTechnologyEntity>;
};

export type ConnectionType = {
  __typename?: 'ConnectionType';
  connection?: Maybe<ConnectionEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ConnectionTypeEntity = {
  __typename?: 'ConnectionTypeEntity';
  attributes?: Maybe<ConnectionType>;
  id?: Maybe<Scalars['ID']>;
};

export type ConnectionTypeEntityResponse = {
  __typename?: 'ConnectionTypeEntityResponse';
  data?: Maybe<ConnectionTypeEntity>;
};

export type ConnectionTypeEntityResponseCollection = {
  __typename?: 'ConnectionTypeEntityResponseCollection';
  data: Array<ConnectionTypeEntity>;
  meta: ResponseCollectionMeta;
};

export type ConnectionTypeFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ConnectionTypeFiltersInput>>>;
  connection?: InputMaybe<ConnectionFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ConnectionTypeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ConnectionTypeFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ConnectionTypeInput = {
  connection?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ConnectionTypeRelationResponseCollection = {
  __typename?: 'ConnectionTypeRelationResponseCollection';
  data: Array<ConnectionTypeEntity>;
};

export type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  contains?: InputMaybe<Scalars['Date']>;
  containsi?: InputMaybe<Scalars['Date']>;
  endsWith?: InputMaybe<Scalars['Date']>;
  eq?: InputMaybe<Scalars['Date']>;
  eqi?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  not?: InputMaybe<DateFilterInput>;
  notContains?: InputMaybe<Scalars['Date']>;
  notContainsi?: InputMaybe<Scalars['Date']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  startsWith?: InputMaybe<Scalars['Date']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  eqi?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export type Dvb = {
  __typename?: 'Dvb';
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  type: Enum_Dvb_Type;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DvbEntity = {
  __typename?: 'DvbEntity';
  attributes?: Maybe<Dvb>;
  id?: Maybe<Scalars['ID']>;
};

export type DvbEntityResponse = {
  __typename?: 'DvbEntityResponse';
  data?: Maybe<DvbEntity>;
};

export type DvbEntityResponseCollection = {
  __typename?: 'DvbEntityResponseCollection';
  data: Array<DvbEntity>;
  meta: ResponseCollectionMeta;
};

export type DvbFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<DvbFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<DvbFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<DvbFiltersInput>>>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type DvbInput = {
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Enum_Dvb_Type>;
};

export type DvbRelationResponseCollection = {
  __typename?: 'DvbRelationResponseCollection';
  data: Array<DvbEntity>;
};

export enum Enum_Componentimagecrystal_Antireflectivefilter {
  Improved = 'improved',
  Normal = 'normal'
}

export enum Enum_Componentsystemconsumption_Energyefficiency {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  E = 'E',
  F = 'F',
  G = 'G'
}

export enum Enum_Dvb_Type {
  Cable = 'cable',
  Satellite = 'satellite',
  Terrestrial = 'terrestrial'
}

export enum Enum_Externalsite_Type {
  Comparative = 'comparative',
  HelpArticle = 'help_article',
  Review = 'review'
}

export type Error = {
  __typename?: 'Error';
  code: Scalars['String'];
  message?: Maybe<Scalars['String']>;
};

export type ExternalSite = {
  __typename?: 'ExternalSite';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  siteName?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type: Enum_Externalsite_Type;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  video?: Maybe<Scalars['Boolean']>;
};

export type ExternalSiteEntity = {
  __typename?: 'ExternalSiteEntity';
  attributes?: Maybe<ExternalSite>;
  id?: Maybe<Scalars['ID']>;
};

export type ExternalSiteEntityResponse = {
  __typename?: 'ExternalSiteEntityResponse';
  data?: Maybe<ExternalSiteEntity>;
};

export type ExternalSiteEntityResponseCollection = {
  __typename?: 'ExternalSiteEntityResponseCollection';
  data: Array<ExternalSiteEntity>;
  meta: ResponseCollectionMeta;
};

export type ExternalSiteFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ExternalSiteFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  image?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ExternalSiteFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ExternalSiteFiltersInput>>>;
  siteName?: InputMaybe<StringFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  video?: InputMaybe<BooleanFilterInput>;
};

export type ExternalSiteInput = {
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  siteName?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Enum_Externalsite_Type>;
  url?: InputMaybe<Scalars['String']>;
  video?: InputMaybe<Scalars['Boolean']>;
};

export type ExternalSiteRelationResponseCollection = {
  __typename?: 'ExternalSiteRelationResponseCollection';
  data: Array<ExternalSiteEntity>;
};

export type ExtraFeature = {
  __typename?: 'ExtraFeature';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ExtraFeatureEntity = {
  __typename?: 'ExtraFeatureEntity';
  attributes?: Maybe<ExtraFeature>;
  id?: Maybe<Scalars['ID']>;
};

export type ExtraFeatureEntityResponse = {
  __typename?: 'ExtraFeatureEntityResponse';
  data?: Maybe<ExtraFeatureEntity>;
};

export type ExtraFeatureEntityResponseCollection = {
  __typename?: 'ExtraFeatureEntityResponseCollection';
  data: Array<ExtraFeatureEntity>;
  meta: ResponseCollectionMeta;
};

export type ExtraFeatureFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ExtraFeatureFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ExtraFeatureFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ExtraFeatureFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ExtraFeatureInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ExtraFeatureRelationResponseCollection = {
  __typename?: 'ExtraFeatureRelationResponseCollection';
  data: Array<ExtraFeatureEntity>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  eqi?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type GamingTechnology = {
  __typename?: 'GamingTechnology';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GamingTechnologyEntity = {
  __typename?: 'GamingTechnologyEntity';
  attributes?: Maybe<GamingTechnology>;
  id?: Maybe<Scalars['ID']>;
};

export type GamingTechnologyEntityResponse = {
  __typename?: 'GamingTechnologyEntityResponse';
  data?: Maybe<GamingTechnologyEntity>;
};

export type GamingTechnologyEntityResponseCollection = {
  __typename?: 'GamingTechnologyEntityResponseCollection';
  data: Array<GamingTechnologyEntity>;
  meta: ResponseCollectionMeta;
};

export type GamingTechnologyFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<GamingTechnologyFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<GamingTechnologyFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<GamingTechnologyFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type GamingTechnologyInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type GamingTechnologyRelationResponseCollection = {
  __typename?: 'GamingTechnologyRelationResponseCollection';
  data: Array<GamingTechnologyEntity>;
};

export type GenericMorph = BacklightType | Brand | Color | ColorCreation | ColorDepth | ComponentConnectionConnection | ComponentDesignDimensions | ComponentGeneralBrand | ComponentHelpArticleSubsection | ComponentImageBacklightAndContrast | ComponentImageColorimetry | ComponentImageCrystal | ComponentImageHdr | ComponentImageProcessing | ComponentImageResponseTimes | ComponentImageTechnology | ComponentSectionsConnections | ComponentSectionsDesign | ComponentSectionsGeneral | ComponentSectionsImage | ComponentSectionsReviews | ComponentSectionsSound | ComponentSectionsSystem | ComponentSoundSpeaker | ComponentSystemConsumption | ComponentSystemHardware | Connection | ConnectionTechnology | ConnectionType | Dvb | ExternalSite | ExtraFeature | GamingTechnology | HdrTechnology | HelpArticlesSection | I18NLocale | ImageProcessor | ImageTechnology | LightingType | Marketplace | MarketplaceTv | OperatingSystem | OperatingSystemVersion | PanelManufacturer | PanelTechnology | PaymentMethod | ScoreWeighting | ScreenResolution | ScreenShape | SocModel | SoundTechnology | Tv | TvSerie | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser | VesaSize | VoiceAssistant | WirelessConnectionTechnology | WirelessConnectionType;

export type HdrTechnology = {
  __typename?: 'HdrTechnology';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type HdrTechnologyEntity = {
  __typename?: 'HdrTechnologyEntity';
  attributes?: Maybe<HdrTechnology>;
  id?: Maybe<Scalars['ID']>;
};

export type HdrTechnologyEntityResponse = {
  __typename?: 'HdrTechnologyEntityResponse';
  data?: Maybe<HdrTechnologyEntity>;
};

export type HdrTechnologyEntityResponseCollection = {
  __typename?: 'HdrTechnologyEntityResponseCollection';
  data: Array<HdrTechnologyEntity>;
  meta: ResponseCollectionMeta;
};

export type HdrTechnologyFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<HdrTechnologyFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<HdrTechnologyFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<HdrTechnologyFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type HdrTechnologyInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type HdrTechnologyRelationResponseCollection = {
  __typename?: 'HdrTechnologyRelationResponseCollection';
  data: Array<HdrTechnologyEntity>;
};

export type HelpArticlesSection = {
  __typename?: 'HelpArticlesSection';
  createdAt?: Maybe<Scalars['DateTime']>;
  section1: ComponentHelpArticleSubsection;
  section2: ComponentHelpArticleSubsection;
  section3: ComponentHelpArticleSubsection;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type HelpArticlesSectionEntity = {
  __typename?: 'HelpArticlesSectionEntity';
  attributes?: Maybe<HelpArticlesSection>;
  id?: Maybe<Scalars['ID']>;
};

export type HelpArticlesSectionEntityResponse = {
  __typename?: 'HelpArticlesSectionEntityResponse';
  data?: Maybe<HelpArticlesSectionEntity>;
};

export type HelpArticlesSectionEntityResponseCollection = {
  __typename?: 'HelpArticlesSectionEntityResponseCollection';
  data: Array<HelpArticlesSectionEntity>;
  meta: ResponseCollectionMeta;
};

export type HelpArticlesSectionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<HelpArticlesSectionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  not?: InputMaybe<HelpArticlesSectionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<HelpArticlesSectionFiltersInput>>>;
  section1?: InputMaybe<ComponentHelpArticleSubsectionFiltersInput>;
  section2?: InputMaybe<ComponentHelpArticleSubsectionFiltersInput>;
  section3?: InputMaybe<ComponentHelpArticleSubsectionFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type HelpArticlesSectionInput = {
  section1?: InputMaybe<ComponentHelpArticleSubsectionInput>;
  section2?: InputMaybe<ComponentHelpArticleSubsectionInput>;
  section3?: InputMaybe<ComponentHelpArticleSubsectionInput>;
};

export type HelpArticlesSectionRelationResponseCollection = {
  __typename?: 'HelpArticlesSectionRelationResponseCollection';
  data: Array<HelpArticlesSectionEntity>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type I18NLocaleInput = {
  code?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type I18NLocaleRelationResponseCollection = {
  __typename?: 'I18NLocaleRelationResponseCollection';
  data: Array<I18NLocaleEntity>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  eqi?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type ImageProcessor = {
  __typename?: 'ImageProcessor';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ImageProcessorEntity = {
  __typename?: 'ImageProcessorEntity';
  attributes?: Maybe<ImageProcessor>;
  id?: Maybe<Scalars['ID']>;
};

export type ImageProcessorEntityResponse = {
  __typename?: 'ImageProcessorEntityResponse';
  data?: Maybe<ImageProcessorEntity>;
};

export type ImageProcessorEntityResponseCollection = {
  __typename?: 'ImageProcessorEntityResponseCollection';
  data: Array<ImageProcessorEntity>;
  meta: ResponseCollectionMeta;
};

export type ImageProcessorFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ImageProcessorFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ImageProcessorFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ImageProcessorFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ImageProcessorInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ImageProcessorRelationResponseCollection = {
  __typename?: 'ImageProcessorRelationResponseCollection';
  data: Array<ImageProcessorEntity>;
};

export type ImageTechnology = {
  __typename?: 'ImageTechnology';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ImageTechnologyEntity = {
  __typename?: 'ImageTechnologyEntity';
  attributes?: Maybe<ImageTechnology>;
  id?: Maybe<Scalars['ID']>;
};

export type ImageTechnologyEntityResponse = {
  __typename?: 'ImageTechnologyEntityResponse';
  data?: Maybe<ImageTechnologyEntity>;
};

export type ImageTechnologyEntityResponseCollection = {
  __typename?: 'ImageTechnologyEntityResponseCollection';
  data: Array<ImageTechnologyEntity>;
  meta: ResponseCollectionMeta;
};

export type ImageTechnologyFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ImageTechnologyFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ImageTechnologyFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ImageTechnologyFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ImageTechnologyInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ImageTechnologyRelationResponseCollection = {
  __typename?: 'ImageTechnologyRelationResponseCollection';
  data: Array<ImageTechnologyEntity>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  eqi?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  eqi?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type LightingType = {
  __typename?: 'LightingType';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type LightingTypeEntity = {
  __typename?: 'LightingTypeEntity';
  attributes?: Maybe<LightingType>;
  id?: Maybe<Scalars['ID']>;
};

export type LightingTypeEntityResponse = {
  __typename?: 'LightingTypeEntityResponse';
  data?: Maybe<LightingTypeEntity>;
};

export type LightingTypeEntityResponseCollection = {
  __typename?: 'LightingTypeEntityResponseCollection';
  data: Array<LightingTypeEntity>;
  meta: ResponseCollectionMeta;
};

export type LightingTypeFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<LightingTypeFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<LightingTypeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<LightingTypeFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type LightingTypeInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type LightingTypeRelationResponseCollection = {
  __typename?: 'LightingTypeRelationResponseCollection';
  data: Array<LightingTypeEntity>;
};

export type LongFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  contains?: InputMaybe<Scalars['Long']>;
  containsi?: InputMaybe<Scalars['Long']>;
  endsWith?: InputMaybe<Scalars['Long']>;
  eq?: InputMaybe<Scalars['Long']>;
  eqi?: InputMaybe<Scalars['Long']>;
  gt?: InputMaybe<Scalars['Long']>;
  gte?: InputMaybe<Scalars['Long']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  lt?: InputMaybe<Scalars['Long']>;
  lte?: InputMaybe<Scalars['Long']>;
  ne?: InputMaybe<Scalars['Long']>;
  not?: InputMaybe<LongFilterInput>;
  notContains?: InputMaybe<Scalars['Long']>;
  notContainsi?: InputMaybe<Scalars['Long']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  startsWith?: InputMaybe<Scalars['Long']>;
};

export type Marketplace = {
  __typename?: 'Marketplace';
  color: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  logo: UploadFileEntityResponse;
  name: Scalars['String'];
  paymentMethods?: Maybe<PaymentMethodRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type MarketplacePaymentMethodsArgs = {
  filters?: InputMaybe<PaymentMethodFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type MarketplaceEntity = {
  __typename?: 'MarketplaceEntity';
  attributes?: Maybe<Marketplace>;
  id?: Maybe<Scalars['ID']>;
};

export type MarketplaceEntityResponse = {
  __typename?: 'MarketplaceEntityResponse';
  data?: Maybe<MarketplaceEntity>;
};

export type MarketplaceEntityResponseCollection = {
  __typename?: 'MarketplaceEntityResponseCollection';
  data: Array<MarketplaceEntity>;
  meta: ResponseCollectionMeta;
};

export type MarketplaceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<MarketplaceFiltersInput>>>;
  color?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<MarketplaceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<MarketplaceFiltersInput>>>;
  paymentMethods?: InputMaybe<PaymentMethodFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type MarketplaceInput = {
  color?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  paymentMethods?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type MarketplaceRelationResponseCollection = {
  __typename?: 'MarketplaceRelationResponseCollection';
  data: Array<MarketplaceEntity>;
};

export type MarketplaceTv = {
  __typename?: 'MarketplaceTv';
  absoluteDiscount?: Maybe<Scalars['Float']>;
  affiliateUrl?: Maybe<Scalars['String']>;
  available?: Maybe<Scalars['Boolean']>;
  basePrice?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deliveryCost?: Maybe<Scalars['Float']>;
  deliveryTime?: Maybe<Scalars['String']>;
  marketplace?: Maybe<MarketplaceEntityResponse>;
  price?: Maybe<Scalars['Float']>;
  reconditioned?: Maybe<Scalars['Boolean']>;
  relativeDiscount?: Maybe<Scalars['Float']>;
  tv?: Maybe<TvEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
};

export type MarketplaceTvEntity = {
  __typename?: 'MarketplaceTvEntity';
  attributes?: Maybe<MarketplaceTv>;
  id?: Maybe<Scalars['ID']>;
};

export type MarketplaceTvEntityResponse = {
  __typename?: 'MarketplaceTvEntityResponse';
  data?: Maybe<MarketplaceTvEntity>;
};

export type MarketplaceTvEntityResponseCollection = {
  __typename?: 'MarketplaceTvEntityResponseCollection';
  data: Array<MarketplaceTvEntity>;
  meta: ResponseCollectionMeta;
};

export type MarketplaceTvFiltersInput = {
  absoluteDiscount?: InputMaybe<FloatFilterInput>;
  affiliateUrl?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<MarketplaceTvFiltersInput>>>;
  available?: InputMaybe<BooleanFilterInput>;
  basePrice?: InputMaybe<FloatFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  deliveryCost?: InputMaybe<FloatFilterInput>;
  deliveryTime?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  marketplace?: InputMaybe<MarketplaceFiltersInput>;
  not?: InputMaybe<MarketplaceTvFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<MarketplaceTvFiltersInput>>>;
  price?: InputMaybe<FloatFilterInput>;
  reconditioned?: InputMaybe<BooleanFilterInput>;
  relativeDiscount?: InputMaybe<FloatFilterInput>;
  tv?: InputMaybe<TvFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type MarketplaceTvInput = {
  absoluteDiscount?: InputMaybe<Scalars['Float']>;
  affiliateUrl?: InputMaybe<Scalars['String']>;
  available?: InputMaybe<Scalars['Boolean']>;
  basePrice?: InputMaybe<Scalars['Float']>;
  deliveryCost?: InputMaybe<Scalars['Float']>;
  deliveryTime?: InputMaybe<Scalars['String']>;
  marketplace?: InputMaybe<Scalars['ID']>;
  price?: InputMaybe<Scalars['Float']>;
  reconditioned?: InputMaybe<Scalars['Boolean']>;
  relativeDiscount?: InputMaybe<Scalars['Float']>;
  tv?: InputMaybe<Scalars['ID']>;
  url?: InputMaybe<Scalars['String']>;
};

export type MarketplaceTvRelationResponseCollection = {
  __typename?: 'MarketplaceTvRelationResponseCollection';
  data: Array<MarketplaceTvEntity>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createBacklightType?: Maybe<BacklightTypeEntityResponse>;
  createBrand?: Maybe<BrandEntityResponse>;
  createColor?: Maybe<ColorEntityResponse>;
  createColorCreation?: Maybe<ColorCreationEntityResponse>;
  createColorDepth?: Maybe<ColorDepthEntityResponse>;
  createConnection?: Maybe<ConnectionEntityResponse>;
  createConnectionTechnology?: Maybe<ConnectionTechnologyEntityResponse>;
  createConnectionType?: Maybe<ConnectionTypeEntityResponse>;
  createDvb?: Maybe<DvbEntityResponse>;
  createExternalSite?: Maybe<ExternalSiteEntityResponse>;
  createExtraFeature?: Maybe<ExtraFeatureEntityResponse>;
  createGamingTechnology?: Maybe<GamingTechnologyEntityResponse>;
  createHdrTechnology?: Maybe<HdrTechnologyEntityResponse>;
  createImageProcessor?: Maybe<ImageProcessorEntityResponse>;
  createImageTechnology?: Maybe<ImageTechnologyEntityResponse>;
  createLightingType?: Maybe<LightingTypeEntityResponse>;
  createMarketplace?: Maybe<MarketplaceEntityResponse>;
  createMarketplaceTv?: Maybe<MarketplaceTvEntityResponse>;
  createOperatingSystem?: Maybe<OperatingSystemEntityResponse>;
  createOperatingSystemVersion?: Maybe<OperatingSystemVersionEntityResponse>;
  createPanelManufacturer?: Maybe<PanelManufacturerEntityResponse>;
  createPanelTechnology?: Maybe<PanelTechnologyEntityResponse>;
  createPaymentMethod?: Maybe<PaymentMethodEntityResponse>;
  createScreenResolution?: Maybe<ScreenResolutionEntityResponse>;
  createScreenShape?: Maybe<ScreenShapeEntityResponse>;
  createSocModel?: Maybe<SocModelEntityResponse>;
  createSoundTechnology?: Maybe<SoundTechnologyEntityResponse>;
  createTv?: Maybe<TvEntityResponse>;
  createTvSerie?: Maybe<TvSerieEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  createVesaSize?: Maybe<VesaSizeEntityResponse>;
  createVoiceAssistant?: Maybe<VoiceAssistantEntityResponse>;
  createWirelessConnectionTechnology?: Maybe<WirelessConnectionTechnologyEntityResponse>;
  createWirelessConnectionType?: Maybe<WirelessConnectionTypeEntityResponse>;
  deleteBacklightType?: Maybe<BacklightTypeEntityResponse>;
  deleteBrand?: Maybe<BrandEntityResponse>;
  deleteColor?: Maybe<ColorEntityResponse>;
  deleteColorCreation?: Maybe<ColorCreationEntityResponse>;
  deleteColorDepth?: Maybe<ColorDepthEntityResponse>;
  deleteConnection?: Maybe<ConnectionEntityResponse>;
  deleteConnectionTechnology?: Maybe<ConnectionTechnologyEntityResponse>;
  deleteConnectionType?: Maybe<ConnectionTypeEntityResponse>;
  deleteDvb?: Maybe<DvbEntityResponse>;
  deleteExternalSite?: Maybe<ExternalSiteEntityResponse>;
  deleteExtraFeature?: Maybe<ExtraFeatureEntityResponse>;
  deleteGamingTechnology?: Maybe<GamingTechnologyEntityResponse>;
  deleteHdrTechnology?: Maybe<HdrTechnologyEntityResponse>;
  deleteHelpArticlesSection?: Maybe<HelpArticlesSectionEntityResponse>;
  deleteImageProcessor?: Maybe<ImageProcessorEntityResponse>;
  deleteImageTechnology?: Maybe<ImageTechnologyEntityResponse>;
  deleteLightingType?: Maybe<LightingTypeEntityResponse>;
  deleteMarketplace?: Maybe<MarketplaceEntityResponse>;
  deleteMarketplaceTv?: Maybe<MarketplaceTvEntityResponse>;
  deleteOperatingSystem?: Maybe<OperatingSystemEntityResponse>;
  deleteOperatingSystemVersion?: Maybe<OperatingSystemVersionEntityResponse>;
  deletePanelManufacturer?: Maybe<PanelManufacturerEntityResponse>;
  deletePanelTechnology?: Maybe<PanelTechnologyEntityResponse>;
  deletePaymentMethod?: Maybe<PaymentMethodEntityResponse>;
  deleteScoreWeighting?: Maybe<ScoreWeightingEntityResponse>;
  deleteScreenResolution?: Maybe<ScreenResolutionEntityResponse>;
  deleteScreenShape?: Maybe<ScreenShapeEntityResponse>;
  deleteSocModel?: Maybe<SocModelEntityResponse>;
  deleteSoundTechnology?: Maybe<SoundTechnologyEntityResponse>;
  deleteTv?: Maybe<TvEntityResponse>;
  deleteTvSerie?: Maybe<TvSerieEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteVesaSize?: Maybe<VesaSizeEntityResponse>;
  deleteVoiceAssistant?: Maybe<VoiceAssistantEntityResponse>;
  deleteWirelessConnectionTechnology?: Maybe<WirelessConnectionTechnologyEntityResponse>;
  deleteWirelessConnectionType?: Maybe<WirelessConnectionTypeEntityResponse>;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateBacklightType?: Maybe<BacklightTypeEntityResponse>;
  updateBrand?: Maybe<BrandEntityResponse>;
  updateColor?: Maybe<ColorEntityResponse>;
  updateColorCreation?: Maybe<ColorCreationEntityResponse>;
  updateColorDepth?: Maybe<ColorDepthEntityResponse>;
  updateConnection?: Maybe<ConnectionEntityResponse>;
  updateConnectionTechnology?: Maybe<ConnectionTechnologyEntityResponse>;
  updateConnectionType?: Maybe<ConnectionTypeEntityResponse>;
  updateDvb?: Maybe<DvbEntityResponse>;
  updateExternalSite?: Maybe<ExternalSiteEntityResponse>;
  updateExtraFeature?: Maybe<ExtraFeatureEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateGamingTechnology?: Maybe<GamingTechnologyEntityResponse>;
  updateHdrTechnology?: Maybe<HdrTechnologyEntityResponse>;
  updateHelpArticlesSection?: Maybe<HelpArticlesSectionEntityResponse>;
  updateImageProcessor?: Maybe<ImageProcessorEntityResponse>;
  updateImageTechnology?: Maybe<ImageTechnologyEntityResponse>;
  updateLightingType?: Maybe<LightingTypeEntityResponse>;
  updateMarketplace?: Maybe<MarketplaceEntityResponse>;
  updateMarketplaceTv?: Maybe<MarketplaceTvEntityResponse>;
  updateOperatingSystem?: Maybe<OperatingSystemEntityResponse>;
  updateOperatingSystemVersion?: Maybe<OperatingSystemVersionEntityResponse>;
  updatePanelManufacturer?: Maybe<PanelManufacturerEntityResponse>;
  updatePanelTechnology?: Maybe<PanelTechnologyEntityResponse>;
  updatePaymentMethod?: Maybe<PaymentMethodEntityResponse>;
  updateScoreWeighting?: Maybe<ScoreWeightingEntityResponse>;
  updateScreenResolution?: Maybe<ScreenResolutionEntityResponse>;
  updateScreenShape?: Maybe<ScreenShapeEntityResponse>;
  updateSocModel?: Maybe<SocModelEntityResponse>;
  updateSoundTechnology?: Maybe<SoundTechnologyEntityResponse>;
  updateTv?: Maybe<TvEntityResponse>;
  updateTvSerie?: Maybe<TvSerieEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  updateVesaSize?: Maybe<VesaSizeEntityResponse>;
  updateVoiceAssistant?: Maybe<VoiceAssistantEntityResponse>;
  updateWirelessConnectionTechnology?: Maybe<WirelessConnectionTechnologyEntityResponse>;
  updateWirelessConnectionType?: Maybe<WirelessConnectionTypeEntityResponse>;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationCreateBacklightTypeArgs = {
  data: BacklightTypeInput;
};


export type MutationCreateBrandArgs = {
  data: BrandInput;
};


export type MutationCreateColorArgs = {
  data: ColorInput;
};


export type MutationCreateColorCreationArgs = {
  data: ColorCreationInput;
};


export type MutationCreateColorDepthArgs = {
  data: ColorDepthInput;
};


export type MutationCreateConnectionArgs = {
  data: ConnectionInput;
};


export type MutationCreateConnectionTechnologyArgs = {
  data: ConnectionTechnologyInput;
};


export type MutationCreateConnectionTypeArgs = {
  data: ConnectionTypeInput;
};


export type MutationCreateDvbArgs = {
  data: DvbInput;
};


export type MutationCreateExternalSiteArgs = {
  data: ExternalSiteInput;
};


export type MutationCreateExtraFeatureArgs = {
  data: ExtraFeatureInput;
};


export type MutationCreateGamingTechnologyArgs = {
  data: GamingTechnologyInput;
};


export type MutationCreateHdrTechnologyArgs = {
  data: HdrTechnologyInput;
};


export type MutationCreateImageProcessorArgs = {
  data: ImageProcessorInput;
};


export type MutationCreateImageTechnologyArgs = {
  data: ImageTechnologyInput;
};


export type MutationCreateLightingTypeArgs = {
  data: LightingTypeInput;
};


export type MutationCreateMarketplaceArgs = {
  data: MarketplaceInput;
};


export type MutationCreateMarketplaceTvArgs = {
  data: MarketplaceTvInput;
};


export type MutationCreateOperatingSystemArgs = {
  data: OperatingSystemInput;
};


export type MutationCreateOperatingSystemVersionArgs = {
  data: OperatingSystemVersionInput;
};


export type MutationCreatePanelManufacturerArgs = {
  data: PanelManufacturerInput;
};


export type MutationCreatePanelTechnologyArgs = {
  data: PanelTechnologyInput;
};


export type MutationCreatePaymentMethodArgs = {
  data: PaymentMethodInput;
};


export type MutationCreateScreenResolutionArgs = {
  data: ScreenResolutionInput;
};


export type MutationCreateScreenShapeArgs = {
  data: ScreenShapeInput;
};


export type MutationCreateSocModelArgs = {
  data: SocModelInput;
};


export type MutationCreateSoundTechnologyArgs = {
  data: SoundTechnologyInput;
};


export type MutationCreateTvArgs = {
  data: TvInput;
};


export type MutationCreateTvSerieArgs = {
  data: TvSerieInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationCreateVesaSizeArgs = {
  data: VesaSizeInput;
};


export type MutationCreateVoiceAssistantArgs = {
  data: VoiceAssistantInput;
};


export type MutationCreateWirelessConnectionTechnologyArgs = {
  data: WirelessConnectionTechnologyInput;
};


export type MutationCreateWirelessConnectionTypeArgs = {
  data: WirelessConnectionTypeInput;
};


export type MutationDeleteBacklightTypeArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteBrandArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteColorArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteColorCreationArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteColorDepthArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteConnectionArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteConnectionTechnologyArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteConnectionTypeArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteDvbArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteExternalSiteArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteExtraFeatureArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteGamingTechnologyArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteHdrTechnologyArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteImageProcessorArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteImageTechnologyArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteLightingTypeArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteMarketplaceArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteMarketplaceTvArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteOperatingSystemArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteOperatingSystemVersionArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePanelManufacturerArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePanelTechnologyArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePaymentMethodArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteScreenResolutionArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteScreenShapeArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSocModelArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSoundTechnologyArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTvArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTvSerieArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteVesaSizeArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteVoiceAssistantArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteWirelessConnectionTechnologyArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteWirelessConnectionTypeArgs = {
  id: Scalars['ID'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateBacklightTypeArgs = {
  data: BacklightTypeInput;
  id: Scalars['ID'];
};


export type MutationUpdateBrandArgs = {
  data: BrandInput;
  id: Scalars['ID'];
};


export type MutationUpdateColorArgs = {
  data: ColorInput;
  id: Scalars['ID'];
};


export type MutationUpdateColorCreationArgs = {
  data: ColorCreationInput;
  id: Scalars['ID'];
};


export type MutationUpdateColorDepthArgs = {
  data: ColorDepthInput;
  id: Scalars['ID'];
};


export type MutationUpdateConnectionArgs = {
  data: ConnectionInput;
  id: Scalars['ID'];
};


export type MutationUpdateConnectionTechnologyArgs = {
  data: ConnectionTechnologyInput;
  id: Scalars['ID'];
};


export type MutationUpdateConnectionTypeArgs = {
  data: ConnectionTypeInput;
  id: Scalars['ID'];
};


export type MutationUpdateDvbArgs = {
  data: DvbInput;
  id: Scalars['ID'];
};


export type MutationUpdateExternalSiteArgs = {
  data: ExternalSiteInput;
  id: Scalars['ID'];
};


export type MutationUpdateExtraFeatureArgs = {
  data: ExtraFeatureInput;
  id: Scalars['ID'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateGamingTechnologyArgs = {
  data: GamingTechnologyInput;
  id: Scalars['ID'];
};


export type MutationUpdateHdrTechnologyArgs = {
  data: HdrTechnologyInput;
  id: Scalars['ID'];
};


export type MutationUpdateHelpArticlesSectionArgs = {
  data: HelpArticlesSectionInput;
};


export type MutationUpdateImageProcessorArgs = {
  data: ImageProcessorInput;
  id: Scalars['ID'];
};


export type MutationUpdateImageTechnologyArgs = {
  data: ImageTechnologyInput;
  id: Scalars['ID'];
};


export type MutationUpdateLightingTypeArgs = {
  data: LightingTypeInput;
  id: Scalars['ID'];
};


export type MutationUpdateMarketplaceArgs = {
  data: MarketplaceInput;
  id: Scalars['ID'];
};


export type MutationUpdateMarketplaceTvArgs = {
  data: MarketplaceTvInput;
  id: Scalars['ID'];
};


export type MutationUpdateOperatingSystemArgs = {
  data: OperatingSystemInput;
  id: Scalars['ID'];
};


export type MutationUpdateOperatingSystemVersionArgs = {
  data: OperatingSystemVersionInput;
  id: Scalars['ID'];
};


export type MutationUpdatePanelManufacturerArgs = {
  data: PanelManufacturerInput;
  id: Scalars['ID'];
};


export type MutationUpdatePanelTechnologyArgs = {
  data: PanelTechnologyInput;
  id: Scalars['ID'];
};


export type MutationUpdatePaymentMethodArgs = {
  data: PaymentMethodInput;
  id: Scalars['ID'];
};


export type MutationUpdateScoreWeightingArgs = {
  data: ScoreWeightingInput;
};


export type MutationUpdateScreenResolutionArgs = {
  data: ScreenResolutionInput;
  id: Scalars['ID'];
};


export type MutationUpdateScreenShapeArgs = {
  data: ScreenShapeInput;
  id: Scalars['ID'];
};


export type MutationUpdateSocModelArgs = {
  data: SocModelInput;
  id: Scalars['ID'];
};


export type MutationUpdateSoundTechnologyArgs = {
  data: SoundTechnologyInput;
  id: Scalars['ID'];
};


export type MutationUpdateTvArgs = {
  data: TvInput;
  id: Scalars['ID'];
};


export type MutationUpdateTvSerieArgs = {
  data: TvSerieInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};


export type MutationUpdateVesaSizeArgs = {
  data: VesaSizeInput;
  id: Scalars['ID'];
};


export type MutationUpdateVoiceAssistantArgs = {
  data: VoiceAssistantInput;
  id: Scalars['ID'];
};


export type MutationUpdateWirelessConnectionTechnologyArgs = {
  data: WirelessConnectionTechnologyInput;
  id: Scalars['ID'];
};


export type MutationUpdateWirelessConnectionTypeArgs = {
  data: WirelessConnectionTypeInput;
  id: Scalars['ID'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type OperatingSystem = {
  __typename?: 'OperatingSystem';
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type OperatingSystemEntity = {
  __typename?: 'OperatingSystemEntity';
  attributes?: Maybe<OperatingSystem>;
  id?: Maybe<Scalars['ID']>;
};

export type OperatingSystemEntityResponse = {
  __typename?: 'OperatingSystemEntityResponse';
  data?: Maybe<OperatingSystemEntity>;
};

export type OperatingSystemEntityResponseCollection = {
  __typename?: 'OperatingSystemEntityResponseCollection';
  data: Array<OperatingSystemEntity>;
  meta: ResponseCollectionMeta;
};

export type OperatingSystemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<OperatingSystemFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<OperatingSystemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<OperatingSystemFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type OperatingSystemInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type OperatingSystemRelationResponseCollection = {
  __typename?: 'OperatingSystemRelationResponseCollection';
  data: Array<OperatingSystemEntity>;
};

export type OperatingSystemVersion = {
  __typename?: 'OperatingSystemVersion';
  createdAt?: Maybe<Scalars['DateTime']>;
  operatingSystem?: Maybe<OperatingSystemEntityResponse>;
  uid?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  version: Scalars['String'];
};

export type OperatingSystemVersionEntity = {
  __typename?: 'OperatingSystemVersionEntity';
  attributes?: Maybe<OperatingSystemVersion>;
  id?: Maybe<Scalars['ID']>;
};

export type OperatingSystemVersionEntityResponse = {
  __typename?: 'OperatingSystemVersionEntityResponse';
  data?: Maybe<OperatingSystemVersionEntity>;
};

export type OperatingSystemVersionEntityResponseCollection = {
  __typename?: 'OperatingSystemVersionEntityResponseCollection';
  data: Array<OperatingSystemVersionEntity>;
  meta: ResponseCollectionMeta;
};

export type OperatingSystemVersionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<OperatingSystemVersionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<OperatingSystemVersionFiltersInput>;
  operatingSystem?: InputMaybe<OperatingSystemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<OperatingSystemVersionFiltersInput>>>;
  uid?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  version?: InputMaybe<StringFilterInput>;
};

export type OperatingSystemVersionInput = {
  operatingSystem?: InputMaybe<Scalars['ID']>;
  uid?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
};

export type OperatingSystemVersionRelationResponseCollection = {
  __typename?: 'OperatingSystemVersionRelationResponseCollection';
  data: Array<OperatingSystemVersionEntity>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export type PanelManufacturer = {
  __typename?: 'PanelManufacturer';
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PanelManufacturerEntity = {
  __typename?: 'PanelManufacturerEntity';
  attributes?: Maybe<PanelManufacturer>;
  id?: Maybe<Scalars['ID']>;
};

export type PanelManufacturerEntityResponse = {
  __typename?: 'PanelManufacturerEntityResponse';
  data?: Maybe<PanelManufacturerEntity>;
};

export type PanelManufacturerEntityResponseCollection = {
  __typename?: 'PanelManufacturerEntityResponseCollection';
  data: Array<PanelManufacturerEntity>;
  meta: ResponseCollectionMeta;
};

export type PanelManufacturerFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PanelManufacturerFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<PanelManufacturerFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PanelManufacturerFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PanelManufacturerInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type PanelManufacturerRelationResponseCollection = {
  __typename?: 'PanelManufacturerRelationResponseCollection';
  data: Array<PanelManufacturerEntity>;
};

export type PanelTechnology = {
  __typename?: 'PanelTechnology';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PanelTechnologyEntity = {
  __typename?: 'PanelTechnologyEntity';
  attributes?: Maybe<PanelTechnology>;
  id?: Maybe<Scalars['ID']>;
};

export type PanelTechnologyEntityResponse = {
  __typename?: 'PanelTechnologyEntityResponse';
  data?: Maybe<PanelTechnologyEntity>;
};

export type PanelTechnologyEntityResponseCollection = {
  __typename?: 'PanelTechnologyEntityResponseCollection';
  data: Array<PanelTechnologyEntity>;
  meta: ResponseCollectionMeta;
};

export type PanelTechnologyFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PanelTechnologyFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<PanelTechnologyFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PanelTechnologyFiltersInput>>>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PanelTechnologyInput = {
  description?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type PanelTechnologyRelationResponseCollection = {
  __typename?: 'PanelTechnologyRelationResponseCollection';
  data: Array<PanelTechnologyEntity>;
};

export type PaymentMethod = {
  __typename?: 'PaymentMethod';
  createdAt?: Maybe<Scalars['DateTime']>;
  logo: UploadFileEntityResponse;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PaymentMethodEntity = {
  __typename?: 'PaymentMethodEntity';
  attributes?: Maybe<PaymentMethod>;
  id?: Maybe<Scalars['ID']>;
};

export type PaymentMethodEntityResponse = {
  __typename?: 'PaymentMethodEntityResponse';
  data?: Maybe<PaymentMethodEntity>;
};

export type PaymentMethodEntityResponseCollection = {
  __typename?: 'PaymentMethodEntityResponseCollection';
  data: Array<PaymentMethodEntity>;
  meta: ResponseCollectionMeta;
};

export type PaymentMethodFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PaymentMethodFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<PaymentMethodFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PaymentMethodFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PaymentMethodInput = {
  logo?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type PaymentMethodRelationResponseCollection = {
  __typename?: 'PaymentMethodRelationResponseCollection';
  data: Array<PaymentMethodEntity>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  backlightType?: Maybe<BacklightTypeEntityResponse>;
  backlightTypes?: Maybe<BacklightTypeEntityResponseCollection>;
  brand?: Maybe<BrandEntityResponse>;
  brands?: Maybe<BrandEntityResponseCollection>;
  color?: Maybe<ColorEntityResponse>;
  colorCreation?: Maybe<ColorCreationEntityResponse>;
  colorCreations?: Maybe<ColorCreationEntityResponseCollection>;
  colorDepth?: Maybe<ColorDepthEntityResponse>;
  colorDepths?: Maybe<ColorDepthEntityResponseCollection>;
  colors?: Maybe<ColorEntityResponseCollection>;
  connection?: Maybe<ConnectionEntityResponse>;
  connectionTechnologies?: Maybe<ConnectionTechnologyEntityResponseCollection>;
  connectionTechnology?: Maybe<ConnectionTechnologyEntityResponse>;
  connectionType?: Maybe<ConnectionTypeEntityResponse>;
  connectionTypes?: Maybe<ConnectionTypeEntityResponseCollection>;
  connections?: Maybe<ConnectionEntityResponseCollection>;
  dvb?: Maybe<DvbEntityResponse>;
  dvbs?: Maybe<DvbEntityResponseCollection>;
  externalSite?: Maybe<ExternalSiteEntityResponse>;
  externalSites?: Maybe<ExternalSiteEntityResponseCollection>;
  extraFeature?: Maybe<ExtraFeatureEntityResponse>;
  extraFeatures?: Maybe<ExtraFeatureEntityResponseCollection>;
  gamingTechnologies?: Maybe<GamingTechnologyEntityResponseCollection>;
  gamingTechnology?: Maybe<GamingTechnologyEntityResponse>;
  hdrTechnologies?: Maybe<HdrTechnologyEntityResponseCollection>;
  hdrTechnology?: Maybe<HdrTechnologyEntityResponse>;
  helpArticlesSection?: Maybe<HelpArticlesSectionEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  imageProcessor?: Maybe<ImageProcessorEntityResponse>;
  imageProcessors?: Maybe<ImageProcessorEntityResponseCollection>;
  imageTechnologies?: Maybe<ImageTechnologyEntityResponseCollection>;
  imageTechnology?: Maybe<ImageTechnologyEntityResponse>;
  lightingType?: Maybe<LightingTypeEntityResponse>;
  lightingTypes?: Maybe<LightingTypeEntityResponseCollection>;
  marketplace?: Maybe<MarketplaceEntityResponse>;
  marketplaceTv?: Maybe<MarketplaceTvEntityResponse>;
  marketplaceTvs?: Maybe<MarketplaceTvEntityResponseCollection>;
  marketplaces?: Maybe<MarketplaceEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  operatingSystem?: Maybe<OperatingSystemEntityResponse>;
  operatingSystemVersion?: Maybe<OperatingSystemVersionEntityResponse>;
  operatingSystemVersions?: Maybe<OperatingSystemVersionEntityResponseCollection>;
  operatingSystems?: Maybe<OperatingSystemEntityResponseCollection>;
  panelManufacturer?: Maybe<PanelManufacturerEntityResponse>;
  panelManufacturers?: Maybe<PanelManufacturerEntityResponseCollection>;
  panelTechnologies?: Maybe<PanelTechnologyEntityResponseCollection>;
  panelTechnology?: Maybe<PanelTechnologyEntityResponse>;
  paymentMethod?: Maybe<PaymentMethodEntityResponse>;
  paymentMethods?: Maybe<PaymentMethodEntityResponseCollection>;
  scoreWeighting?: Maybe<ScoreWeightingEntityResponse>;
  screenResolution?: Maybe<ScreenResolutionEntityResponse>;
  screenResolutions?: Maybe<ScreenResolutionEntityResponseCollection>;
  screenShape?: Maybe<ScreenShapeEntityResponse>;
  screenShapes?: Maybe<ScreenShapeEntityResponseCollection>;
  socModel?: Maybe<SocModelEntityResponse>;
  socModels?: Maybe<SocModelEntityResponseCollection>;
  soundTechnologies?: Maybe<SoundTechnologyEntityResponseCollection>;
  soundTechnology?: Maybe<SoundTechnologyEntityResponse>;
  tv?: Maybe<TvEntityResponse>;
  tvSerie?: Maybe<TvSerieEntityResponse>;
  tvSeries?: Maybe<TvSerieEntityResponseCollection>;
  tvs?: Maybe<TvEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
  vesaSize?: Maybe<VesaSizeEntityResponse>;
  vesaSizes?: Maybe<VesaSizeEntityResponseCollection>;
  voiceAssistant?: Maybe<VoiceAssistantEntityResponse>;
  voiceAssistants?: Maybe<VoiceAssistantEntityResponseCollection>;
  wirelessConnectionTechnologies?: Maybe<WirelessConnectionTechnologyEntityResponseCollection>;
  wirelessConnectionTechnology?: Maybe<WirelessConnectionTechnologyEntityResponse>;
  wirelessConnectionType?: Maybe<WirelessConnectionTypeEntityResponse>;
  wirelessConnectionTypes?: Maybe<WirelessConnectionTypeEntityResponseCollection>;
};


export type QueryBacklightTypeArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryBacklightTypesArgs = {
  filters?: InputMaybe<BacklightTypeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryBrandArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryBrandsArgs = {
  filters?: InputMaybe<BrandFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryColorArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryColorCreationArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryColorCreationsArgs = {
  filters?: InputMaybe<ColorCreationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryColorDepthArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryColorDepthsArgs = {
  filters?: InputMaybe<ColorDepthFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryColorsArgs = {
  filters?: InputMaybe<ColorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryConnectionArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryConnectionTechnologiesArgs = {
  filters?: InputMaybe<ConnectionTechnologyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryConnectionTechnologyArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryConnectionTypeArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryConnectionTypesArgs = {
  filters?: InputMaybe<ConnectionTypeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryConnectionsArgs = {
  filters?: InputMaybe<ConnectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryDvbArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryDvbsArgs = {
  filters?: InputMaybe<DvbFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryExternalSiteArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryExternalSitesArgs = {
  filters?: InputMaybe<ExternalSiteFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryExtraFeatureArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryExtraFeaturesArgs = {
  filters?: InputMaybe<ExtraFeatureFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryGamingTechnologiesArgs = {
  filters?: InputMaybe<GamingTechnologyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryGamingTechnologyArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryHdrTechnologiesArgs = {
  filters?: InputMaybe<HdrTechnologyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryHdrTechnologyArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryImageProcessorArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryImageProcessorsArgs = {
  filters?: InputMaybe<ImageProcessorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryImageTechnologiesArgs = {
  filters?: InputMaybe<ImageTechnologyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryImageTechnologyArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryLightingTypeArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryLightingTypesArgs = {
  filters?: InputMaybe<LightingTypeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryMarketplaceArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryMarketplaceTvArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryMarketplaceTvsArgs = {
  filters?: InputMaybe<MarketplaceTvFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryMarketplacesArgs = {
  filters?: InputMaybe<MarketplaceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryOperatingSystemArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryOperatingSystemVersionArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryOperatingSystemVersionsArgs = {
  filters?: InputMaybe<OperatingSystemVersionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryOperatingSystemsArgs = {
  filters?: InputMaybe<OperatingSystemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPanelManufacturerArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryPanelManufacturersArgs = {
  filters?: InputMaybe<PanelManufacturerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPanelTechnologiesArgs = {
  filters?: InputMaybe<PanelTechnologyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPanelTechnologyArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryPaymentMethodArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryPaymentMethodsArgs = {
  filters?: InputMaybe<PaymentMethodFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryScreenResolutionArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryScreenResolutionsArgs = {
  filters?: InputMaybe<ScreenResolutionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryScreenShapeArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryScreenShapesArgs = {
  filters?: InputMaybe<ScreenShapeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QuerySocModelArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QuerySocModelsArgs = {
  filters?: InputMaybe<SocModelFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QuerySoundTechnologiesArgs = {
  filters?: InputMaybe<SoundTechnologyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QuerySoundTechnologyArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTvArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTvSerieArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTvSeriesArgs = {
  filters?: InputMaybe<TvSerieFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryTvsArgs = {
  filters?: InputMaybe<TvFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryVesaSizeArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryVesaSizesArgs = {
  filters?: InputMaybe<VesaSizeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryVoiceAssistantArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryVoiceAssistantsArgs = {
  filters?: InputMaybe<VoiceAssistantFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryWirelessConnectionTechnologiesArgs = {
  filters?: InputMaybe<WirelessConnectionTechnologyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryWirelessConnectionTechnologyArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryWirelessConnectionTypeArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryWirelessConnectionTypesArgs = {
  filters?: InputMaybe<WirelessConnectionTypeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type ScoreWeighting = {
  __typename?: 'ScoreWeighting';
  connections: Scalars['Float'];
  createdAt?: Maybe<Scalars['DateTime']>;
  design: Scalars['Float'];
  image: Scalars['Float'];
  sound: Scalars['Float'];
  system: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ScoreWeightingEntity = {
  __typename?: 'ScoreWeightingEntity';
  attributes?: Maybe<ScoreWeighting>;
  id?: Maybe<Scalars['ID']>;
};

export type ScoreWeightingEntityResponse = {
  __typename?: 'ScoreWeightingEntityResponse';
  data?: Maybe<ScoreWeightingEntity>;
};

export type ScoreWeightingEntityResponseCollection = {
  __typename?: 'ScoreWeightingEntityResponseCollection';
  data: Array<ScoreWeightingEntity>;
  meta: ResponseCollectionMeta;
};

export type ScoreWeightingFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ScoreWeightingFiltersInput>>>;
  connections?: InputMaybe<FloatFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  design?: InputMaybe<FloatFilterInput>;
  image?: InputMaybe<FloatFilterInput>;
  not?: InputMaybe<ScoreWeightingFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ScoreWeightingFiltersInput>>>;
  sound?: InputMaybe<FloatFilterInput>;
  system?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ScoreWeightingInput = {
  connections?: InputMaybe<Scalars['Float']>;
  design?: InputMaybe<Scalars['Float']>;
  image?: InputMaybe<Scalars['Float']>;
  sound?: InputMaybe<Scalars['Float']>;
  system?: InputMaybe<Scalars['Float']>;
};

export type ScoreWeightingRelationResponseCollection = {
  __typename?: 'ScoreWeightingRelationResponseCollection';
  data: Array<ScoreWeightingEntity>;
};

export type ScreenResolution = {
  __typename?: 'ScreenResolution';
  alternativeName: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  icon: UploadFileEntityResponse;
  resolution: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ScreenResolutionEntity = {
  __typename?: 'ScreenResolutionEntity';
  attributes?: Maybe<ScreenResolution>;
  id?: Maybe<Scalars['ID']>;
};

export type ScreenResolutionEntityResponse = {
  __typename?: 'ScreenResolutionEntityResponse';
  data?: Maybe<ScreenResolutionEntity>;
};

export type ScreenResolutionEntityResponseCollection = {
  __typename?: 'ScreenResolutionEntityResponseCollection';
  data: Array<ScreenResolutionEntity>;
  meta: ResponseCollectionMeta;
};

export type ScreenResolutionFiltersInput = {
  alternativeName?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ScreenResolutionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ScreenResolutionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ScreenResolutionFiltersInput>>>;
  resolution?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ScreenResolutionInput = {
  alternativeName?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['ID']>;
  resolution?: InputMaybe<Scalars['String']>;
};

export type ScreenResolutionRelationResponseCollection = {
  __typename?: 'ScreenResolutionRelationResponseCollection';
  data: Array<ScreenResolutionEntity>;
};

export type ScreenShape = {
  __typename?: 'ScreenShape';
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ScreenShapeEntity = {
  __typename?: 'ScreenShapeEntity';
  attributes?: Maybe<ScreenShape>;
  id?: Maybe<Scalars['ID']>;
};

export type ScreenShapeEntityResponse = {
  __typename?: 'ScreenShapeEntityResponse';
  data?: Maybe<ScreenShapeEntity>;
};

export type ScreenShapeEntityResponseCollection = {
  __typename?: 'ScreenShapeEntityResponseCollection';
  data: Array<ScreenShapeEntity>;
  meta: ResponseCollectionMeta;
};

export type ScreenShapeFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ScreenShapeFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ScreenShapeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ScreenShapeFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ScreenShapeInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type ScreenShapeRelationResponseCollection = {
  __typename?: 'ScreenShapeRelationResponseCollection';
  data: Array<ScreenShapeEntity>;
};

export type SocModel = {
  __typename?: 'SocModel';
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SocModelEntity = {
  __typename?: 'SocModelEntity';
  attributes?: Maybe<SocModel>;
  id?: Maybe<Scalars['ID']>;
};

export type SocModelEntityResponse = {
  __typename?: 'SocModelEntityResponse';
  data?: Maybe<SocModelEntity>;
};

export type SocModelEntityResponseCollection = {
  __typename?: 'SocModelEntityResponseCollection';
  data: Array<SocModelEntity>;
  meta: ResponseCollectionMeta;
};

export type SocModelFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SocModelFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<SocModelFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SocModelFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SocModelInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type SocModelRelationResponseCollection = {
  __typename?: 'SocModelRelationResponseCollection';
  data: Array<SocModelEntity>;
};

export type SoundTechnology = {
  __typename?: 'SoundTechnology';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SoundTechnologyEntity = {
  __typename?: 'SoundTechnologyEntity';
  attributes?: Maybe<SoundTechnology>;
  id?: Maybe<Scalars['ID']>;
};

export type SoundTechnologyEntityResponse = {
  __typename?: 'SoundTechnologyEntityResponse';
  data?: Maybe<SoundTechnologyEntity>;
};

export type SoundTechnologyEntityResponseCollection = {
  __typename?: 'SoundTechnologyEntityResponseCollection';
  data: Array<SoundTechnologyEntity>;
  meta: ResponseCollectionMeta;
};

export type SoundTechnologyFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SoundTechnologyFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<SoundTechnologyFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SoundTechnologyFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SoundTechnologyInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type SoundTechnologyRelationResponseCollection = {
  __typename?: 'SoundTechnologyRelationResponseCollection';
  data: Array<SoundTechnologyEntity>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  eqi?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type TimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>;
  contains?: InputMaybe<Scalars['Time']>;
  containsi?: InputMaybe<Scalars['Time']>;
  endsWith?: InputMaybe<Scalars['Time']>;
  eq?: InputMaybe<Scalars['Time']>;
  eqi?: InputMaybe<Scalars['Time']>;
  gt?: InputMaybe<Scalars['Time']>;
  gte?: InputMaybe<Scalars['Time']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>;
  lt?: InputMaybe<Scalars['Time']>;
  lte?: InputMaybe<Scalars['Time']>;
  ne?: InputMaybe<Scalars['Time']>;
  not?: InputMaybe<TimeFilterInput>;
  notContains?: InputMaybe<Scalars['Time']>;
  notContainsi?: InputMaybe<Scalars['Time']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>;
  startsWith?: InputMaybe<Scalars['Time']>;
};

export type Tv = {
  __typename?: 'Tv';
  connections?: Maybe<ComponentSectionsConnections>;
  createdAt?: Maybe<Scalars['DateTime']>;
  design?: Maybe<ComponentSectionsDesign>;
  ean: Scalars['String'];
  general?: Maybe<ComponentSectionsGeneral>;
  hits?: Maybe<Scalars['Int']>;
  image?: Maybe<ComponentSectionsImage>;
  maxPrice?: Maybe<Scalars['Float']>;
  minPrice?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  reviews?: Maybe<ComponentSectionsReviews>;
  rrp?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
  slug?: Maybe<Scalars['String']>;
  sound?: Maybe<ComponentSectionsSound>;
  system?: Maybe<ComponentSectionsSystem>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TvEntity = {
  __typename?: 'TvEntity';
  attributes?: Maybe<Tv>;
  id?: Maybe<Scalars['ID']>;
};

export type TvEntityResponse = {
  __typename?: 'TvEntityResponse';
  data?: Maybe<TvEntity>;
};

export type TvEntityResponseCollection = {
  __typename?: 'TvEntityResponseCollection';
  data: Array<TvEntity>;
  meta: ResponseCollectionMeta;
};

export type TvFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TvFiltersInput>>>;
  connections?: InputMaybe<ComponentSectionsConnectionsFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  design?: InputMaybe<ComponentSectionsDesignFiltersInput>;
  ean?: InputMaybe<StringFilterInput>;
  general?: InputMaybe<ComponentSectionsGeneralFiltersInput>;
  hits?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  image?: InputMaybe<ComponentSectionsImageFiltersInput>;
  maxPrice?: InputMaybe<FloatFilterInput>;
  minPrice?: InputMaybe<FloatFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<TvFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TvFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  reviews?: InputMaybe<ComponentSectionsReviewsFiltersInput>;
  rrp?: InputMaybe<FloatFilterInput>;
  score?: InputMaybe<FloatFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  sound?: InputMaybe<ComponentSectionsSoundFiltersInput>;
  system?: InputMaybe<ComponentSectionsSystemFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TvInput = {
  connections?: InputMaybe<ComponentSectionsConnectionsInput>;
  design?: InputMaybe<ComponentSectionsDesignInput>;
  ean?: InputMaybe<Scalars['String']>;
  general?: InputMaybe<ComponentSectionsGeneralInput>;
  hits?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<ComponentSectionsImageInput>;
  maxPrice?: InputMaybe<Scalars['Float']>;
  minPrice?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  reviews?: InputMaybe<ComponentSectionsReviewsInput>;
  rrp?: InputMaybe<Scalars['Float']>;
  score?: InputMaybe<Scalars['Float']>;
  slug?: InputMaybe<Scalars['String']>;
  sound?: InputMaybe<ComponentSectionsSoundInput>;
  system?: InputMaybe<ComponentSectionsSystemInput>;
};

export type TvRelationResponseCollection = {
  __typename?: 'TvRelationResponseCollection';
  data: Array<TvEntity>;
};

export type TvSerie = {
  __typename?: 'TvSerie';
  brand?: Maybe<BrandEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  uid?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TvSerieEntity = {
  __typename?: 'TvSerieEntity';
  attributes?: Maybe<TvSerie>;
  id?: Maybe<Scalars['ID']>;
};

export type TvSerieEntityResponse = {
  __typename?: 'TvSerieEntityResponse';
  data?: Maybe<TvSerieEntity>;
};

export type TvSerieEntityResponseCollection = {
  __typename?: 'TvSerieEntityResponseCollection';
  data: Array<TvSerieEntity>;
  meta: ResponseCollectionMeta;
};

export type TvSerieFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TvSerieFiltersInput>>>;
  brand?: InputMaybe<BrandFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<TvSerieFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TvSerieFiltersInput>>>;
  uid?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TvSerieInput = {
  brand?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type TvSerieRelationResponseCollection = {
  __typename?: 'TvSerieRelationResponseCollection';
  data: Array<TvSerieEntity>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  folder?: InputMaybe<Scalars['ID']>;
  folderPath?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String'];
  pathId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<Scalars['ID']>;
  path?: InputMaybe<Scalars['String']>;
  pathId?: InputMaybe<Scalars['Int']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionEntityResponse = {
  __typename?: 'UsersPermissionsPermissionEntityResponse';
  data?: Maybe<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsPermissionEntityResponseCollection = {
  __typename?: 'UsersPermissionsPermissionEntityResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionInput = {
  action?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsRoleRelationResponseCollection = {
  __typename?: 'UsersPermissionsRoleRelationResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type VesaSize = {
  __typename?: 'VesaSize';
  createdAt?: Maybe<Scalars['DateTime']>;
  size: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type VesaSizeEntity = {
  __typename?: 'VesaSizeEntity';
  attributes?: Maybe<VesaSize>;
  id?: Maybe<Scalars['ID']>;
};

export type VesaSizeEntityResponse = {
  __typename?: 'VesaSizeEntityResponse';
  data?: Maybe<VesaSizeEntity>;
};

export type VesaSizeEntityResponseCollection = {
  __typename?: 'VesaSizeEntityResponseCollection';
  data: Array<VesaSizeEntity>;
  meta: ResponseCollectionMeta;
};

export type VesaSizeFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<VesaSizeFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<VesaSizeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<VesaSizeFiltersInput>>>;
  size?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type VesaSizeInput = {
  size?: InputMaybe<Scalars['String']>;
};

export type VesaSizeRelationResponseCollection = {
  __typename?: 'VesaSizeRelationResponseCollection';
  data: Array<VesaSizeEntity>;
};

export type VoiceAssistant = {
  __typename?: 'VoiceAssistant';
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type VoiceAssistantEntity = {
  __typename?: 'VoiceAssistantEntity';
  attributes?: Maybe<VoiceAssistant>;
  id?: Maybe<Scalars['ID']>;
};

export type VoiceAssistantEntityResponse = {
  __typename?: 'VoiceAssistantEntityResponse';
  data?: Maybe<VoiceAssistantEntity>;
};

export type VoiceAssistantEntityResponseCollection = {
  __typename?: 'VoiceAssistantEntityResponseCollection';
  data: Array<VoiceAssistantEntity>;
  meta: ResponseCollectionMeta;
};

export type VoiceAssistantFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<VoiceAssistantFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<VoiceAssistantFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<VoiceAssistantFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type VoiceAssistantInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type VoiceAssistantRelationResponseCollection = {
  __typename?: 'VoiceAssistantRelationResponseCollection';
  data: Array<VoiceAssistantEntity>;
};

export type WirelessConnectionTechnology = {
  __typename?: 'WirelessConnectionTechnology';
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  type?: Maybe<WirelessConnectionTypeEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type WirelessConnectionTechnologyEntity = {
  __typename?: 'WirelessConnectionTechnologyEntity';
  attributes?: Maybe<WirelessConnectionTechnology>;
  id?: Maybe<Scalars['ID']>;
};

export type WirelessConnectionTechnologyEntityResponse = {
  __typename?: 'WirelessConnectionTechnologyEntityResponse';
  data?: Maybe<WirelessConnectionTechnologyEntity>;
};

export type WirelessConnectionTechnologyEntityResponseCollection = {
  __typename?: 'WirelessConnectionTechnologyEntityResponseCollection';
  data: Array<WirelessConnectionTechnologyEntity>;
  meta: ResponseCollectionMeta;
};

export type WirelessConnectionTechnologyFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<WirelessConnectionTechnologyFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<WirelessConnectionTechnologyFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<WirelessConnectionTechnologyFiltersInput>>>;
  type?: InputMaybe<WirelessConnectionTypeFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type WirelessConnectionTechnologyInput = {
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['ID']>;
};

export type WirelessConnectionTechnologyRelationResponseCollection = {
  __typename?: 'WirelessConnectionTechnologyRelationResponseCollection';
  data: Array<WirelessConnectionTechnologyEntity>;
};

export type WirelessConnectionType = {
  __typename?: 'WirelessConnectionType';
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  technologies?: Maybe<WirelessConnectionTechnologyRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type WirelessConnectionTypeTechnologiesArgs = {
  filters?: InputMaybe<WirelessConnectionTechnologyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type WirelessConnectionTypeEntity = {
  __typename?: 'WirelessConnectionTypeEntity';
  attributes?: Maybe<WirelessConnectionType>;
  id?: Maybe<Scalars['ID']>;
};

export type WirelessConnectionTypeEntityResponse = {
  __typename?: 'WirelessConnectionTypeEntityResponse';
  data?: Maybe<WirelessConnectionTypeEntity>;
};

export type WirelessConnectionTypeEntityResponseCollection = {
  __typename?: 'WirelessConnectionTypeEntityResponseCollection';
  data: Array<WirelessConnectionTypeEntity>;
  meta: ResponseCollectionMeta;
};

export type WirelessConnectionTypeFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<WirelessConnectionTypeFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<WirelessConnectionTypeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<WirelessConnectionTypeFiltersInput>>>;
  technologies?: InputMaybe<WirelessConnectionTechnologyFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type WirelessConnectionTypeInput = {
  name?: InputMaybe<Scalars['String']>;
  technologies?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type WirelessConnectionTypeRelationResponseCollection = {
  __typename?: 'WirelessConnectionTypeRelationResponseCollection';
  data: Array<WirelessConnectionTypeEntity>;
};

export type GetBrandsFilterQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBrandsFilterQuery = { __typename?: 'Query', brands?: { __typename?: 'BrandEntityResponseCollection', data: Array<{ __typename?: 'BrandEntity', id?: string | null, attributes?: { __typename?: 'Brand', name: string } | null }> } | null };

export type GetBrandsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBrandsQuery = { __typename?: 'Query', brands?: { __typename?: 'BrandEntityResponseCollection', data: Array<{ __typename?: 'BrandEntity', id?: string | null, attributes?: { __typename?: 'Brand', name: string, logo?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, series?: { __typename?: 'TvSerieRelationResponseCollection', data: Array<{ __typename?: 'TvSerieEntity', id?: string | null }> } | null } | null }> } | null };

export type GetCableConnectionsFilterQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCableConnectionsFilterQuery = { __typename?: 'Query', connectionTypes?: { __typename?: 'ConnectionTypeEntityResponseCollection', data: Array<{ __typename?: 'ConnectionTypeEntity', id?: string | null, attributes?: { __typename?: 'ConnectionType', name: string } | null }> } | null };

export type GetFuzzySearchQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFuzzySearchQuery = { __typename?: 'Query', tvs?: { __typename?: 'TvEntityResponseCollection', data: Array<{ __typename?: 'TvEntity', attributes?: (
        { __typename?: 'Tv' }
        & { ' $fragmentRefs': { 'SearchTvFragment': SearchTvFragment } }
      ) | null }> } | null };

export type GetHelpArticlesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHelpArticlesQuery = { __typename?: 'Query', helpArticlesSection?: { __typename?: 'HelpArticlesSectionEntityResponse', data?: { __typename?: 'HelpArticlesSectionEntity', attributes?: { __typename?: 'HelpArticlesSection', section1: { __typename?: 'ComponentHelpArticleSubsection', title: string, articles?: { __typename?: 'ExternalSiteRelationResponseCollection', data: Array<{ __typename?: 'ExternalSiteEntity', attributes?: { __typename?: 'ExternalSite', title?: string | null, image?: string | null, type: Enum_Externalsite_Type, url: string, video?: boolean | null } | null }> } | null }, section2: { __typename?: 'ComponentHelpArticleSubsection', title: string, articles?: { __typename?: 'ExternalSiteRelationResponseCollection', data: Array<{ __typename?: 'ExternalSiteEntity', attributes?: { __typename?: 'ExternalSite', title?: string | null, image?: string | null, type: Enum_Externalsite_Type, url: string, video?: boolean | null } | null }> } | null }, section3: { __typename?: 'ComponentHelpArticleSubsection', title: string, articles?: { __typename?: 'ExternalSiteRelationResponseCollection', data: Array<{ __typename?: 'ExternalSiteEntity', attributes?: { __typename?: 'ExternalSite', title?: string | null, image?: string | null, type: Enum_Externalsite_Type, url: string, video?: boolean | null } | null }> } | null } } | null } | null } | null };

export type GetImageTechnologiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetImageTechnologiesQuery = { __typename?: 'Query', imageTechnologies?: { __typename?: 'ImageTechnologyEntityResponseCollection', data: Array<{ __typename?: 'ImageTechnologyEntity', id?: string | null, attributes?: { __typename?: 'ImageTechnology', name: string } | null }> } | null };

export type GetMarketplaceTvsQueryVariables = Exact<{
  tvId: Scalars['ID'];
}>;


export type GetMarketplaceTvsQuery = { __typename?: 'Query', marketplaceTvs?: { __typename?: 'MarketplaceTvEntityResponseCollection', data: Array<{ __typename?: 'MarketplaceTvEntity', id?: string | null, attributes?: { __typename?: 'MarketplaceTv', createdAt?: any | null, affiliateUrl?: string | null, available?: boolean | null, deliveryCost?: number | null, deliveryTime?: string | null, reconditioned?: boolean | null, price?: number | null, basePrice?: number | null, absoluteDiscount?: number | null, relativeDiscount?: number | null, marketplace?: { __typename?: 'MarketplaceEntityResponse', data?: { __typename?: 'MarketplaceEntity', attributes?: { __typename?: 'Marketplace', name: string, color: string, logo: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null }, paymentMethods?: { __typename?: 'PaymentMethodRelationResponseCollection', data: Array<{ __typename?: 'PaymentMethodEntity', attributes?: { __typename?: 'PaymentMethod', name: string, logo: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } } | null }> } | null } | null } | null } | null } | null }> } | null };

export type GetPricesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPricesQuery = { __typename?: 'Query', maxPrice?: { __typename?: 'TvEntityResponseCollection', data: Array<{ __typename?: 'TvEntity', attributes?: { __typename?: 'Tv', minPrice?: number | null } | null }> } | null, minPrice?: { __typename?: 'TvEntityResponseCollection', data: Array<{ __typename?: 'TvEntity', attributes?: { __typename?: 'Tv', minPrice?: number | null } | null }> } | null };

export type GetReviewsQueryVariables = Exact<{
  page: Scalars['Int'];
  offset: Scalars['Int'];
  type?: InputMaybe<Scalars['String']>;
}>;


export type GetReviewsQuery = { __typename?: 'Query', externalSites?: { __typename?: 'ExternalSiteEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', pageCount: number } }, data: Array<{ __typename?: 'ExternalSiteEntity', attributes?: { __typename?: 'ExternalSite', title?: string | null, image?: string | null, type: Enum_Externalsite_Type, url: string, video?: boolean | null } | null }> } | null };

export type GetSearchSaleQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetSearchSaleQuery = { __typename?: 'Query', marketplaceTv?: { __typename?: 'MarketplaceTvEntityResponse', data?: { __typename?: 'MarketplaceTvEntity', id?: string | null, attributes?: { __typename?: 'MarketplaceTv', price?: number | null, basePrice?: number | null, absoluteDiscount?: number | null, relativeDiscount?: number | null, affiliateUrl?: string | null, marketplace?: { __typename?: 'MarketplaceEntityResponse', data?: { __typename?: 'MarketplaceEntity', attributes?: { __typename?: 'Marketplace', name: string, logo: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } } | null } | null } | null, tv?: { __typename?: 'TvEntityResponse', data?: { __typename?: 'TvEntity', id?: string | null } | null } | null } | null } | null } | null };

export type GetSearchTvQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetSearchTvQuery = { __typename?: 'Query', tv?: { __typename?: 'TvEntityResponse', data?: { __typename?: 'TvEntity', id?: string | null, attributes?: (
        { __typename?: 'Tv' }
        & { ' $fragmentRefs': { 'SearchTvFragment': SearchTvFragment } }
      ) | null } | null } | null };

export type GetTvSeriesQueryVariables = Exact<{
  serieId: Scalars['ID'];
}>;


export type GetTvSeriesQuery = { __typename?: 'Query', tvs?: { __typename?: 'TvEntityResponseCollection', data: Array<{ __typename?: 'TvEntity', attributes?: { __typename?: 'Tv', name: string, slug?: string | null, minPrice?: number | null, general?: { __typename?: 'ComponentSectionsGeneral', screenSize: number } | null, image?: { __typename?: 'ComponentSectionsImage', resolution?: { __typename?: 'ScreenResolutionEntityResponse', data?: { __typename?: 'ScreenResolutionEntity', attributes?: { __typename?: 'ScreenResolution', resolution: string, alternativeName: string } | null } | null } | null } | null } | null }> } | null };

export type GetTvQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetTvQuery = { __typename?: 'Query', tvs?: { __typename?: 'TvEntityResponseCollection', data: Array<{ __typename?: 'TvEntity', id?: string | null, attributes?: (
        { __typename?: 'Tv' }
        & { ' $fragmentRefs': { 'CoreTvFragment': CoreTvFragment } }
      ) | null }> } | null };

export type SearchSalesQueryVariables = Exact<{
  page: Scalars['Int'];
  offset: Scalars['Int'];
  brand?: InputMaybe<Array<InputMaybe<Scalars['ID']>> | InputMaybe<Scalars['ID']>>;
  imageTechnology?: InputMaybe<Array<InputMaybe<Scalars['ID']>> | InputMaybe<Scalars['ID']>>;
  cableConnections?: InputMaybe<Array<InputMaybe<Scalars['ID']>> | InputMaybe<Scalars['ID']>>;
  sizeGreatherThan?: InputMaybe<Scalars['Float']>;
  sizeLessThan?: InputMaybe<Scalars['Float']>;
  minPrice?: InputMaybe<Scalars['Float']>;
  maxPrice?: InputMaybe<Scalars['Float']>;
  minScore?: InputMaybe<Scalars['Float']>;
  imageScore?: InputMaybe<Scalars['Float']>;
}>;


export type SearchSalesQuery = { __typename?: 'Query', marketplaceTvs?: { __typename?: 'MarketplaceTvEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', pageCount: number } }, data: Array<{ __typename?: 'MarketplaceTvEntity', id?: string | null }> } | null };

export type SearchSimilarTvsQueryVariables = Exact<{
  filters?: InputMaybe<TvFiltersInput>;
}>;


export type SearchSimilarTvsQuery = { __typename?: 'Query', tvs?: { __typename?: 'TvEntityResponseCollection', data: Array<{ __typename?: 'TvEntity', id?: string | null }> } | null };

export type SearchTvFragment = { __typename?: 'Tv', name: string, slug?: string | null, score?: number | null, ean: string, minPrice?: number | null, general?: { __typename?: 'ComponentSectionsGeneral', screenSize: number, releaseDate: any, brand?: { __typename?: 'ComponentGeneralBrand', model: string, serie?: { __typename?: 'TvSerieEntityResponse', data?: { __typename?: 'TvSerieEntity', attributes?: { __typename?: 'TvSerie', uid?: string | null, name: string, brand?: { __typename?: 'BrandEntityResponse', data?: { __typename?: 'BrandEntity', attributes?: { __typename?: 'Brand', name: string } | null } | null } | null } | null } | null } | null } | null } | null, image?: { __typename?: 'ComponentSectionsImage', resolution?: { __typename?: 'ScreenResolutionEntityResponse', data?: { __typename?: 'ScreenResolutionEntity', attributes?: { __typename?: 'ScreenResolution', resolution: string, icon: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } } | null } | null } | null, technology?: { __typename?: 'ComponentImageTechnology', image?: { __typename?: 'ImageTechnologyEntityResponse', data?: { __typename?: 'ImageTechnologyEntity', attributes?: { __typename?: 'ImageTechnology', name: string } | null } | null } | null } | null } | null, design?: { __typename?: 'ComponentSectionsDesign', score: number, pictures?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null }> } | null } | null } & { ' $fragmentName': 'SearchTvFragment' };

export type SearchTvsQueryVariables = Exact<{
  page: Scalars['Int'];
  offset: Scalars['Int'];
  sortBy: Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>;
  filters?: InputMaybe<TvFiltersInput>;
}>;


export type SearchTvsQuery = { __typename?: 'Query', tvs?: { __typename?: 'TvEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', pageCount: number } }, data: Array<{ __typename?: 'TvEntity', id?: string | null }> } | null };

export type CoreTvFragment = { __typename?: 'Tv', name: string, ean: string, slug?: string | null, score?: number | null, minPrice?: number | null, maxPrice?: number | null, general?: { __typename?: 'ComponentSectionsGeneral', screenSize: number, releaseDate: any, brand?: { __typename?: 'ComponentGeneralBrand', model: string, serie?: { __typename?: 'TvSerieEntityResponse', data?: { __typename?: 'TvSerieEntity', id?: string | null, attributes?: { __typename?: 'TvSerie', uid?: string | null, name: string, brand?: { __typename?: 'BrandEntityResponse', data?: { __typename?: 'BrandEntity', attributes?: { __typename?: 'Brand', name: string } | null } | null } | null } | null } | null } | null } | null } | null, image?: { __typename?: 'ComponentSectionsImage', id: string, score: number, resolution?: { __typename?: 'ScreenResolutionEntityResponse', data?: { __typename?: 'ScreenResolutionEntity', attributes?: { __typename?: 'ScreenResolution', resolution: string, alternativeName: string } | null } | null } | null, technology?: { __typename?: 'ComponentImageTechnology', image?: { __typename?: 'ImageTechnologyEntityResponse', data?: { __typename?: 'ImageTechnologyEntity', attributes?: { __typename?: 'ImageTechnology', name: string } | null } | null } | null, panel?: { __typename?: 'PanelTechnologyEntityResponse', data?: { __typename?: 'PanelTechnologyEntity', attributes?: { __typename?: 'PanelTechnology', type: string } | null } | null } | null, lightingType?: { __typename?: 'LightingTypeEntityResponse', data?: { __typename?: 'LightingTypeEntity', attributes?: { __typename?: 'LightingType', name: string } | null } | null } | null, creationColor?: { __typename?: 'ColorCreationEntityResponse', data?: { __typename?: 'ColorCreationEntity', attributes?: { __typename?: 'ColorCreation', name: string } | null } | null } | null, panelManufacturer?: { __typename?: 'PanelManufacturerEntityResponse', data?: { __typename?: 'PanelManufacturerEntity', attributes?: { __typename?: 'PanelManufacturer', name: string } | null } | null } | null } | null, backlightAndContrast?: { __typename?: 'ComponentImageBacklightAndContrast', brightness?: number | null, contrast?: string | null, zoneNumber?: number | null, backlightType?: { __typename?: 'BacklightTypeEntityResponse', data?: { __typename?: 'BacklightTypeEntity', attributes?: { __typename?: 'BacklightType', name: string } | null } | null } | null } | null, colorimetry?: { __typename?: 'ComponentImageColorimetry', dciP3?: number | null, rec709?: number | null, rec2020?: number | null, sRGB?: number | null, colorDepth?: { __typename?: 'ColorDepthEntityResponse', data?: { __typename?: 'ColorDepthEntity', attributes?: { __typename?: 'ColorDepth', name: string } | null } | null } | null } | null, hdr?: { __typename?: 'ComponentImageHdr', technologies?: { __typename?: 'HdrTechnologyRelationResponseCollection', data: Array<{ __typename?: 'HdrTechnologyEntity', attributes?: { __typename?: 'HdrTechnology', name: string } | null }> } | null } | null, crystal?: { __typename?: 'ComponentImageCrystal', horizontalVisionAngle?: number | null, verticalVisionAngle?: number | null, antiReflectiveFilter?: Enum_Componentimagecrystal_Antireflectivefilter | null } | null, processing?: { __typename?: 'ComponentImageProcessing', processor?: { __typename?: 'ImageProcessorEntityResponse', data?: { __typename?: 'ImageProcessorEntity', attributes?: { __typename?: 'ImageProcessor', name: string } | null } | null } | null } | null, responseTimes?: { __typename?: 'ComponentImageResponseTimes', inputLag60?: number | null, inputLag120?: number | null, gaming?: { __typename?: 'GamingTechnologyRelationResponseCollection', data: Array<{ __typename?: 'GamingTechnologyEntity', attributes?: { __typename?: 'GamingTechnology', name: string } | null }> } | null } | null } | null, sound?: { __typename?: 'ComponentSectionsSound', id: string, score: number, power?: number | null, outputChannels?: string | null, speakers?: Array<{ __typename?: 'ComponentSoundSpeaker', power: number, quantity: number } | null> | null, subwoofers?: Array<{ __typename?: 'ComponentSoundSpeaker', power: number, quantity: number } | null> | null, technologies?: { __typename?: 'SoundTechnologyRelationResponseCollection', data: Array<{ __typename?: 'SoundTechnologyEntity', attributes?: { __typename?: 'SoundTechnology', name: string } | null }> } | null } | null, connections?: { __typename?: 'ComponentSectionsConnections', id: string, score: number, hbbTV?: boolean | null, dvb?: { __typename?: 'DvbRelationResponseCollection', data: Array<{ __typename?: 'DvbEntity', attributes?: { __typename?: 'Dvb', name: string, type: Enum_Dvb_Type } | null }> } | null, cable?: Array<{ __typename?: 'ComponentConnectionConnection', quantity: number, type?: { __typename?: 'ConnectionTypeEntityResponse', data?: { __typename?: 'ConnectionTypeEntity', attributes?: { __typename?: 'ConnectionType', name: string, connection?: { __typename?: 'ConnectionEntityResponse', data?: { __typename?: 'ConnectionEntity', attributes?: { __typename?: 'Connection', name: string } | null } | null } | null } | null } | null } | null, connectionTechnologies?: { __typename?: 'ConnectionTechnologyRelationResponseCollection', data: Array<{ __typename?: 'ConnectionTechnologyEntity', attributes?: { __typename?: 'ConnectionTechnology', name: string } | null }> } | null } | null> | null, wireless?: { __typename?: 'WirelessConnectionTechnologyRelationResponseCollection', data: Array<{ __typename?: 'WirelessConnectionTechnologyEntity', attributes?: { __typename?: 'WirelessConnectionTechnology', name: string, type?: { __typename?: 'WirelessConnectionTypeEntityResponse', data?: { __typename?: 'WirelessConnectionTypeEntity', attributes?: { __typename?: 'WirelessConnectionType', name: string } | null } | null } | null } | null }> } | null, extraFeatures?: { __typename?: 'ExtraFeatureRelationResponseCollection', data: Array<{ __typename?: 'ExtraFeatureEntity', attributes?: { __typename?: 'ExtraFeature', name: string, description?: string | null } | null }> } | null } | null, design?: { __typename?: 'ComponentSectionsDesign', id: string, score: number, dimensionsWithStand?: { __typename?: 'ComponentDesignDimensions', width: number, height: number, depth: number, weight: number } | null, dimensionsWithoutStand?: { __typename?: 'ComponentDesignDimensions', width: number, height: number, depth: number, weight: number } | null, screenShape?: { __typename?: 'ScreenShapeEntityResponse', data?: { __typename?: 'ScreenShapeEntity', attributes?: { __typename?: 'ScreenShape', name: string } | null } | null } | null, colors?: { __typename?: 'ColorRelationResponseCollection', data: Array<{ __typename?: 'ColorEntity', attributes?: { __typename?: 'Color', name: string, hex: string } | null }> } | null, vesa?: { __typename?: 'VesaSizeEntityResponse', data?: { __typename?: 'VesaSizeEntity', attributes?: { __typename?: 'VesaSize', size: string } | null } | null } | null, pictures?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, height?: number | null, width?: number | null } | null }> } | null } | null, system?: { __typename?: 'ComponentSectionsSystem', id: string, score: number, powerSupply?: number | null, powerSupplyFrequency?: number | null, operatingSystem?: { __typename?: 'OperatingSystemVersionEntityResponse', data?: { __typename?: 'OperatingSystemVersionEntity', attributes?: { __typename?: 'OperatingSystemVersion', version: string, operatingSystem?: { __typename?: 'OperatingSystemEntityResponse', data?: { __typename?: 'OperatingSystemEntity', attributes?: { __typename?: 'OperatingSystem', name: string } | null } | null } | null } | null } | null } | null, voiceAssistants?: { __typename?: 'VoiceAssistantRelationResponseCollection', data: Array<{ __typename?: 'VoiceAssistantEntity', attributes?: { __typename?: 'VoiceAssistant', name: string } | null }> } | null, hardware?: { __typename?: 'ComponentSystemHardware', ram?: number | null, rom?: number | null, soc?: { __typename?: 'SocModelEntityResponse', data?: { __typename?: 'SocModelEntity', attributes?: { __typename?: 'SocModel', name?: string | null } | null } | null } | null } | null, consumption?: { __typename?: 'ComponentSystemConsumption', energyEfficiency?: Enum_Componentsystemconsumption_Energyefficiency | null, averageConsumption?: number | null, consumption?: number | null, standbyConsumption?: number | null } | null } | null, reviews?: { __typename?: 'ComponentSectionsReviews', id: string, reviews?: { __typename?: 'ExternalSiteRelationResponseCollection', data: Array<{ __typename?: 'ExternalSiteEntity', attributes?: { __typename?: 'ExternalSite', title?: string | null, url: string, video?: boolean | null, image?: string | null, type: Enum_Externalsite_Type } | null }> } | null, comparatives?: { __typename?: 'ExternalSiteRelationResponseCollection', data: Array<{ __typename?: 'ExternalSiteEntity', attributes?: { __typename?: 'ExternalSite', title?: string | null, url: string, video?: boolean | null, image?: string | null, type: Enum_Externalsite_Type } | null }> } | null } | null } & { ' $fragmentName': 'CoreTvFragment' };

export const SearchTvFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SearchTv"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tv"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"ean"}},{"kind":"Field","name":{"kind":"Name","value":"minPrice"}},{"kind":"Field","name":{"kind":"Name","value":"general"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"screenSize"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDate"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"model"}},{"kind":"Field","name":{"kind":"Name","value":"serie"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resolution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resolution"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"technology"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"design"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"pictures"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<SearchTvFragment, unknown>;
export const CoreTvFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoreTv"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tv"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"ean"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"minPrice"}},{"kind":"Field","name":{"kind":"Name","value":"maxPrice"}},{"kind":"Field","name":{"kind":"Name","value":"general"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"screenSize"}},{"kind":"Field","name":{"kind":"Name","value":"releaseDate"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"model"}},{"kind":"Field","name":{"kind":"Name","value":"serie"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"resolution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resolution"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeName"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"technology"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"panel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"lightingType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"creationColor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"panelManufacturer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"backlightAndContrast"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"brightness"}},{"kind":"Field","name":{"kind":"Name","value":"contrast"}},{"kind":"Field","name":{"kind":"Name","value":"zoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"backlightType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"colorimetry"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dciP3"}},{"kind":"Field","name":{"kind":"Name","value":"rec709"}},{"kind":"Field","name":{"kind":"Name","value":"rec2020"}},{"kind":"Field","name":{"kind":"Name","value":"sRGB"}},{"kind":"Field","name":{"kind":"Name","value":"colorDepth"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"hdr"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"technologies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"crystal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"horizontalVisionAngle"}},{"kind":"Field","name":{"kind":"Name","value":"verticalVisionAngle"}},{"kind":"Field","name":{"kind":"Name","value":"antiReflectiveFilter"}}]}},{"kind":"Field","name":{"kind":"Name","value":"processing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"processor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"responseTimes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gaming"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"inputLag60"}},{"kind":"Field","name":{"kind":"Name","value":"inputLag120"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"sound"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"speakers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"power"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}}]}},{"kind":"Field","name":{"kind":"Name","value":"subwoofers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"power"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}}]}},{"kind":"Field","name":{"kind":"Name","value":"power"}},{"kind":"Field","name":{"kind":"Name","value":"outputChannels"}},{"kind":"Field","name":{"kind":"Name","value":"technologies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"connections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"dvb"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"hbbTV"}},{"kind":"Field","name":{"kind":"Name","value":"cable"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"connection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"connectionTechnologies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"wireless"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"extraFeatures"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"design"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"dimensionsWithStand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dimensionsWithoutStand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"depth"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}}]}},{"kind":"Field","name":{"kind":"Name","value":"screenShape"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"colors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"vesa"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pictures"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"system"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"operatingSystem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"operatingSystem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"voiceAssistants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"hardware"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ram"}},{"kind":"Field","name":{"kind":"Name","value":"rom"}},{"kind":"Field","name":{"kind":"Name","value":"soc"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"consumption"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"energyEfficiency"}},{"kind":"Field","name":{"kind":"Name","value":"averageConsumption"}},{"kind":"Field","name":{"kind":"Name","value":"consumption"}},{"kind":"Field","name":{"kind":"Name","value":"standbyConsumption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"powerSupply"}},{"kind":"Field","name":{"kind":"Name","value":"powerSupplyFrequency"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reviews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"reviews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"video"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"comparatives"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"video"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<CoreTvFragment, unknown>;
export const GetBrandsFilterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBrandsFilter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"brands"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetBrandsFilterQuery, GetBrandsFilterQueryVariables>;
export const GetBrandsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBrands"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"brands"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"StringValue","value":"name:asc","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"-1"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"series"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"notNull"},"value":{"kind":"BooleanValue","value":true}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"series"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"-1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetBrandsQuery, GetBrandsQueryVariables>;
export const GetCableConnectionsFilterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCableConnectionsFilter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"connectionTypes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"-1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCableConnectionsFilterQuery, GetCableConnectionsFilterQueryVariables>;
export const GetFuzzySearchDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFuzzySearch"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tvs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"-1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SearchTv"}}]}}]}}]}}]}},...SearchTvFragmentDoc.definitions]} as unknown as DocumentNode<GetFuzzySearchQuery, GetFuzzySearchQueryVariables>;
export const GetHelpArticlesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetHelpArticles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"helpArticlesSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"section1"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"articles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"video"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"section2"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"articles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"video"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"section3"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"articles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"video"}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetHelpArticlesQuery, GetHelpArticlesQueryVariables>;
export const GetImageTechnologiesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetImageTechnologies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imageTechnologies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetImageTechnologiesQuery, GetImageTechnologiesQueryVariables>;
export const GetMarketplaceTvsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMarketplaceTvs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tvId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"marketplaceTvs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"tv"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tvId"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"affiliateUrl"}},{"kind":"Field","name":{"kind":"Name","value":"available"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryCost"}},{"kind":"Field","name":{"kind":"Name","value":"deliveryTime"}},{"kind":"Field","name":{"kind":"Name","value":"reconditioned"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"basePrice"}},{"kind":"Field","name":{"kind":"Name","value":"absoluteDiscount"}},{"kind":"Field","name":{"kind":"Name","value":"relativeDiscount"}},{"kind":"Field","name":{"kind":"Name","value":"marketplace"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethods"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetMarketplaceTvsQuery, GetMarketplaceTvsQueryVariables>;
export const GetPricesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPrices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"maxPrice"},"name":{"kind":"Name","value":"tvs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"StringValue","value":"minPrice:desc","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"minPrice"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"minPrice"},"name":{"kind":"Name","value":"tvs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"StringValue","value":"minPrice:asc","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"minPrice"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"gt"},"value":{"kind":"IntValue","value":"0"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"minPrice"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetPricesQuery, GetPricesQueryVariables>;
export const GetReviewsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetReviews"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"externalSites"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"StringValue","value":"createdAt:desc","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"ne"},"value":{"kind":"StringValue","value":"help-article","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageCount"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"video"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetReviewsQuery, GetReviewsQueryVariables>;
export const GetSearchSaleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSearchSale"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"marketplaceTv"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"basePrice"}},{"kind":"Field","name":{"kind":"Name","value":"absoluteDiscount"}},{"kind":"Field","name":{"kind":"Name","value":"relativeDiscount"}},{"kind":"Field","name":{"kind":"Name","value":"affiliateUrl"}},{"kind":"Field","name":{"kind":"Name","value":"marketplace"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"tv"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetSearchSaleQuery, GetSearchSaleQueryVariables>;
export const GetSearchTvDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSearchTv"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tv"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SearchTv"}}]}}]}}]}}]}},...SearchTvFragmentDoc.definitions]} as unknown as DocumentNode<GetSearchTvQuery, GetSearchTvQueryVariables>;
export const GetTvSeriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTvSeries"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serieId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tvs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"StringValue","value":"name:desc","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"general"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"brand"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"serie"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serieId"}}}]}}]}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"minPrice"}},{"kind":"Field","name":{"kind":"Name","value":"general"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"screenSize"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resolution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resolution"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeName"}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetTvSeriesQuery, GetTvSeriesQueryVariables>;
export const GetTvDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTv"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tvs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoreTv"}}]}}]}}]}}]}},...CoreTvFragmentDoc.definitions]} as unknown as DocumentNode<GetTvQuery, GetTvQueryVariables>;
export const SearchSalesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchSales"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"brand"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"imageTechnology"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cableConnections"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sizeGreatherThan"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sizeLessThan"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"minPrice"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"maxPrice"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"minScore"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"imageScore"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"marketplaceTvs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"StringValue","value":"tv.general.releaseDate:desc,absoluteDiscount:desc","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"and"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"price"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"gt"},"value":{"kind":"IntValue","value":"0"}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"absoluteDiscount"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"gt"},"value":{"kind":"IntValue","value":"0"}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"tv"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"general"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"screenSize"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"gt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sizeGreatherThan"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"lt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sizeLessThan"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"brand"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"serie"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"brand"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"brand"}}}]}}]}}]}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"minPrice"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"minPrice"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"maxPrice"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"score"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"minScore"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"image"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"score"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"imageScore"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"technology"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"image"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"imageTechnology"}}}]}}]}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"connections"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"cable"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cableConnections"}}}]}}]}}]}}]}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageCount"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<SearchSalesQuery, SearchSalesQueryVariables>;
export const SearchSimilarTvsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchSimilarTvs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TvFiltersInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tvs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"page"},"value":{"kind":"IntValue","value":"0"}},{"kind":"ObjectField","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"IntValue","value":"3"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"StringValue","value":"hit:desc","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<SearchSimilarTvsQuery, SearchSimilarTvsQueryVariables>;
export const SearchTvsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchTvs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TvFiltersInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tvs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageCount"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<SearchTvsQuery, SearchTvsQueryVariables>;