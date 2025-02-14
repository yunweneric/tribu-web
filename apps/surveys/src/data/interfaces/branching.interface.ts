import { actionType, conditionTypes } from '../enum/condition_actions';

export interface ConditionInterface {
  id: string;
  action: conditionTypes;
  value?: string | null;
}
export interface ActionInterface {
  id: string;
  action: actionType;
  value: string | null;
}

export interface BranchingBlockInterface {
  id: string;
  condition: ConditionInterface[];
  action: ActionInterface;
}
