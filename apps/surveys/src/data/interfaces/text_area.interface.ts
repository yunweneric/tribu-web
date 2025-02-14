import { FormFields } from "../enum";
import { BranchingBlockInterface } from "./index";
import { ConditionLinkEnum } from "../enum/condition_actions";
export interface TextAreaInterface {
  type: FormFields.TEXTAREA | FormFields.PARAGRAPH;
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  icon: string;
  index: number;
  activeSectionIndex: number;
  maxLength: number;
  id: string;
  value?: string | number | readonly string[] | undefined | number;
  branching?: BranchingBlockInterface;

  conditionLink?: ConditionLinkEnum.OR | ConditionLinkEnum.AND;
  previousItemId?: string;
  isPreview?: boolean;
}
