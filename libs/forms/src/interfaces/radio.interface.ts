import { FormFields } from '../enum';

import { BranchingBlockInterface } from './index';
import { ConditionLinkEnum } from '../enum/condition_actions';
import { SelectChangeEvent } from '@mui/material';
import { BaseInterface } from './base_interface';
// interface RadioItemInterface {
//   value: string;
//   label: string;
// }
export interface RadioInterface extends BaseInterface {
  type: FormFields.RADIO;
  // elements: RadioItemInterface[];
  elements: number[] | string[] | undefined;

  //*Optional Fields
  value?: number | string | undefined;
  onChange?:
    | ((
        event: SelectChangeEvent<string | number | readonly string[]>,
        child: React.ReactNode
      ) => void)
    | undefined;
}
