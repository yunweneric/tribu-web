import { FormFields } from "../enum";
import { ConditionLinkEnum } from "../enum/condition_actions";
import { BranchingBlockInterface } from "./branching.interface";

export interface RankingStepInterface {
  value: number;
  label?: string;
}

export interface StepLabelItem {
  id: string;
  from: number;
  to: number;
  name: string | null;
}
export interface RankingInterface {
  type: FormFields.RANKING;
  icon: string;
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  index: number;
  id: string;
  activeSectionIndex: number;
  value?: number;
  min?: number;
  max?: number;
  branching?: BranchingBlockInterface;
  conditionLink?: ConditionLinkEnum.OR | ConditionLinkEnum.AND;
  previousItemId?: string;
  isPreview?: boolean;
  steps: number[];
  stepLabels: StepLabelItem[];
}
