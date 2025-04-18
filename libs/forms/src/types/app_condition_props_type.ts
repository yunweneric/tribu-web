import { ActionInterface, ConditionInterface } from '../interfaces';
import { AllFormInterfacesType } from './all_form_types';

export type AppConditionProps = {
  formItem: AllFormInterfacesType;
  equality_options: string[];
  condition_or_action?: ConditionInterface | ActionInterface;
};
