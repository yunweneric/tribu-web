import { SelectChangeEvent } from '@mui/material';
import { FormFields } from '../enum';
import { BaseInterface } from './base_interface';
export interface FormItemElementInterface {
  value: string;
  label: string;
}
export interface CheckboxInterface extends BaseInterface {
  type: FormFields.CHECKBOX;
  // value: readonly number[] | readonly string[] | undefined;
  // elements: FormItemElementInterface[];
  // value: FormItemElementInterface[];

  elements: number[] | string[] | undefined;
  value: number[] | string[] | undefined;
  onChange?: (
    event: SelectChangeEvent<readonly string[] | readonly number[] | undefined>
  ) => void;
}
