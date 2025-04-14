import { Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { updateFormField } from '../../data/logic/form.slice';
import {
  ActionInterface,
  AllFormInterfacesType,
  AppDatePicker,
  AppInput,
  AppNumberInput,
  AppSelect,
  CheckboxInterface,
  ConditionInterface,
  FormFields,
  RadioInterface,
} from '@tribu/forms';

type RenderConditionalFieldType = {
  formItem: AllFormInterfacesType;
  condition_or_action?: ConditionInterface | ActionInterface;
};
const RenderConditionalField = ({
  formItem,
  condition_or_action,
}: RenderConditionalFieldType) => {
  const dispatch = useDispatch();

  const updateCondition = (value: string) => {
    const currentConditions = formItem.branching!.condition.filter(
      (item) => item.id == condition_or_action?.id
    );

    if (currentConditions.length == 0) {
      return;
    }

    const currentCondition = currentConditions[0];

    const newCondition: ConditionInterface = {
      ...currentCondition,
      value: value,
    };

    const updateConditions: ConditionInterface[] =
      formItem.branching!.condition.map((item) => {
        if (item.id == currentCondition?.id) {
          return newCondition;
        }
        return item;
      });

    const newFormItem: AllFormInterfacesType = {
      ...formItem,
      branching: {
        ...formItem.branching!,
        condition: updateConditions,
      },
    };

    dispatch(updateFormField(newFormItem));
  };

  if (formItem.type == FormFields.INPUT || formItem.type == FormFields.TEXTAREA)
    return (
      <AppInput
        type={formItem.type}
        id={condition_or_action?.id}
        onChange={(event) => updateCondition(event.target.value)}
        value={condition_or_action?.value ?? ''}
        placeholder={condition_or_action?.value ?? ''}
      />
    );
  if (
    formItem.type == FormFields.NUMBER_INPUT ||
    formItem.type == FormFields.RATING ||
    formItem.type == FormFields.SLIDER ||
    formItem.type == FormFields.RANKING
  )
    return (
      <AppNumberInput
        id={condition_or_action?.id ?? formItem.id}
        onChange={(event) => updateCondition(event.target.value)}
        value={Number(condition_or_action?.value ?? 0)}
        placeholder={condition_or_action?.value ?? ''}
      />
    );
  if (formItem.type == FormFields.CHECKBOX) {
    const item: CheckboxInterface = formItem;
    return (
      <AppSelect
        hasBorder={true}
        id={item.id}
        fullWidth={true}
        onChange={(event) => {
          updateCondition(event.target.value as string);

          // const allSelectedItems = [...item.selectedElements];
          // const otherItems: FormItemElementInterface = allSelectedItems.filter(
          //   (item) => item.value !== event.target.value
          // );
          // if (allSelectedItems.includes(otherItems)) {
          //   allSelectedItems.splice(allSelectedItems.indexOf(otherItems), 1);
          // } else {
          //   allSelectedItems.push(otherItems);
          // }
          // updateCondition(allSelectedItems);
        }}
        items={item.elements.map((element) => element.value)}
        value={condition_or_action?.value ?? ''}
      />
    );
  }
  if (formItem.type == FormFields.RADIO) {
    const item: RadioInterface = formItem;
    return (
      <AppSelect
        hasBorder={true}
        id={item.id}
        fullWidth={true}
        onChange={(event) =>
          updateCondition((event.target.value as string) ?? '')
        }
        items={item.elements.map((element) => element.value)}
        value={condition_or_action?.value ?? ''}
      />
    );
  }

  if (formItem.type == FormFields.DATE_TIME) {
    return (
      <AppDatePicker
        id={formItem.id}
        onChange={(newValue) => {
          // newDate.toDate().setHours(24, 0, 0, 0);
          updateCondition(newValue.toISOString());
          // updateCondition(newDate.toDate);
          console.log(newValue);
          return newValue;
        }}
        hasBorder={true}
        // value={(condition_or_action?.value as string) ?? ''}
        width="100%"
      />
    );
  } else return <Box>No item added!</Box>;
};
export default RenderConditionalField;
