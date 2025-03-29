import { FormFields } from '../enum';

import { BranchingBlockInterface } from './index';
import { ConditionLinkEnum } from '../enum/condition_actions';
export interface FormItemElementInterface {
  value: string;
  label: string;
}
export interface CheckboxInterface {
  type: FormFields.CHECKBOX;
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  index: number;
  icon?: string | undefined;
  activeSectionIndex: number;
  isPreview?: boolean;
  value: readonly number[] | readonly string[] | undefined;
  elements: FormItemElementInterface[];
  selectedElements: FormItemElementInterface[];
  branching?: BranchingBlockInterface;
  conditionLink?: ConditionLinkEnum.OR | ConditionLinkEnum.AND;
  previousItemId?: string;
}
