import { Dayjs } from 'dayjs';
import { FormFields } from '../enum';
import { BranchingBlockInterface } from './index';
import { ConditionLinkEnum } from '../enum/condition_actions';

export interface TextDateInterface {
  type: FormFields.DATE_TIME;
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  icon: string;
  index: number;
  minDate?: Dayjs;
  maxDate?: Dayjs;
  id: string;
  isPreview?: boolean;
  activeSectionIndex: number;
  value?: Date | undefined;
  branching?: BranchingBlockInterface;
  conditionLink?: ConditionLinkEnum.OR | ConditionLinkEnum.AND;
  previousItemId?: string;
  onChange?: ((value: Date) => Date) | undefined;
}
