import { Dayjs } from 'dayjs';
import { FormFields } from '../enum';
import { BaseInterface } from './base_interface';

export interface TextDateInterface extends BaseInterface {
  type: FormFields.DATE_TIME;
  minDate?: Dayjs;
  maxDate?: Dayjs;
  value?: Date | undefined;
  onChange?: ((value: Date) => Date) | undefined;
}
