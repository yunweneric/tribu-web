export interface InsertionOrderDto {
  insertionOrderId: string;
  campaignId: string;
  vendorId: string;
  budgetId: string;
  programId: string;
  totalCost: number;
  flightStartDate: Date;
  flightEndDate: Date;
  purchaseOrderNumber: string;
  percentageOfTotalBudget: number;
}

export interface PredictedOutcome {
  conversions: {
    daily: number;
    weekly: number;
    monthly: number;
  };
  bounceRate: {
    daily: number;
    weekly: number;
    monthly: number;
  };
  averageOrderValue: {
    daily: number;
    weekly: number;
    monthly: number;
  };
}

export interface MediaPlanDto {
  mediaPlanId?: string;
  campaignId?: string;
  channelIds?: string[];
  startDate: Date;
  endDate: Date;
  placements?: InsertionOrderDto[];
  predictedOutCome: PredictedOutcome;
}

export interface UpdateMediaPlanDto extends Partial<MediaPlanDto> {}
