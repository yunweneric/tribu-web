import { FormFields } from '../enum';
import { BaseInterface } from './base_interface';
export interface NumberInputInterface extends BaseInterface {
  type: FormFields.NUMBER_INPUT;
  value?: number | undefined;
  onChange?:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
}
