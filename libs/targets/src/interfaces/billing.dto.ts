import { PaymentMethod } from '../enums/instanvi.enum';

export interface BillingDto {
  insertionOrder: string; // Assuming InsertionOrderDto is represented by a string ID
  invoiceNumber: string;
  totalAmount: number;
  amountPaid: number;
  paymentDueDate: Date;
  vendorId: string;
  paymentMethod?: PaymentMethod;
  taxAmount: number;
  discount: number;
  penalty?: number;
}
