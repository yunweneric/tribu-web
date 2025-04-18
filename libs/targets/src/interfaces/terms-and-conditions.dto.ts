import { MaterialType } from '../enums/instanvi.enum';

export interface TermsAndConditionsDto {
  termsId?: string;
  materialType?: MaterialType;
  fileFormat?: string;
  fileSizeLimit?: number;
  durationLimit?: number;
  submissionDeadLine: Date;
}

export interface UpdateTermsAndConditionsDto
  extends Partial<TermsAndConditionsDto> {}
