export interface TransactionData {
  TransactionAmount: number;
  TransactionCurrency: string; // Enum
  TransactionDate: string; // Date/Time
  PaymentMethod: string; // Enum
  PurchaseLocation: string | object; // Location
  PurchaseCategory: string; // Enum
  LoyaltyCardUsage: boolean;
  DiscountApplied: boolean;
  ReturnFrequency: number;
  AverageOrderValue: number;
  CartSize: number;
  RefundsProcessed: boolean;
  PromotionalCodeUsage: boolean;
  TransactionID: string; // PII
  Vendor: string;
  FrequencyOfPurchases: number;
  RecurringPurchases: boolean;
}
