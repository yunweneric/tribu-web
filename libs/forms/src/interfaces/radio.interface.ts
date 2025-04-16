import { FormFields } from '../enum';

import { BranchingBlockInterface } from './index';
import { ConditionLinkEnum } from '../enum/condition_actions';
import { SelectChangeEvent } from '@mui/material';
interface RadioItemInterface {
  value: string;
  label: string;
}
export interface RadioInterface {
  type: FormFields.RADIO;
  name: string;
  label: string;
  index: number;
  id: string;
  activeSectionIndex: number;
  elements: RadioItemInterface[];

  //*Optional Fields
  icon?: string;
  isPreview?: boolean;
  required?: boolean;
  placeholder?: string;
  value?: number | string | undefined;
  branching?: BranchingBlockInterface;
  conditionLink?: ConditionLinkEnum.OR | ConditionLinkEnum.AND;
  previousItemId?: string;
  onChange?:
    | ((
        event: SelectChangeEvent<string | number | readonly string[]>,
        child: React.ReactNode
      ) => void)
    | undefined;
}
