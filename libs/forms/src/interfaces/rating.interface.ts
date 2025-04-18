import { FormFields } from '../enum';
import { BaseInterface } from './base_interface';
export interface RatingInterface extends BaseInterface {
  type: FormFields.RATING;
  max?: number;
  value: number;
}
