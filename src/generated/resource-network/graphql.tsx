import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {"context":{"clientName":"resource-network"}}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Decimal custom scalar type */
  Decimal: any;
  DateTime: any;
};

export type AcceptInviteInput = {
  code: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type AdminUser = {
  __typename?: 'AdminUser';
  ambassador?: Maybe<Ambassador>;
  avatarUrl?: Maybe<Scalars['String']>;
  business?: Maybe<Business>;
  campaign?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  isAdmin: Scalars['Boolean'];
  isDisabled: Scalars['Boolean'];
  isEmailValidated: Scalars['Boolean'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  lastName?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  requestedCategories?: Maybe<Array<Maybe<Scalars['String']>>>;
  role: Role;
  shouldResetPassword: Scalars['Boolean'];
  type?: Maybe<UserType>;
  updatedAt: Scalars['DateTime'];
  validateEmailToken?: Maybe<Scalars['String']>;
};

export type Ambassador = {
  __typename?: 'Ambassador';
  businesses?: Maybe<Array<Maybe<Business>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  creditAllowance?: Maybe<Scalars['Int']>;
  handle: Scalars['String'];
  id: Scalars['String'];
  owner?: Maybe<User>;
  ownerId: Scalars['String'];
  refCode: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AmbassadorUpdateInput = {
  creditAllowance?: Maybe<Scalars['Int']>;
  handle?: Maybe<Scalars['String']>;
};

export type AmbassadorUpdateManyMutationInput = {
  creditAllowance?: Maybe<IntUpdateInput>;
};

export type AmbassadorWhereInput = {
  AND?: Maybe<Array<Maybe<AmbassadorWhereInput>>>;
  NOT?: Maybe<Array<Maybe<AmbassadorWhereInput>>>;
  OR?: Maybe<Array<Maybe<AmbassadorWhereInput>>>;
  handle?: Maybe<StringFilter>;
};

export type AttachCategoriesInput = {
  requestedCategories: Array<Maybe<Scalars['String']>>;
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  authToken: Scalars['String'];
  user: User;
};

export type BatchCount = {
  __typename?: 'BatchCount';
  count: Scalars['Int'];
};

export type BoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type BoolUpdateInput = {
  set?: Maybe<Scalars['Boolean']>;
};

export type BugFormToSlack = {
  __typename?: 'BugFormToSlack';
  action: Scalars['String'];
  businessEmail: Scalars['String'];
  businessName: Scalars['String'];
  businessPhone: Scalars['String'];
  contact: Scalars['String'];
  expectation: Scalars['String'];
  frequency: Scalars['String'];
  priority: Scalars['String'];
  user: Scalars['String'];
};

export type BugFormToSlackInput = {
  action: Scalars['String'];
  businessEmail: Scalars['String'];
  businessName: Scalars['String'];
  businessPhone: Scalars['String'];
  contact: Scalars['String'];
  expectation: Scalars['String'];
  frequency: Scalars['String'];
  priority: Scalars['String'];
  user: Scalars['String'];
};

export type Business = {
  __typename?: 'Business';
  address?: Maybe<Scalars['String']>;
  ambassador?: Maybe<Ambassador>;
  ambassadorId?: Maybe<Scalars['String']>;
  approved?: Maybe<Scalars['Boolean']>;
  coverUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  emailNotifications?: Maybe<Scalars['Boolean']>;
  externalLinks?: Maybe<Array<Maybe<Scalars['String']>>>;
  handle: Scalars['String'];
  id: Scalars['String'];
  isDisabled?: Maybe<Scalars['Boolean']>;
  isEmailValidated?: Maybe<Scalars['Boolean']>;
  isSmsValidated?: Maybe<Scalars['Boolean']>;
  kmsTaxId?: Maybe<Scalars['String']>;
  listings?: Maybe<Array<Maybe<Listing>>>;
  logoUrl?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  notificationEmail?: Maybe<Scalars['String']>;
  notificationPhone?: Maybe<Scalars['String']>;
  owner?: Maybe<User>;
  ownerId: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  settings?: Maybe<BusinessSettings>;
  smsNotifications?: Maybe<Scalars['Boolean']>;
  tagline?: Maybe<Scalars['String']>;
  transactions?: Maybe<Array<Maybe<Transaction>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  wallet?: Maybe<Wallet>;
};

export type BusinessListRelationFilter = {
  every?: Maybe<BusinessWhereInput>;
  none?: Maybe<BusinessWhereInput>;
  some?: Maybe<BusinessWhereInput>;
};

export type BusinessOrderByInput = {
  handle?: Maybe<OrderBy>;
};

export type BusinessSettings = {
  __typename?: 'BusinessSettings';
  business?: Maybe<Business>;
  businessId?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  emailChat?: Maybe<Scalars['Boolean']>;
  emailMarketing?: Maybe<Scalars['Boolean']>;
  emailNotifications?: Maybe<Scalars['Boolean']>;
  emailProductUpdates?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
  isEmailValidated?: Maybe<Scalars['Boolean']>;
  isSmsValidated?: Maybe<Scalars['Boolean']>;
  languages?: Maybe<Array<Maybe<Languages>>>;
  notificationEmail?: Maybe<Scalars['String']>;
  notificationPhone?: Maybe<Scalars['String']>;
  oneTimePassword?: Maybe<Scalars['String']>;
  showSmsOptIn?: Maybe<Scalars['Boolean']>;
  smsChat?: Maybe<Scalars['Boolean']>;
  smsNotifications?: Maybe<Scalars['Boolean']>;
  smsTransaction?: Maybe<Scalars['Boolean']>;
  timezone?: Maybe<Scalars['String']>;
  udpatedAt: Scalars['DateTime'];
};

export type BusinessUpdateAdminInput = {
  address?: Maybe<Scalars['String']>;
  ambassadorCode?: Maybe<Scalars['String']>;
  ambassadorId?: Maybe<Scalars['String']>;
  approved?: Maybe<Scalars['Boolean']>;
  coverUrl?: Maybe<Scalars['String']>;
  creditLimit?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  emailNotifications?: Maybe<Scalars['Boolean']>;
  externalLinks?: Maybe<Array<Maybe<Scalars['String']>>>;
  handle?: Maybe<Scalars['String']>;
  isEmailValidated?: Maybe<Scalars['Boolean']>;
  isSmsValidated?: Maybe<Scalars['Boolean']>;
  kmsTaxId?: Maybe<Scalars['String']>;
  logoUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  notificationEmail?: Maybe<Scalars['String']>;
  notificationPhone?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  smsNotifications?: Maybe<Scalars['Boolean']>;
  tagline?: Maybe<Scalars['String']>;
};

export type BusinessUpdateInput = {
  address?: Maybe<Scalars['String']>;
  ambassadorCode?: Maybe<Scalars['String']>;
  ambassadorId?: Maybe<Scalars['String']>;
  coverUrl?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  emailNotifications?: Maybe<Scalars['Boolean']>;
  externalLinks?: Maybe<Array<Maybe<Scalars['String']>>>;
  handle?: Maybe<Scalars['String']>;
  isEmailValidated?: Maybe<Scalars['Boolean']>;
  isSmsValidated?: Maybe<Scalars['Boolean']>;
  kmsTaxId?: Maybe<Scalars['String']>;
  logoUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  notificationEmail?: Maybe<Scalars['String']>;
  notificationPhone?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  showSmsOptIn?: Maybe<Scalars['Boolean']>;
  smsNotifications?: Maybe<Scalars['Boolean']>;
  tagline?: Maybe<Scalars['String']>;
};

export type BusinessUpdateManyMutationInput = {
  creditLimit?: Maybe<IntUpdateInput>;
  isDisabled?: Maybe<BoolUpdateInput>;
};

export type BusinessWhereInput = {
  AND?: Maybe<Array<Maybe<BusinessWhereInput>>>;
  NOT?: Maybe<Array<Maybe<BusinessWhereInput>>>;
  OR?: Maybe<Array<Maybe<BusinessWhereInput>>>;
  address?: Maybe<StringFilter>;
  ambassadorId?: Maybe<StringFilter>;
  approved?: Maybe<BoolFilter>;
  coverUrl?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  description?: Maybe<StringFilter>;
  email?: Maybe<StringFilter>;
  handle?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  isDisabled?: Maybe<BoolFilter>;
  name?: Maybe<StringFilter>;
  ownerId?: Maybe<StringFilter>;
  phoneNumber?: Maybe<StringFilter>;
  showSmsOptIn?: Maybe<BoolFilter>;
  smsNotifications?: Maybe<BoolFilter>;
  tagline?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  wallet?: Maybe<WalletWhereInput>;
};

export type CategoryUpdateInput = {
  category?: Maybe<Scalars['String']>;
};

export type CategoryWhereInput = {
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  parentId?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type Channel = {
  __typename?: 'Channel';
  id?: Maybe<Scalars['String']>;
};

export type CipherPayload = {
  __typename?: 'CipherPayload';
  data?: Maybe<Scalars['String']>;
};

export type CreateAmbassadorInput = {
  creditAllowance?: Maybe<Scalars['Int']>;
  handle: Scalars['String'];
  ownerId: Scalars['String'];
};

export type CreateBusinessInput = {
  address?: Maybe<Scalars['String']>;
  ambassadorCode?: Maybe<Scalars['String']>;
  ambassadorId?: Maybe<Scalars['String']>;
  coverUrl?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  emailNotifications?: Maybe<Scalars['Boolean']>;
  externalLinks?: Maybe<Array<Maybe<Scalars['String']>>>;
  handle: Scalars['String'];
  isEmailValidated?: Maybe<Scalars['Boolean']>;
  isSmsValidated?: Maybe<Scalars['Boolean']>;
  kmsTaxId: Scalars['String'];
  logoUrl?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  notificationEmail?: Maybe<Scalars['String']>;
  notificationPhone?: Maybe<Scalars['String']>;
  ownerId: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  smsNotifications?: Maybe<Scalars['Boolean']>;
  tagline?: Maybe<Scalars['String']>;
};

export type CreateBusinessInviteInput = {
  address?: Maybe<Scalars['String']>;
  ambassadorCode?: Maybe<Scalars['String']>;
  ambassadorId?: Maybe<Scalars['String']>;
  coverUrl?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  emailNotifications?: Maybe<Scalars['Boolean']>;
  externalLinks?: Maybe<Array<Maybe<Scalars['String']>>>;
  handle: Scalars['String'];
  isEmailValidated?: Maybe<Scalars['Boolean']>;
  isSmsValidated?: Maybe<Scalars['Boolean']>;
  kmsTaxId?: Maybe<Scalars['String']>;
  logoUrl?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  notificationEmail?: Maybe<Scalars['String']>;
  notificationPhone?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  smsNotifications?: Maybe<Scalars['Boolean']>;
  tagline?: Maybe<Scalars['String']>;
};

export type CreateBusinessWithListingsInput = {
  business: CreateBusinessInput;
  listings?: Maybe<Array<Maybe<CreateListingWithoutBusinessInput>>>;
};

export type CreateCategoryInput = {
  category?: Maybe<Scalars['String']>;
};

export type CreateListingInput = {
  address?: Maybe<Scalars['String']>;
  availability?: Maybe<Scalars['String']>;
  businessId: Scalars['String'];
  calendarLink?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['String']>;
  cost?: Maybe<Scalars['Decimal']>;
  deliveryNotes?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  isDeliverable?: Maybe<Scalars['Boolean']>;
  isLocal?: Maybe<Scalars['Boolean']>;
  isVirtual?: Maybe<Scalars['Boolean']>;
  maxPrice?: Maybe<Scalars['Decimal']>;
  minPrice?: Maybe<Scalars['Decimal']>;
  quantity?: Maybe<Scalars['Int']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<ListingType>;
  videoUrl?: Maybe<Scalars['String']>;
};

export type CreateListingWithoutBusinessInput = {
  address?: Maybe<Scalars['String']>;
  availability?: Maybe<Scalars['String']>;
  calendarLink?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['String']>;
  cost?: Maybe<Scalars['Decimal']>;
  deliveryNotes?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  isDeliverable?: Maybe<Scalars['Boolean']>;
  isLocal?: Maybe<Scalars['Boolean']>;
  isVirtual?: Maybe<Scalars['Boolean']>;
  maxPrice?: Maybe<Scalars['Decimal']>;
  minPrice?: Maybe<Scalars['Decimal']>;
  quantity?: Maybe<Scalars['Int']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<ListingType>;
  videoUrl?: Maybe<Scalars['String']>;
};

export type CreateOrderInput = {
  deliveryAddress: Scalars['String'];
  fulfillmentMethod: Scalars['String'];
  listingId: Scalars['String'];
  note: Scalars['String'];
  quantity: Scalars['Int'];
  txData: Scalars['String'];
  txSignature: Scalars['String'];
};

export type CreateRequestFormToSlackInput = {
  businessEmail: Scalars['String'];
  businessName: Scalars['String'];
  businessPhone: Scalars['String'];
  companyLead?: Maybe<Scalars['String']>;
  contactMe: Scalars['String'];
  mainRequest: Scalars['String'];
  requestDetails?: Maybe<Scalars['String']>;
  user: Scalars['String'];
};

export type CreateTransactionInput = {
  amount: Scalars['Decimal'];
  note: Scalars['String'];
  recipientBusinessId: Scalars['String'];
  senderBusinessId: Scalars['String'];
};


export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type DateTimeUpdateInput = {
  set?: Maybe<Scalars['DateTime']>;
};


export type DecimalFilter = {
  equals?: Maybe<Scalars['Decimal']>;
  gt?: Maybe<Scalars['Decimal']>;
  gte?: Maybe<Scalars['Decimal']>;
  in?: Maybe<Array<Maybe<Scalars['Decimal']>>>;
  lt?: Maybe<Scalars['Decimal']>;
  lte?: Maybe<Scalars['Decimal']>;
  not?: Maybe<NestedDecimalFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Decimal']>>>;
};

export type EnumRoleFieldUpdateOperationsInput = {
  set?: Maybe<Role>;
};

export type EnumRoleFilter = {
  equals?: Maybe<Role>;
  in?: Maybe<Array<Maybe<Role>>>;
  not?: Maybe<NestedEnumRoleFilter>;
  notIn?: Maybe<Array<Maybe<Role>>>;
};

export type EnumStateFieldUpdateOperationsInput = {
  set?: Maybe<OrderStatus>;
};

export type FeedbackFormToSlack = {
  __typename?: 'FeedbackFormToSlack';
  businessEmail: Scalars['String'];
  businessName: Scalars['String'];
  businessPhone: Scalars['String'];
  details?: Maybe<Scalars['String']>;
  feedback: Scalars['String'];
  priority: Scalars['String'];
  user: Scalars['String'];
};

export type FeedbackFormToSlackInput = {
  businessEmail: Scalars['String'];
  businessName: Scalars['String'];
  businessPhone: Scalars['String'];
  details?: Maybe<Scalars['String']>;
  feedback: Scalars['String'];
  priority: Scalars['String'];
  user: Scalars['String'];
};

export enum FulfillmentMethod {
  Delivery = 'DELIVERY',
  Local = 'LOCAL',
  Virtual = 'VIRTUAL'
}

export type HandleNode = {
  __typename?: 'HandleNode';
  handle?: Maybe<Scalars['String']>;
  isUnique?: Maybe<Scalars['Boolean']>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type IntUpdateInput = {
  decrement?: Maybe<Scalars['Int']>;
  divide?: Maybe<Scalars['Int']>;
  increment?: Maybe<Scalars['Int']>;
  multiply?: Maybe<Scalars['Int']>;
  set?: Maybe<Scalars['Int']>;
};

export type InviteAmbassadorInput = {
  creditAllowance?: Maybe<Scalars['Int']>;
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  handle: Scalars['String'];
  lastName?: Maybe<Scalars['String']>;
};

export type InviteBusinessInput = {
  business?: Maybe<CreateBusinessInviteInput>;
  campaign?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export enum Languages {
  Afrikaans = 'AFRIKAANS',
  Algerian = 'ALGERIAN',
  Amharic = 'AMHARIC',
  Arabic = 'ARABIC',
  Aramaic = 'ARAMAIC',
  Armenian = 'ARMENIAN',
  Bengali = 'BENGALI',
  Berber = 'BERBER',
  Bhojpuri = 'BHOJPURI',
  Bosnian = 'BOSNIAN',
  Brazilian = 'BRAZILIAN',
  Bulgarian = 'BULGARIAN',
  Burmese = 'BURMESE',
  Cantonese = 'CANTONESE',
  Catalan = 'CATALAN',
  Corsica = 'CORSICA',
  Creole = 'CREOLE',
  Croatian = 'CROATIAN',
  Cypriot = 'CYPRIOT',
  Czech = 'CZECH',
  Danish = 'DANISH',
  Dutch = 'DUTCH',
  Egyptian = 'EGYPTIAN',
  English = 'ENGLISH',
  Esperanto = 'ESPERANTO',
  Estonian = 'ESTONIAN',
  Filipino = 'FILIPINO',
  Finn = 'FINN',
  Finnish = 'FINNISH',
  Flemish = 'FLEMISH',
  French = 'FRENCH',
  Georgian = 'GEORGIAN',
  German = 'GERMAN',
  Greek = 'GREEK',
  Guijarati = 'GUIJARATI',
  Gypsy = 'GYPSY',
  Hawaiian = 'HAWAIIAN',
  Hebrew = 'HEBREW',
  Hindi = 'HINDI',
  Huasa = 'HUASA',
  Hungarian = 'HUNGARIAN',
  Icelandic = 'ICELANDIC',
  Indonesian = 'INDONESIAN',
  Inuit = 'INUIT',
  Irish = 'IRISH',
  Italian = 'ITALIAN',
  Japanese = 'JAPANESE',
  Javanese = 'JAVANESE',
  Kannada = 'KANNADA',
  Korean = 'KOREAN',
  Latin = 'LATIN',
  Lithuanian = 'LITHUANIAN',
  Malay = 'MALAY',
  Malayalam = 'MALAYALAM',
  Mandarin = 'MANDARIN',
  Nepalese = 'NEPALESE',
  Norwegian = 'NORWEGIAN',
  Panjabi = 'PANJABI',
  Persian = 'PERSIAN',
  Polish = 'POLISH',
  Portuguese = 'PORTUGUESE',
  Romani = 'ROMANI',
  Romanian = 'ROMANIAN',
  Russian = 'RUSSIAN',
  Sanskrit = 'SANSKRIT',
  Scottish = 'SCOTTISH',
  Serbian = 'SERBIAN',
  Signlanguage = 'SIGNLANGUAGE',
  Slovak = 'SLOVAK',
  Slovene = 'SLOVENE',
  Spanish = 'SPANISH',
  Swahili = 'SWAHILI',
  Swedish = 'SWEDISH',
  Tagalog = 'TAGALOG',
  Tahitian = 'TAHITIAN',
  Tamil = 'TAMIL',
  Telugu = 'TELUGU',
  Thai = 'THAI',
  Tibetan = 'TIBETAN',
  Turkish = 'TURKISH',
  Ukrainian = 'UKRAINIAN',
  Vietnamese = 'VIETNAMESE',
  Welsh = 'WELSH',
  Wu = 'WU',
  Yoruba = 'YORUBA'
}

export type Listing = {
  __typename?: 'Listing';
  address?: Maybe<Scalars['String']>;
  availability?: Maybe<Scalars['String']>;
  business?: Maybe<Business>;
  businessId: Scalars['String'];
  calendarLink?: Maybe<Scalars['String']>;
  category?: Maybe<ListingCategory>;
  categoryId?: Maybe<Scalars['String']>;
  cost?: Maybe<Scalars['Decimal']>;
  createdAt: Scalars['DateTime'];
  deliveryNotes?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  imageUrl?: Maybe<Scalars['String']>;
  isDeliverable?: Maybe<Scalars['Boolean']>;
  isDisabled?: Maybe<Scalars['Boolean']>;
  isFeatured?: Maybe<Scalars['Boolean']>;
  isLocal?: Maybe<Scalars['Boolean']>;
  isVirtual?: Maybe<Scalars['Boolean']>;
  maxPrice?: Maybe<Scalars['Decimal']>;
  minPrice?: Maybe<Scalars['Decimal']>;
  quantity?: Maybe<Scalars['Int']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<ListingType>;
  updatedAt: Scalars['DateTime'];
  videoUrl?: Maybe<Scalars['String']>;
};

export type ListingCategory = {
  __typename?: 'ListingCategory';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  parent?: Maybe<ListingCategory>;
  parentId?: Maybe<Scalars['String']>;
  subcategories?: Maybe<Array<Maybe<ListingCategory>>>;
};

export type ListingListRelationFilter = {
  every?: Maybe<ListingWhereInput>;
  none?: Maybe<ListingWhereInput>;
  some?: Maybe<ListingWhereInput>;
};

export enum ListingType {
  Experience = 'EXPERIENCE',
  Product = 'PRODUCT',
  Service = 'SERVICE'
}

export type ListingWhereInput = {
  AND?: Maybe<Array<Maybe<ListingWhereInput>>>;
  NOT?: Maybe<Array<Maybe<ListingWhereInput>>>;
  OR?: Maybe<Array<Maybe<ListingWhereInput>>>;
  address?: Maybe<StringFilter>;
  availability?: Maybe<StringFilter>;
  businessId?: Maybe<Scalars['String']>;
  calendarLink?: Maybe<StringFilter>;
  category?: Maybe<CategoryWhereInput>;
  cost?: Maybe<DecimalFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  deliveryNotes?: Maybe<StringFilter>;
  description?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  isDeliverable?: Maybe<BoolFilter>;
  isDisabled?: Maybe<BoolFilter>;
  isFeatured?: Maybe<BoolFilter>;
  isLocal?: Maybe<BoolFilter>;
  isVirtual?: Maybe<BoolFilter>;
  maxPrice?: Maybe<DecimalFilter>;
  minPrice?: Maybe<DecimalFilter>;
  quantity?: Maybe<IntFilter>;
  title?: Maybe<StringFilter>;
  type?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type ManyAmbassador = {
  __typename?: 'ManyAmbassador';
  ambassadors?: Maybe<Array<Maybe<Ambassador>>>;
  total?: Maybe<Scalars['Int']>;
};

export type ManyBusiness = {
  __typename?: 'ManyBusiness';
  businesses?: Maybe<Array<Maybe<Business>>>;
  total?: Maybe<Scalars['Int']>;
};

export type ManyListing = {
  __typename?: 'ManyListing';
  listings?: Maybe<Array<Maybe<Listing>>>;
  total?: Maybe<Scalars['Int']>;
};

export type ManyListingCategory = {
  __typename?: 'ManyListingCategory';
  categories?: Maybe<Array<Maybe<ListingCategory>>>;
  total?: Maybe<Scalars['Int']>;
};

export type ManyTransaction = {
  __typename?: 'ManyTransaction';
  total?: Maybe<Scalars['Int']>;
  transactions?: Maybe<Array<Maybe<Transaction>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  acceptInvite: AuthPayload;
  adminUpdateBusiness: Business;
  assignCredit: Wallet;
  checkEmailVerification: VerifyPayload;
  checkSmsVerification: VerifyPayload;
  claimWallet: Wallet;
  createAmbassador: Ambassador;
  createAmbassadorInvite: Ambassador;
  createBusiness: Business;
  createBusinessInvite: Business;
  createCategory: ListingCategory;
  createListing: Listing;
  createOrder: Order;
  deleteManyCategory: BatchCount;
  deleteOneCategory?: Maybe<ListingCategory>;
  disableUser?: Maybe<User>;
  doubleEncryptHash: CipherPayload;
  findOrCreateChannel: Channel;
  loginUser: AuthPayload;
  registerUser: AuthPayload;
  requestEmailVerification: VerifyPayload;
  requestReset?: Maybe<Scalars['Boolean']>;
  requestSmsVerification: VerifyPayload;
  resetOTP?: Maybe<Scalars['Boolean']>;
  resetPassword: AuthPayload;
  resetPasswordWithGuardian: AuthPayload;
  retryTransaction: Transaction;
  sendAmbassadorInvite: Ambassador;
  sendBugFormToSlack?: Maybe<Scalars['Boolean']>;
  sendBusinessInvite: Business;
  sendFeedbackFormToSlack?: Maybe<Scalars['Boolean']>;
  sendRequestFormToSlack?: Maybe<Scalars['Boolean']>;
  sendRusd: Transaction;
  sendWelcomeEmail?: Maybe<Scalars['Boolean']>;
  toggleBusiness: Business;
  toggleListing?: Maybe<Listing>;
  updateAmbassador: Ambassador;
  updateBusiness: Business;
  updateBusinessSettingsByBusiness: BusinessSettings;
  updateListing?: Maybe<Listing>;
  updateManyCategory?: Maybe<BatchCount>;
  updateOrderStatus: Order;
  verifyOTP?: Maybe<Scalars['Boolean']>;
};


export type MutationAcceptInviteArgs = {
  data?: Maybe<AcceptInviteInput>;
};


export type MutationAdminUpdateBusinessArgs = {
  data: BusinessUpdateAdminInput;
  id: Scalars['ID'];
};


export type MutationAssignCreditArgs = {
  id: Scalars['ID'];
  limit: Scalars['String'];
};


export type MutationCheckEmailVerificationArgs = {
  businessId: Scalars['ID'];
  code: Scalars['String'];
};


export type MutationCheckSmsVerificationArgs = {
  businessId: Scalars['ID'];
  code: Scalars['String'];
  to: Scalars['String'];
};


export type MutationClaimWalletArgs = {
  clientAddress: Scalars['String'];
  guardianAddress: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationCreateAmbassadorArgs = {
  data?: Maybe<CreateAmbassadorInput>;
};


export type MutationCreateAmbassadorInviteArgs = {
  data?: Maybe<InviteAmbassadorInput>;
};


export type MutationCreateBusinessArgs = {
  data?: Maybe<CreateBusinessInput>;
};


export type MutationCreateBusinessInviteArgs = {
  data?: Maybe<InviteBusinessInput>;
};


export type MutationCreateCategoryArgs = {
  data?: Maybe<CreateCategoryInput>;
};


export type MutationCreateListingArgs = {
  data?: Maybe<CreateListingInput>;
};


export type MutationCreateOrderArgs = {
  data?: Maybe<CreateOrderInput>;
};


export type MutationDeleteManyCategoryArgs = {
  where: CategoryWhereInput;
};


export type MutationDeleteOneCategoryArgs = {
  id: Scalars['ID'];
};


export type MutationDisableUserArgs = {
  id: Scalars['ID'];
};


export type MutationDoubleEncryptHashArgs = {
  encryptedHash: Scalars['String'];
};


export type MutationFindOrCreateChannelArgs = {
  targetBusinessId: Scalars['ID'];
};


export type MutationLoginUserArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRegisterUserArgs = {
  data: UserCreateInput;
};


export type MutationRequestEmailVerificationArgs = {
  businessId: Scalars['ID'];
  email: Scalars['String'];
};


export type MutationRequestResetArgs = {
  email: Scalars['String'];
};


export type MutationRequestSmsVerificationArgs = {
  to: Scalars['String'];
};


export type MutationResetOtpArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  confirmPassword: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  validateEmailToken: Scalars['String'];
};


export type MutationResetPasswordWithGuardianArgs = {
  email: Scalars['String'];
  newClientAddress: Scalars['String'];
  password: Scalars['String'];
  transactionId: Scalars['String'];
};


export type MutationRetryTransactionArgs = {
  transactionId: Scalars['ID'];
  txData: Scalars['String'];
  txSignature: Scalars['String'];
};


export type MutationSendAmbassadorInviteArgs = {
  id: Scalars['ID'];
};


export type MutationSendBugFormToSlackArgs = {
  data: BugFormToSlackInput;
};


export type MutationSendBusinessInviteArgs = {
  id: Scalars['ID'];
};


export type MutationSendFeedbackFormToSlackArgs = {
  data: FeedbackFormToSlackInput;
};


export type MutationSendRequestFormToSlackArgs = {
  data: CreateRequestFormToSlackInput;
};


export type MutationSendRusdArgs = {
  data?: Maybe<SendRusdInput>;
};


export type MutationSendWelcomeEmailArgs = {
  email: Scalars['String'];
};


export type MutationToggleBusinessArgs = {
  id: Scalars['ID'];
};


export type MutationToggleListingArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateAmbassadorArgs = {
  data: AmbassadorUpdateInput;
  id: Scalars['ID'];
};


export type MutationUpdateBusinessArgs = {
  data: BusinessUpdateInput;
  id: Scalars['ID'];
};


export type MutationUpdateBusinessSettingsByBusinessArgs = {
  businessId: Scalars['ID'];
  data?: Maybe<UpdateBusinessSettingsInput>;
};


export type MutationUpdateListingArgs = {
  data?: Maybe<UpdateListingInput>;
  id: Scalars['ID'];
};


export type MutationUpdateManyCategoryArgs = {
  data: CategoryUpdateInput;
  where?: Maybe<CategoryWhereInput>;
};


export type MutationUpdateOrderStatusArgs = {
  data: UpdateOrderStatusInput;
  id: Scalars['ID'];
};


export type MutationVerifyOtpArgs = {
  email: Scalars['String'];
  otp: Scalars['String'];
};

export type NestedBoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<DateTimeFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type NestedDecimalFilter = {
  equals?: Maybe<Scalars['Decimal']>;
  gt?: Maybe<Scalars['Decimal']>;
  gte?: Maybe<Scalars['Decimal']>;
  in?: Maybe<Array<Maybe<Scalars['Decimal']>>>;
  lt?: Maybe<Scalars['Decimal']>;
  lte?: Maybe<Scalars['Decimal']>;
  not?: Maybe<NestedDecimalFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Decimal']>>>;
};

export type NestedEnumRoleFilter = {
  equals?: Maybe<Role>;
  in?: Maybe<Array<Maybe<Role>>>;
  notIn?: Maybe<Array<Maybe<Role>>>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type NestedStringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type Order = {
  __typename?: 'Order';
  amount: Scalars['Decimal'];
  createdAt: Scalars['DateTime'];
  deliveryAddress?: Maybe<Scalars['String']>;
  events?: Maybe<OrderEvent>;
  fulfillmentMethod?: Maybe<FulfillmentMethod>;
  id: Scalars['String'];
  listing?: Maybe<Listing>;
  listingId: Scalars['String'];
  note: Scalars['String'];
  quantity: Scalars['Int'];
  status: OrderStatus;
  updatedAt: Scalars['DateTime'];
};

export enum OrderBy {
  Asc = 'asc',
  Desc = 'desc'
}

export type OrderEvent = {
  __typename?: 'OrderEvent';
  createdAt: Scalars['DateTime'];
  fromStatus: OrderStatus;
  id: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  order: Order;
  orderId: Scalars['String'];
  toStatus: OrderStatus;
};

export enum OrderStatus {
  Cancelled = 'CANCELLED',
  Closed = 'CLOSED',
  Inprogress = 'INPROGRESS',
  Open = 'OPEN'
}

export type OrderStatusFilter = {
  equals?: Maybe<OrderStatus>;
};

export type OrderWhereInput = {
  AND?: Maybe<Array<Maybe<OrderWhereInput>>>;
  NOT?: Maybe<Array<Maybe<OrderWhereInput>>>;
  OR?: Maybe<Array<Maybe<OrderWhereInput>>>;
  amount?: Maybe<DecimalFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  listing?: Maybe<ListingWhereInput>;
  listingId?: Maybe<StringFilter>;
  note?: Maybe<StringFilter>;
  quantity?: Maybe<IntFilter>;
  status?: Maybe<OrderStatusFilter>;
  transaction?: Maybe<TransactionWhereInput>;
  transactionId?: Maybe<StringFilter>;
};

export type OrderWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  allBusinessTransactions?: Maybe<Array<Maybe<Transaction>>>;
  allOrders?: Maybe<Array<Maybe<Order>>>;
  businessTransactionStats?: Maybe<TransactionStatsOutput>;
  countAllBusiness?: Maybe<Scalars['Int']>;
  countAllCategory?: Maybe<Scalars['Int']>;
  countAllListing?: Maybe<Scalars['Int']>;
  countAllOrders: Scalars['Int'];
  countAllTransactions?: Maybe<Scalars['Int']>;
  countAllUsers?: Maybe<Scalars['Int']>;
  findAllUsers: Array<AdminUser>;
  findByBusiness?: Maybe<ManyListing>;
  findFirstBusiness?: Maybe<Business>;
  findManyAmbassador?: Maybe<ManyAmbassador>;
  findManyBusiness?: Maybe<ManyBusiness>;
  findManyCategory?: Maybe<ManyListingCategory>;
  findManyListing?: Maybe<ManyListing>;
  findManyTransactions?: Maybe<ManyTransaction>;
  findOneAmbassadorByHandle?: Maybe<Ambassador>;
  findOneAmbassadorById?: Maybe<Ambassador>;
  findOneBusinessByHandle?: Maybe<Business>;
  findOneBusinessById?: Maybe<Business>;
  findOneCategory?: Maybe<ListingCategory>;
  findOneListing?: Maybe<Listing>;
  findOneOrder?: Maybe<Order>;
  findTransactionById?: Maybe<Transaction>;
  findTransactionByTxId?: Maybe<Transaction>;
  findUserByEmail?: Maybe<User>;
  findUserById?: Maybe<User>;
  getBusinessStreamToken?: Maybe<Scalars['String']>;
  getOrderTotal: Scalars['Decimal'];
  isAmbassadorHandleUnique: HandleNode;
  isBusinessHandleUnique: HandleNode;
  isEmailUnique?: Maybe<Scalars['Boolean']>;
  isInviteCodeValid?: Maybe<Scalars['Boolean']>;
  me?: Maybe<User>;
  searchBusinesses?: Maybe<ManyBusiness>;
  searchListings?: Maybe<ManyListing>;
  totalTransactionVolume?: Maybe<Scalars['Decimal']>;
  walletBalance: WalletBalance;
};


export type QueryAllBusinessTransactionsArgs = {
  id: Scalars['ID'];
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryAllOrdersArgs = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<OrderWhereInput>;
};


export type QueryBusinessTransactionStatsArgs = {
  businessId: Scalars['ID'];
};


export type QueryCountAllBusinessArgs = {
  where?: Maybe<BusinessWhereInput>;
};


export type QueryCountAllCategoryArgs = {
  where?: Maybe<CategoryWhereInput>;
};


export type QueryCountAllListingArgs = {
  where?: Maybe<ListingWhereInput>;
};


export type QueryCountAllOrdersArgs = {
  where?: Maybe<OrderWhereInput>;
};


export type QueryCountAllTransactionsArgs = {
  where?: Maybe<TransactionWhereInput>;
};


export type QueryCountAllUsersArgs = {
  where?: Maybe<UserWhereInput>;
};


export type QueryFindAllUsersArgs = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryFindByBusinessArgs = {
  id: Scalars['ID'];
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};


export type QueryFindFirstBusinessArgs = {
  where: BusinessWhereInput;
};


export type QueryFindManyAmbassadorArgs = {
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  where?: Maybe<AmbassadorWhereInput>;
};


export type QueryFindManyBusinessArgs = {
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  where?: Maybe<BusinessWhereInput>;
};


export type QueryFindManyListingArgs = {
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  where?: Maybe<ListingWhereInput>;
};


export type QueryFindManyTransactionsArgs = {
  limit?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TransactionOrderByInput>;
  page?: Maybe<Scalars['Int']>;
  where?: Maybe<TransactionWhereInput>;
};


export type QueryFindOneAmbassadorByHandleArgs = {
  handle: Scalars['String'];
};


export type QueryFindOneAmbassadorByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindOneBusinessByHandleArgs = {
  handle: Scalars['String'];
};


export type QueryFindOneBusinessByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindOneCategoryArgs = {
  id: Scalars['ID'];
};


export type QueryFindOneListingArgs = {
  id: Scalars['ID'];
};


export type QueryFindOneOrderArgs = {
  id: Scalars['ID'];
};


export type QueryFindTransactionByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindTransactionByTxIdArgs = {
  txId: Scalars['String'];
};


export type QueryFindUserByEmailArgs = {
  email: Scalars['String'];
};


export type QueryFindUserByIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetBusinessStreamTokenArgs = {
  businessId: Scalars['ID'];
};


export type QueryGetOrderTotalArgs = {
  listingId: Scalars['ID'];
  quantity: Scalars['Int'];
};


export type QueryIsAmbassadorHandleUniqueArgs = {
  handle: Scalars['String'];
};


export type QueryIsBusinessHandleUniqueArgs = {
  handle: Scalars['String'];
};


export type QueryIsEmailUniqueArgs = {
  email: Scalars['String'];
};


export type QueryIsInviteCodeValidArgs = {
  code: Scalars['String'];
};


export type QuerySearchBusinessesArgs = {
  filter: Scalars['String'];
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};


export type QuerySearchListingsArgs = {
  filter: Scalars['String'];
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};


export type QueryTotalTransactionVolumeArgs = {
  where?: Maybe<TransactionWhereInput>;
};


export type QueryWalletBalanceArgs = {
  id: Scalars['ID'];
};

export type RequestFormToSlack = {
  __typename?: 'RequestFormToSlack';
  businessEmail: Scalars['String'];
  businessName: Scalars['String'];
  businessPhone: Scalars['String'];
  companyLead?: Maybe<Scalars['String']>;
  contactMe: Scalars['String'];
  mainRequest: Scalars['String'];
  requestDetails?: Maybe<Scalars['String']>;
  user: Scalars['String'];
};

export enum Role {
  Admin = 'ADMIN',
  User = 'USER'
}

export type SendRusdInput = {
  amount: Scalars['Decimal'];
  note: Scalars['String'];
  recipientBusinessId: Scalars['String'];
  senderBusinessId: Scalars['String'];
  txData: Scalars['String'];
  txSignature: Scalars['String'];
};

export type StringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type Transaction = {
  __typename?: 'Transaction';
  amount: Scalars['Decimal'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  note?: Maybe<Scalars['String']>;
  order?: Maybe<Order>;
  recipient?: Maybe<Wallet>;
  recipientId: Scalars['String'];
  sender?: Maybe<Wallet>;
  senderId: Scalars['String'];
  status?: Maybe<TransactionStatus>;
  txHash?: Maybe<Scalars['String']>;
  txId?: Maybe<Scalars['String']>;
};

export type TransactionOrderByInput = {
  amount?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  status?: Maybe<OrderBy>;
};

export type TransactionStatsOutput = {
  __typename?: 'TransactionStatsOutput';
  count: Scalars['Int'];
  volume: Scalars['Decimal'];
};

export enum TransactionStatus {
  Confirmed = 'CONFIRMED',
  Failed = 'FAILED',
  Pending = 'PENDING',
  Queued = 'QUEUED'
}

export type TransactionStatusFilter = {
  equals?: Maybe<TransactionStatus>;
};

export type TransactionWhereInput = {
  AND?: Maybe<Array<Maybe<TransactionWhereInput>>>;
  NOT?: Maybe<Array<Maybe<TransactionWhereInput>>>;
  OR?: Maybe<Array<Maybe<TransactionWhereInput>>>;
  amount?: Maybe<DecimalFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  listing?: Maybe<ListingWhereInput>;
  listingId?: Maybe<StringFilter>;
  order?: Maybe<OrderWhereInput>;
  orderId?: Maybe<StringFilter>;
  recipient?: Maybe<BusinessWhereInput>;
  recipientId?: Maybe<StringFilter>;
  sender?: Maybe<WalletWhereInput>;
  senderId?: Maybe<StringFilter>;
  status?: Maybe<TransactionStatusFilter>;
};

export type TransactionWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type UpdateBusinessSettingsInput = {
  emailChat?: Maybe<Scalars['Boolean']>;
  emailMarketing?: Maybe<Scalars['Boolean']>;
  emailNotifications?: Maybe<Scalars['Boolean']>;
  emailProductUpdates?: Maybe<Scalars['Boolean']>;
  isEmailValidated?: Maybe<Scalars['Boolean']>;
  isSmsValidated?: Maybe<Scalars['Boolean']>;
  languages?: Maybe<Array<Maybe<Languages>>>;
  notificationEmail?: Maybe<Scalars['String']>;
  notificationPhone?: Maybe<Scalars['String']>;
  oneTimePassword?: Maybe<Scalars['String']>;
  showSmsOptIn?: Maybe<Scalars['Boolean']>;
  smsChat?: Maybe<Scalars['Boolean']>;
  smsNotifications?: Maybe<Scalars['Boolean']>;
  smsTransaction?: Maybe<Scalars['Boolean']>;
  timezone?: Maybe<Scalars['String']>;
};

export type UpdateListingInput = {
  address?: Maybe<Scalars['String']>;
  availability?: Maybe<Scalars['String']>;
  calendarLink?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['String']>;
  cost?: Maybe<Scalars['Decimal']>;
  deliveryNotes?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  isDeliverable?: Maybe<Scalars['Boolean']>;
  isFeatured?: Maybe<Scalars['Boolean']>;
  isLocal?: Maybe<Scalars['Boolean']>;
  isVirtual?: Maybe<Scalars['Boolean']>;
  maxPrice?: Maybe<Scalars['Decimal']>;
  minPrice?: Maybe<Scalars['Decimal']>;
  quantity?: Maybe<Scalars['Int']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  videoUrl?: Maybe<Scalars['String']>;
};

export type UpdateOrderStatusInput = {
  note?: Maybe<Scalars['String']>;
  status: OrderStatus;
};

export type User = {
  __typename?: 'User';
  ambassador?: Maybe<Ambassador>;
  avatarUrl?: Maybe<Scalars['String']>;
  business?: Maybe<Business>;
  campaign?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  isAdmin: Scalars['Boolean'];
  isDisabled: Scalars['Boolean'];
  isEmailValidated: Scalars['Boolean'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  lastName?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  requestedCategories?: Maybe<Array<Maybe<Scalars['String']>>>;
  role: Role;
  shouldResetPassword: Scalars['Boolean'];
  type?: Maybe<UserType>;
  updatedAt: Scalars['DateTime'];
};

export type UserCreateInput = {
  campaign?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  sendOTPEmail?: Maybe<Scalars['Boolean']>;
  type?: Maybe<Scalars['String']>;
};

export enum UserType {
  Cloudcity = 'CLOUDCITY',
  Employee = 'EMPLOYEE',
  Local = 'LOCAL'
}

export type UserUpdateInput = {
  avatarUrl?: Maybe<Scalars['String']>;
  campaign?: Maybe<Scalars['String']>;
  dateResetPasswordRequest?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  isEmailValidated?: Maybe<Scalars['Boolean']>;
  lastLogin?: Maybe<Scalars['DateTime']>;
  lastName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserUpdateManyMutationInput = {
  isAdmin?: Maybe<BoolUpdateInput>;
  isDisabled?: Maybe<BoolUpdateInput>;
  lastLogin?: Maybe<DateTimeUpdateInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
  shouldResetPassword?: Maybe<BoolUpdateInput>;
};

export type UserWhereInput = {
  AND?: Maybe<Array<Maybe<UserWhereInput>>>;
  NOT?: Maybe<Array<Maybe<UserWhereInput>>>;
  OR?: Maybe<Array<Maybe<UserWhereInput>>>;
  business?: Maybe<BusinessListRelationFilter>;
  campaign?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringFilter>;
  firstName?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  isAdmin?: Maybe<BoolFilter>;
  isDisabled?: Maybe<BoolFilter>;
  isEmailValidated?: Maybe<BoolFilter>;
  lastLogin?: Maybe<DateTimeFilter>;
  lastName?: Maybe<StringFilter>;
  password?: Maybe<StringFilter>;
  role?: Maybe<EnumRoleFilter>;
  shouldResetPassword?: Maybe<BoolFilter>;
  type?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type VerifyPayload = {
  __typename?: 'VerifyPayload';
  data?: Maybe<Scalars['String']>;
  error?: Maybe<Scalars['Boolean']>;
};

export type Wallet = {
  __typename?: 'Wallet';
  business?: Maybe<Business>;
  businessId: Scalars['String'];
  clientAddress?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  creditLimit?: Maybe<Scalars['Decimal']>;
  id: Scalars['String'];
  isActive: Scalars['Boolean'];
  multiSigAddress?: Maybe<Scalars['String']>;
};

export type WalletBalance = {
  __typename?: 'WalletBalance';
  availableCredit?: Maybe<Scalars['Decimal']>;
  balance?: Maybe<Scalars['Decimal']>;
  creditLimit?: Maybe<Scalars['Decimal']>;
};

export type WalletWhereInput = {
  AND?: Maybe<Array<Maybe<WalletWhereInput>>>;
  NOT?: Maybe<Array<Maybe<WalletWhereInput>>>;
  OR?: Maybe<Array<Maybe<WalletWhereInput>>>;
  businessId?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  multiSigAddress?: Maybe<StringFilter>;
};

export type BusinessFieldsFragment = { __typename?: 'Business', id: string, name: string, tagline?: Maybe<string>, description?: Maybe<string>, address?: Maybe<string>, logoUrl?: Maybe<string>, coverUrl?: Maybe<string>, externalLinks?: Maybe<Array<Maybe<string>>>, phoneNumber?: Maybe<string>, approved?: Maybe<boolean>, handle: string, createdAt?: Maybe<any>, email?: Maybe<string>, ownerId: string, owner?: Maybe<{ __typename?: 'User', email: string }>, wallet?: Maybe<{ __typename?: 'Wallet', id: string, isActive: boolean, multiSigAddress?: Maybe<string>, creditLimit?: Maybe<any> }>, listings?: Maybe<Array<Maybe<{ __typename?: 'Listing', id: string }>>> };

export type FindFirstBusinessQueryVariables = Exact<{
  where: BusinessWhereInput;
}>;


export type FindFirstBusinessQuery = { __typename?: 'Query', findFirstBusiness?: Maybe<(
    { __typename?: 'Business' }
    & BusinessFieldsFragment
  )> };

export type FindBusinessByHandleQueryVariables = Exact<{
  handle: Scalars['String'];
}>;


export type FindBusinessByHandleQuery = { __typename?: 'Query', findOneBusinessByHandle?: Maybe<(
    { __typename?: 'Business' }
    & BusinessFieldsFragment
  )> };

export type FindBusinessesForPortfolioQueryVariables = Exact<{
  where?: Maybe<BusinessWhereInput>;
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
}>;


export type FindBusinessesForPortfolioQuery = { __typename?: 'Query', findManyBusiness?: Maybe<{ __typename?: 'ManyBusiness', businesses?: Maybe<Array<Maybe<{ __typename?: 'Business', id: string, name: string, handle: string, logoUrl?: Maybe<string>, wallet?: Maybe<{ __typename?: 'Wallet', multiSigAddress?: Maybe<string> }> }>>> }> };

export type TransactionFieldsFragment = { __typename?: 'Transaction', id: string, createdAt?: Maybe<any>, amount: any, note?: Maybe<string>, txHash?: Maybe<string>, status?: Maybe<TransactionStatus> };

export type FindTransactionByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type FindTransactionByIdQuery = { __typename?: 'Query', findTransactionById?: Maybe<(
    { __typename?: 'Transaction', sender?: Maybe<{ __typename?: 'Wallet', id: string, multiSigAddress?: Maybe<string>, business?: Maybe<{ __typename?: 'Business', id: string, name: string, handle: string, logoUrl?: Maybe<string> }> }>, recipient?: Maybe<{ __typename?: 'Wallet', id: string, multiSigAddress?: Maybe<string>, business?: Maybe<{ __typename?: 'Business', id: string, name: string, handle: string, logoUrl?: Maybe<string> }> }> }
    & TransactionFieldsFragment
  )> };

export type FindManyTransactionsQueryVariables = Exact<{
  where?: Maybe<TransactionWhereInput>;
  orderBy?: Maybe<TransactionOrderByInput>;
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
}>;


export type FindManyTransactionsQuery = { __typename?: 'Query', findManyTransactions?: Maybe<{ __typename?: 'ManyTransaction', total?: Maybe<number>, transactions?: Maybe<Array<Maybe<(
      { __typename?: 'Transaction', sender?: Maybe<{ __typename?: 'Wallet', id: string, business?: Maybe<{ __typename?: 'Business', id: string, name: string, handle: string, logoUrl?: Maybe<string> }> }>, recipient?: Maybe<{ __typename?: 'Wallet', id: string, business?: Maybe<{ __typename?: 'Business', id: string, name: string, handle: string, logoUrl?: Maybe<string> }> }> }
      & TransactionFieldsFragment
    )>>> }> };

export type BusinessTransactionStatsQueryVariables = Exact<{
  businessId: Scalars['ID'];
}>;


export type BusinessTransactionStatsQuery = { __typename?: 'Query', businessTransactionStats?: Maybe<{ __typename?: 'TransactionStatsOutput', volume: any, count: number }> };

export type WalletFieldsFragment = { __typename?: 'Wallet', id: string, isActive: boolean, multiSigAddress?: Maybe<string>, creditLimit?: Maybe<any> };

export type WalletBalanceQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type WalletBalanceQuery = { __typename?: 'Query', walletBalance: { __typename?: 'WalletBalance', availableCredit?: Maybe<any>, balance?: Maybe<any>, creditLimit?: Maybe<any> } };

export const BusinessFieldsFragmentDoc = gql`
    fragment BusinessFields on Business {
  id
  name
  tagline
  description
  address
  logoUrl
  coverUrl
  externalLinks
  phoneNumber
  approved
  handle
  createdAt
  email
  ownerId
  owner {
    email
  }
  wallet {
    id
    isActive
    multiSigAddress
    creditLimit
  }
  listings {
    id
  }
}
    `;
export const TransactionFieldsFragmentDoc = gql`
    fragment TransactionFields on Transaction {
  id
  createdAt
  amount
  note
  txHash
  status
}
    `;
export const WalletFieldsFragmentDoc = gql`
    fragment WalletFields on Wallet {
  id
  isActive
  multiSigAddress
  creditLimit
}
    `;
export const FindFirstBusinessDocument = gql`
    query findFirstBusiness($where: BusinessWhereInput!) {
  findFirstBusiness(where: $where) {
    ...BusinessFields
  }
}
    ${BusinessFieldsFragmentDoc}`;

/**
 * __useFindFirstBusinessQuery__
 *
 * To run a query within a React component, call `useFindFirstBusinessQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindFirstBusinessQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindFirstBusinessQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFindFirstBusinessQuery(baseOptions: Apollo.QueryHookOptions<FindFirstBusinessQuery, FindFirstBusinessQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindFirstBusinessQuery, FindFirstBusinessQueryVariables>(FindFirstBusinessDocument, options);
      }
export function useFindFirstBusinessLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindFirstBusinessQuery, FindFirstBusinessQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindFirstBusinessQuery, FindFirstBusinessQueryVariables>(FindFirstBusinessDocument, options);
        }
export type FindFirstBusinessQueryHookResult = ReturnType<typeof useFindFirstBusinessQuery>;
export type FindFirstBusinessLazyQueryHookResult = ReturnType<typeof useFindFirstBusinessLazyQuery>;
export type FindFirstBusinessQueryResult = Apollo.QueryResult<FindFirstBusinessQuery, FindFirstBusinessQueryVariables>;
export const FindBusinessByHandleDocument = gql`
    query findBusinessByHandle($handle: String!) {
  findOneBusinessByHandle(handle: $handle) {
    ...BusinessFields
  }
}
    ${BusinessFieldsFragmentDoc}`;

/**
 * __useFindBusinessByHandleQuery__
 *
 * To run a query within a React component, call `useFindBusinessByHandleQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindBusinessByHandleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindBusinessByHandleQuery({
 *   variables: {
 *      handle: // value for 'handle'
 *   },
 * });
 */
export function useFindBusinessByHandleQuery(baseOptions: Apollo.QueryHookOptions<FindBusinessByHandleQuery, FindBusinessByHandleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindBusinessByHandleQuery, FindBusinessByHandleQueryVariables>(FindBusinessByHandleDocument, options);
      }
export function useFindBusinessByHandleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindBusinessByHandleQuery, FindBusinessByHandleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindBusinessByHandleQuery, FindBusinessByHandleQueryVariables>(FindBusinessByHandleDocument, options);
        }
export type FindBusinessByHandleQueryHookResult = ReturnType<typeof useFindBusinessByHandleQuery>;
export type FindBusinessByHandleLazyQueryHookResult = ReturnType<typeof useFindBusinessByHandleLazyQuery>;
export type FindBusinessByHandleQueryResult = Apollo.QueryResult<FindBusinessByHandleQuery, FindBusinessByHandleQueryVariables>;
export const FindBusinessesForPortfolioDocument = gql`
    query findBusinessesForPortfolio($where: BusinessWhereInput, $page: Int, $limit: Int) {
  findManyBusiness(where: $where, page: $page, limit: $limit) {
    businesses {
      id
      name
      handle
      logoUrl
      wallet {
        multiSigAddress
      }
    }
  }
}
    `;

/**
 * __useFindBusinessesForPortfolioQuery__
 *
 * To run a query within a React component, call `useFindBusinessesForPortfolioQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindBusinessesForPortfolioQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindBusinessesForPortfolioQuery({
 *   variables: {
 *      where: // value for 'where'
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useFindBusinessesForPortfolioQuery(baseOptions?: Apollo.QueryHookOptions<FindBusinessesForPortfolioQuery, FindBusinessesForPortfolioQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindBusinessesForPortfolioQuery, FindBusinessesForPortfolioQueryVariables>(FindBusinessesForPortfolioDocument, options);
      }
export function useFindBusinessesForPortfolioLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindBusinessesForPortfolioQuery, FindBusinessesForPortfolioQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindBusinessesForPortfolioQuery, FindBusinessesForPortfolioQueryVariables>(FindBusinessesForPortfolioDocument, options);
        }
export type FindBusinessesForPortfolioQueryHookResult = ReturnType<typeof useFindBusinessesForPortfolioQuery>;
export type FindBusinessesForPortfolioLazyQueryHookResult = ReturnType<typeof useFindBusinessesForPortfolioLazyQuery>;
export type FindBusinessesForPortfolioQueryResult = Apollo.QueryResult<FindBusinessesForPortfolioQuery, FindBusinessesForPortfolioQueryVariables>;
export const FindTransactionByIdDocument = gql`
    query findTransactionById($id: ID!) {
  findTransactionById(id: $id) {
    ...TransactionFields
    sender {
      id
      multiSigAddress
      business {
        id
        name
        handle
        logoUrl
      }
    }
    recipient {
      id
      multiSigAddress
      business {
        id
        name
        handle
        logoUrl
      }
    }
  }
}
    ${TransactionFieldsFragmentDoc}`;

/**
 * __useFindTransactionByIdQuery__
 *
 * To run a query within a React component, call `useFindTransactionByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindTransactionByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindTransactionByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindTransactionByIdQuery(baseOptions: Apollo.QueryHookOptions<FindTransactionByIdQuery, FindTransactionByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindTransactionByIdQuery, FindTransactionByIdQueryVariables>(FindTransactionByIdDocument, options);
      }
export function useFindTransactionByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindTransactionByIdQuery, FindTransactionByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindTransactionByIdQuery, FindTransactionByIdQueryVariables>(FindTransactionByIdDocument, options);
        }
export type FindTransactionByIdQueryHookResult = ReturnType<typeof useFindTransactionByIdQuery>;
export type FindTransactionByIdLazyQueryHookResult = ReturnType<typeof useFindTransactionByIdLazyQuery>;
export type FindTransactionByIdQueryResult = Apollo.QueryResult<FindTransactionByIdQuery, FindTransactionByIdQueryVariables>;
export const FindManyTransactionsDocument = gql`
    query findManyTransactions($where: TransactionWhereInput, $orderBy: TransactionOrderByInput, $limit: Int, $page: Int) {
  findManyTransactions(where: $where, orderBy: $orderBy, limit: $limit, page: $page) {
    transactions {
      ...TransactionFields
      sender {
        id
        business {
          id
          name
          handle
          logoUrl
        }
      }
      recipient {
        id
        business {
          id
          name
          handle
          logoUrl
        }
      }
    }
    total
  }
}
    ${TransactionFieldsFragmentDoc}`;

/**
 * __useFindManyTransactionsQuery__
 *
 * To run a query within a React component, call `useFindManyTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyTransactionsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      limit: // value for 'limit'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useFindManyTransactionsQuery(baseOptions?: Apollo.QueryHookOptions<FindManyTransactionsQuery, FindManyTransactionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindManyTransactionsQuery, FindManyTransactionsQueryVariables>(FindManyTransactionsDocument, options);
      }
export function useFindManyTransactionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindManyTransactionsQuery, FindManyTransactionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindManyTransactionsQuery, FindManyTransactionsQueryVariables>(FindManyTransactionsDocument, options);
        }
export type FindManyTransactionsQueryHookResult = ReturnType<typeof useFindManyTransactionsQuery>;
export type FindManyTransactionsLazyQueryHookResult = ReturnType<typeof useFindManyTransactionsLazyQuery>;
export type FindManyTransactionsQueryResult = Apollo.QueryResult<FindManyTransactionsQuery, FindManyTransactionsQueryVariables>;
export const BusinessTransactionStatsDocument = gql`
    query businessTransactionStats($businessId: ID!) {
  businessTransactionStats(businessId: $businessId) {
    volume
    count
  }
}
    `;

/**
 * __useBusinessTransactionStatsQuery__
 *
 * To run a query within a React component, call `useBusinessTransactionStatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBusinessTransactionStatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBusinessTransactionStatsQuery({
 *   variables: {
 *      businessId: // value for 'businessId'
 *   },
 * });
 */
export function useBusinessTransactionStatsQuery(baseOptions: Apollo.QueryHookOptions<BusinessTransactionStatsQuery, BusinessTransactionStatsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BusinessTransactionStatsQuery, BusinessTransactionStatsQueryVariables>(BusinessTransactionStatsDocument, options);
      }
export function useBusinessTransactionStatsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BusinessTransactionStatsQuery, BusinessTransactionStatsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BusinessTransactionStatsQuery, BusinessTransactionStatsQueryVariables>(BusinessTransactionStatsDocument, options);
        }
export type BusinessTransactionStatsQueryHookResult = ReturnType<typeof useBusinessTransactionStatsQuery>;
export type BusinessTransactionStatsLazyQueryHookResult = ReturnType<typeof useBusinessTransactionStatsLazyQuery>;
export type BusinessTransactionStatsQueryResult = Apollo.QueryResult<BusinessTransactionStatsQuery, BusinessTransactionStatsQueryVariables>;
export const WalletBalanceDocument = gql`
    query walletBalance($id: ID!) {
  walletBalance(id: $id) {
    availableCredit
    balance
    creditLimit
  }
}
    `;

/**
 * __useWalletBalanceQuery__
 *
 * To run a query within a React component, call `useWalletBalanceQuery` and pass it any options that fit your needs.
 * When your component renders, `useWalletBalanceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWalletBalanceQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useWalletBalanceQuery(baseOptions: Apollo.QueryHookOptions<WalletBalanceQuery, WalletBalanceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WalletBalanceQuery, WalletBalanceQueryVariables>(WalletBalanceDocument, options);
      }
export function useWalletBalanceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WalletBalanceQuery, WalletBalanceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WalletBalanceQuery, WalletBalanceQueryVariables>(WalletBalanceDocument, options);
        }
export type WalletBalanceQueryHookResult = ReturnType<typeof useWalletBalanceQuery>;
export type WalletBalanceLazyQueryHookResult = ReturnType<typeof useWalletBalanceLazyQuery>;
export type WalletBalanceQueryResult = Apollo.QueryResult<WalletBalanceQuery, WalletBalanceQueryVariables>;