import { UseFormWatch } from 'react-hook-form';
import { ConditionActions, ConditionLinkEnum } from '../enum/condition_actions';
import { AllFormInterfacesType } from '../types/all_form_types';
import { generateFormName } from './formatters';

const evaluateConditions = (
  data: AllFormInterfacesType,
  value: string | number
): boolean => {
  if (!data.branching) return false;
  const conditions = data.branching.condition;
  if (conditions.length == 0) return false;
  // Iterate through each condition in the conditional array
  for (const condition of conditions) {
    // const value = data[condition.value]; // Assuming 'name' as the property to compare

    // Evaluate the condition based on its action
    let conditionResult: boolean;
    switch (condition.action) {
      case ConditionActions.EQUALTO:
        conditionResult = value == condition.value;
        break;
      case ConditionActions.NOTEQUALTO:
        conditionResult = value != condition.value;
        break;
      case ConditionActions.GREATERTHAN:
        conditionResult = value > condition.value!;
        break;
      case ConditionActions.GREATERTHANEQUALTO:
        conditionResult = value >= condition.value!;
        break;
      case ConditionActions.LESSTHAN:
        conditionResult = value < condition.value!;
        break;
      case ConditionActions.LESSTHANEQUALTO:
        conditionResult = value <= condition.value!;
        break;
      // Add more cases for other actions if needed
      default:
        conditionResult = false; // Unsupported action defaults to false
    }

    if (data?.conditionLink == null) {
      return conditionResult;
    }
    // If the conditionLink is "AND", ensure all conditions must be true
    if (data?.conditionLink === ConditionLinkEnum.AND && !conditionResult) {
      return false; // If any condition fails, return false
    }
    // If the conditionLink is "OR", ensure at least one condition must be true
    else if (data?.conditionLink === ConditionLinkEnum.OR && conditionResult) {
      return true; // If any condition is met, return true
    }
  }

  // If conditionLink is "AND", return true as all conditions are met,
  // or if conditionLink is "OR" and no condition is met, return false
  return data.conditionLink === ConditionLinkEnum.AND;
};

const evaluateCanSkip = (
  previewItem: AllFormInterfacesType,
  // watch: any
  watch: UseFormWatch<{
    [x: string]: any;
  }>
): boolean => {
  const label = previewItem.label;
  const id = previewItem.id;
  const name = generateFormName(label, id);
  const currentSubmittedValue = watch(name);
  console.log('currentSubmittedValue', currentSubmittedValue);
  const conditionValid = evaluateConditions(previewItem, currentSubmittedValue);
  return conditionValid;
};

export { evaluateConditions, evaluateCanSkip };
