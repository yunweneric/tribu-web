import { FormFields } from '../enum';
import { ConditionLinkEnum } from '../enum/condition_actions';
import { BaseInterface } from './base_interface';
import { BranchingBlockInterface } from './branching.interface';

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
export interface RankingInterface extends BaseInterface {
  type: FormFields.RANKING;
  min?: number;
  max?: number;
  isPreview?: boolean;
  steps: number[];
  stepLabels: StepLabelItem[];
}
