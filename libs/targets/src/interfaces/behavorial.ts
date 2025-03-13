export interface Behavioral {
  PurchaseHistory: string | object; // JSON
  PastPurchases: string | object; // JSON
  WebsiteVisits: string; // URL
  TimeSpentOnWebsite: number;
  AdClicks: number;
  AppUsage: string | object; // JSON
  SubscriptionStatus: string; // Enum
  SearchQueries: string;
  ShoppingCartAbandonment: boolean;
  RepeatPurchases: number;
  PurchaseFrequency: number;
  ProductInteraction: string; // Enum
  AdvertisingExposure: string; // Enum
  ContentConsumption: string | object; // JSON
  EngagementDuration: number;
  BrowsingPatterns: string | object; // JSON
  SocialMediaInteraction: string; // Enum
}
