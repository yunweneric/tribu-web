import { ConditionLinkEnum } from '../enum';
import { BranchingBlockInterface } from './branching.interface';

export interface BaseInterface {
  id: string;
  name: string;
  index: number;
  label: string;

  //   *Optional Fields
  value?: any;
  isPreview?: boolean;
  required?: boolean;
  placeholder?: string;
  activeSectionIndex: number;
  branching?: BranchingBlockInterface;
  conditionLink?: ConditionLinkEnum.OR | ConditionLinkEnum.AND;
  previousItemId?: string;
  icon?: string | undefined;
}
