import { FormFields } from '../enum';
import { BaseInterface } from './base_interface';
export interface TextAreaInterface extends BaseInterface {
  type: FormFields.TEXTAREA | FormFields.PARAGRAPH;
  maxLength: number;
  value?: string | number | readonly string[] | undefined | number;
}
