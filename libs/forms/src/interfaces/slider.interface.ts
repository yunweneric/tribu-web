import { FormFields } from '../enum';

import { BranchingBlockInterface } from './index';
import { ConditionLinkEnum } from '../enum/condition_actions';
export interface SliderInterface {
  type: FormFields.SLIDER;
  name: string;
  label: string;
  activeSectionIndex: number;
  icon: string;
  index: number;
  id: string;
  value: number;

  //*Optional Fields
  required?: boolean;
  placeholder?: string;
  steps?: number | undefined;
  max?: number | undefined;
  min?: number | undefined;
  branching?: BranchingBlockInterface;
  conditionLink?: ConditionLinkEnum.OR | ConditionLinkEnum.AND;
  previousItemId?: string;
  isPreview?: boolean;
}
