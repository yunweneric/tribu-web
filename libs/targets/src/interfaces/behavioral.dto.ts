import {
  AdvertisingExposure,
  SocialMediaInteraction,
  SubscriptionStatus,
} from '../enums/target.num';

export interface IBehavioral {
  purchaseHistory?: any;
  pastPurchases?: any;
  websiteVisits?: string;
  timeSpentOnWebsite?: number;
  adClicks?: number;
  appUsage?: any;
  subscriptionStatus?: SubscriptionStatus;
  searchQuery?: string;
  shoppingCartAbandonment?: boolean;
  repeatPurchases?: number;
  purchaseFrequency?: number;
  productInteraction?: string;
  advertisingExposure?: AdvertisingExposure;
  contentConsumption?: any;
  engagementDuration?: number;
  browsingPatterns?: any;
  socialMediaInteraction?: SocialMediaInteraction;
}
