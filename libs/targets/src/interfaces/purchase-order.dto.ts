import { PurchaseOrderStatus } from '../enums/instanvi.enum';
import { InsertionOrderDto } from './media-plan.dto';

export interface PurchaseOrderDto {
  purchaseOrderId?: string;
  campaignId: string;
  vendorId: string;
  items?: InsertionOrderDto[];
  totalCost: number;
  issueDate: Date;
  paymentTerms: string;
}

export interface UpdatePurchaseOrderDto extends Partial<PurchaseOrderDto> {
  status?: PurchaseOrderStatus;
}
