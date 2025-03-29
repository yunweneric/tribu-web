import { FormFields } from '../enum';
import { ConditionLinkEnum } from '../enum/condition_actions';
import { BranchingBlockInterface } from './branching.interface';
export interface DividerInterface {
  type: FormFields.DIVIDER;
  icon: string;
  isPreview?: boolean;
  label: string;
  id: string;
  name: string;
  index: number;
  activeSectionIndex: number;
  required?: boolean;
  branching?: BranchingBlockInterface;

  conditionLink?: ConditionLinkEnum.OR | ConditionLinkEnum.AND;
  previousItemId?: string;
}
