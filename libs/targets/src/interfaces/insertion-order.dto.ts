export interface IInsertionOrder {
  campaignId?: string;
  vendorId?: string;
  budgetId?: string;
  programId?: string;
  totalCost: number;
  flightStartDate: Date;
  flightEndDate: Date;
  purchaseOrderNumber: number;
  percentageOfTotalBudget: number;
}
