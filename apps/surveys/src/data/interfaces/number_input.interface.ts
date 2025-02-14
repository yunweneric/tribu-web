import { FormFields } from "../enum";

import { BranchingBlockInterface } from "./index";
import { ConditionLinkEnum } from "../enum/condition_actions";
export interface NumberInputInterface {
  type: FormFields.NUMBER_INPUT;
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  icon: string;
  index: number;
  min?: number;
  max?: number;
  activeSectionIndex: number;
  id: string;
  value?: number | readonly number[] | undefined;

  branching?: BranchingBlockInterface;

  conditionLink?: ConditionLinkEnum.OR | ConditionLinkEnum.AND;
  previousItemId?: string;
  isPreview?: boolean;
}
