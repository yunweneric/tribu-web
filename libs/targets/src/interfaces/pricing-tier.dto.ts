export interface DayParting {
  morning: number;
  afternoon: number;
  evening: number;
}

export interface PricingTierDto {
  programId: string;
  minQuantity: number;
  maxQuantity: number;
  unitPrice: number;
  discountRate: number;
  dayParting: DayParting;
}

export type UpdatePricingTierDto = Partial<PricingTierDto>;
