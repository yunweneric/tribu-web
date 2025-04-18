import { FormFields } from '../enum';
import { BaseInterface } from './base_interface';
export interface TextInputInterface extends BaseInterface {
  type: FormFields.INPUT;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  value?: string | number | readonly string[] | undefined | number;
  onChange?:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
}
