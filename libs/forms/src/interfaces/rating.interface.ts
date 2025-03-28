import { FormFields } from "../enum";

import { BranchingBlockInterface } from "./index";
import { ConditionLinkEnum } from "../enum/condition_actions";
export interface RatingInterface {
  type: FormFields.RATING;
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  icon: string;
  index: number;
  max?: number;
  id: string;
  activeSectionIndex: number;
  value: number;

  branching?: BranchingBlockInterface;

  conditionLink?: ConditionLinkEnum.OR | ConditionLinkEnum.AND;
  previousItemId?: string;
  isPreview?: boolean;
}
