import { BudgetStatus } from '../enums/instanvi.enum';

export interface IBudgetDto {
  budgetId: string;
  totalAmount: number;
  currency: string;
  campaignId: string;
  percentageTotal: number;
}

export interface IUpdateBudgetDto extends Partial<IBudgetDto> {
  status?: BudgetStatus;
}
