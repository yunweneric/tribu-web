import { FormFields } from '../enum';

import { BranchingBlockInterface } from './index';
import { ConditionLinkEnum } from '../enum/condition_actions';
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
  value: number;
  elements: RadioItemInterface[];
  branching?: BranchingBlockInterface;
  conditionLink?: ConditionLinkEnum.OR | ConditionLinkEnum.AND;
  previousItemId?: string;
}
