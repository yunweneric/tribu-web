import { VendorStatus } from '../enums/instanvi.enum';

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}

export interface VendorDto {
  vendorId?: string;
  firstName: string;
  lastName: string;
  contactInfo: ContactInfo;
  availableChannelIds?: string[];
  programIds?: string[];
  rating: number;
}

export interface UpdateVendorDto extends Partial<VendorDto> {
  status?: VendorStatus;
}
