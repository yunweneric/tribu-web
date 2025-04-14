import { FormFields } from '../enum';

import { BranchingBlockInterface } from './index';
import { ConditionLinkEnum } from '../enum/condition_actions';
import { extend } from 'dayjs';
export interface TextInputInterface {
  type: FormFields.INPUT;
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  icon: string;
  index: number;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  id: string;
  activeSectionIndex: number;
  isPreview?: boolean;
  value?: string | number | readonly string[] | undefined | number;
  branching?: BranchingBlockInterface;
  conditionLink?: ConditionLinkEnum.OR | ConditionLinkEnum.AND;
  previousItemId?: string;
  onChange?:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
}
