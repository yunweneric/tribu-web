import {
  ActionActions,
  ConditionActions,
  actionType,
  conditionTypes,
} from '../enum/condition_actions';
import { ActionInterface, ConditionInterface } from '..//interfaces';
import { AllFormInterfacesType } from '../types/all_form_types';

interface UpdateFormFieldWithConditionsType {
  condition_or_action: ConditionInterface | ActionInterface;
  newValue?: string;
  newAction?: conditionTypes | actionType;
  formItem: AllFormInterfacesType;
}

const updateFormFieldWithConditions = ({
  condition_or_action,
  newValue,
  formItem,
  newAction,
}: UpdateFormFieldWithConditionsType): AllFormInterfacesType | undefined => {
  if (!formItem.branching) {
    return;
  }
  const currentConditions = formItem.branching.condition.filter(
    (item) => item.id == condition_or_action?.id
  );

  if (currentConditions.length == 0) {
    return;
  }

  const currentCondition = currentConditions[0];

  const newCondition: ConditionInterface = {
    ...currentCondition,
    action:
      newAction == null
        ? currentCondition.action
        : (newAction as conditionTypes),
    value: newValue == null ? currentCondition.value : newValue,
  };

  const updateConditions: ConditionInterface[] =
    formItem.branching.condition.map((item) => {
      if (item.id === currentCondition?.id) {
        return newCondition;
      }
      return item;
    });

  const newFormItem: AllFormInterfacesType = {
    ...formItem,
    branching: {
      ...formItem.branching,
      condition: updateConditions,
    },
  };

  return newFormItem;
};

const convertActionStringToEnum = (value: string | null): actionType | null => {
  if (value == null) return null;

  const strippedValue = value.split(' ').join().toLowerCase();
  switch (strippedValue) {
    case ActionActions.SKIP.split(' ').join().toLowerCase():
      return ActionActions.SKIP;

    case ActionActions.CANCEL.split(' ').join().toLowerCase():
      return ActionActions.CANCEL;

    default:
      return null;
  }
};
const convertConditionStringToEnum = (
  value: string | null
): conditionTypes | null => {
  if (value == null) return null;

  const strippedValue = value.split(' ').join().toLowerCase();
  switch (strippedValue) {
    case ConditionActions.EQUALTO.split(' ').join().toLowerCase():
      return ConditionActions.EQUALTO;

    case ConditionActions.NOTEQUALTO.split(' ').join().toLowerCase():
      return ConditionActions.NOTEQUALTO;

    case ConditionActions.GREATERTHAN.split(' ').join().toLowerCase():
      return ConditionActions.GREATERTHAN;

    case ConditionActions.LESSTHAN.split(' ').join().toLowerCase():
      return ConditionActions.LESSTHAN;

    case ConditionActions.GREATERTHANEQUALTO.split(' ').join().toLowerCase():
      return ConditionActions.GREATERTHANEQUALTO;

    case ConditionActions.LESSTHANEQUALTO.split(' ').join().toLowerCase():
      return ConditionActions.LESSTHANEQUALTO;

    default:
      return null;
  }
};

export {
  updateFormFieldWithConditions,
  convertConditionStringToEnum,
  convertActionStringToEnum,
};
