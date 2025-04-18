import { PaymentMethod } from '../enums/instanvi.enum';
import { Currencies } from '../enums/target.num';
export interface TransactionDataDto {
  transactionAmount?: number; // Decimal, Positive, valid currency format
  transactionCurrency?: Currencies; // Enum, Currencies List
  transactionDate?: Date; // Date/Time, Valid date-time format
  paymentMethod?: PaymentMethod; // Enum, Payment Methods
  purchaseLocation?: string; // String/Location, Valid format, geolocation
  purchaseCategory?: 'IAB'; // Enum, IAB
  loyaltyCardUsage?: boolean; // Boolean, Loyalty Card Usage
  discountApplied?: boolean; // Boolean, Discount Applied
  returnFrequency?: number; // Integer, Non-negative
  averageOrderValue?: number; // Decimal, Positive, valid currency format
  cartSize?: number; // Integer, Non-negative
  refundsProcessed?: boolean; // Boolean, Refunds Processed
  promotionalCodeUsage?: boolean; // Boolean, Promotional Code Usage
  transactionId?: string; // String, Unique identifier format (PII)
  vendor?: string; // String, Max length
  frequencyOfPurchases?: number; // Integer, Non-negative
  recurringPurchases?: boolean; // Boolean, Recurring Purchases
}
