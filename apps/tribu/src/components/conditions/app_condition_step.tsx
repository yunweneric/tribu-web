import { Stack, Box } from "@mui/system";
import { FC } from "react";
import { AppConditionProps } from "../../data/types/app_condition_props_type";
import AppSelect from "../forms/base/app_select";
import BaseContainer from "./base_container";
import RenderConditionalField from "./render_conditional";
import { ConditionInterface } from "../../data/interfaces";
import { useDispatch } from "react-redux";
import { updateFormField } from "../../data/logic/form.slice";
import { conditionTypes } from "../../data/enum/condition_actions";
import {
  updateFormFieldWithConditions,
  convertConditionStringToEnum,
} from "../../utils/helpers/condition_helper";
import { AllFormInterfacesType } from "../../data/types/all_form_types";
const AppConditionStep: FC<AppConditionProps> = ({
  equality_options,
  formItem,
  condition_or_action,
}) => {
  const dispatch = useDispatch();
  const updateConditionSelectField = (value: string) => {
    const actionEnum: conditionTypes | null =
      convertConditionStringToEnum(value);
    const newFormItem: AllFormInterfacesType = updateFormFieldWithConditions({
      condition_or_action: condition_or_action,
      newValue: null,
      formItem: formItem,
      newAction: actionEnum,
    });

    dispatch(updateFormField(newFormItem));
  };
  return (
    <BaseContainer
      componentProps={{
        component1: <Box></Box>,
        component2: (
          <Stack direction={"row"} spacing={2}>
            <AppSelect
              hasBorder={true}
              id={formItem.id}
              onChange={(event, child) => {
                console.log(event, child);
                updateConditionSelectField(event.target.value);
              }}
              items={equality_options}
              value={condition_or_action.action}
              width="30%"
            />
            <Stack
              width="70%"
              direction={"row"}
              alignItems={"center"}
              spacing={1}
            >
              <RenderConditionalField
                formItem={formItem}
                condition_or_action={condition_or_action as ConditionInterface}
              />
            </Stack>
          </Stack>
        ),
      }}
    />
  );
};

export default AppConditionStep;
