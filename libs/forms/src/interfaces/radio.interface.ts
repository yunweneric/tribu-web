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
  isPreview?: boolean;
  label: string;
  placeholder?: string;
  required?: boolean;
  icon: string;
  index: number;
  activeSectionIndex: number;
  id: string;
  value?: number | string | undefined;
  elements: RadioItemInterface[];
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
