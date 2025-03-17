import { AdCreativeStatus, AdCreativeType } from '../enums/instanvi.enum';

export interface IAdCreative {
  creativeId?: string;
  programId?: string;
  creativeType?: AdCreativeType;
  fileFormat: string;
  fileSize?: number;
  duration?: number;
  submissionDate: Date;
}

export interface IUpdateAdCreative extends Partial<IAdCreative> {
  status?: AdCreativeStatus;
}
