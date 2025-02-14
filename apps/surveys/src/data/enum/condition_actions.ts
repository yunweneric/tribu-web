enum ConditionActions {
  EQUALTO = "Is Equal to",
  NOTEQUALTO = "Is Not Equal to",
  GREATERTHAN = "Is Greater than",
  LESSTHAN = "Is Less than",
  GREATERTHANEQUALTO = "Is Greater than or Equal to",
  LESSTHANEQUALTO = "Is Less than or Equal to",
}

enum ActionActions {
  SKIP = "Skip To",
  CANCEL = "Cancel",
}
enum ConditionLinkEnum {
  OR = "OR",
  AND = "AND",
}

const conditionInputActions = [
  ConditionActions.EQUALTO,
  ConditionActions.NOTEQUALTO,
  ConditionActions.GREATERTHAN,
  ConditionActions.LESSTHAN,
  ConditionActions.GREATERTHANEQUALTO,
  ConditionActions.LESSTHANEQUALTO,
];

const actionSelectOptions = [ActionActions.SKIP, ActionActions.CANCEL];

const conditionLinks = [ConditionLinkEnum.AND, ConditionLinkEnum.OR];

const conditionSelectActions = [
  ConditionActions.EQUALTO,
  ConditionActions.NOTEQUALTO,
];

export type conditionTypes =
  | ConditionActions.EQUALTO
  | ConditionActions.NOTEQUALTO
  | ConditionActions.GREATERTHAN
  | ConditionActions.LESSTHAN
  | ConditionActions.GREATERTHANEQUALTO
  | ConditionActions.LESSTHANEQUALTO;

export type actionType = ActionActions.SKIP | ActionActions.CANCEL;

export {
  ConditionActions,
  conditionInputActions,
  conditionSelectActions,
  conditionLinks,
  ConditionLinkEnum,
  ActionActions,
  actionSelectOptions,
};
