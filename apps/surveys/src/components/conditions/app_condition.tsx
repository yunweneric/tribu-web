import { Typography, IconButton, Box, Stack } from "@mui/material";
import { FC } from "react";
import AppSelect from "../forms/base/app_select";
import BaseContainer from "./base_container";
import colors from "../../utils/styles/colors.module.scss";
import { Add } from "@mui/icons-material";
import { AppConditionProps } from "../../data/types/app_condition_props_type";
import { useDispatch } from "react-redux";
import { updateFormField } from "../../data/logic/form.slice";
import { ConditionInterface } from "../../data/interfaces";
import RenderConditionalField from "./render_conditional";
import { faker } from "@faker-js/faker";
import {
  ConditionActions,
  ConditionLinkEnum,
  conditionTypes,
} from "../../data/enum/condition_actions";
import {
  updateFormFieldWithConditions,
  convertConditionStringToEnum,
} from "../../utils/helpers/condition_helper";
import { AllFormInterfacesType } from "../../data/types/all_form_types";

const AppBranchConditionComponent: FC<AppConditionProps> = ({
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
    <Box>
      <BaseContainer
        componentProps={{
          component1: (
            <Typography textAlign={"center"} fontWeight={600}>
              Condition
            </Typography>
          ),
          component2: (
            <Stack direction={"row"} spacing={2}>
              <AppSelect
                hasBorder={true}
                id={formItem.id}
                onChange={(event) => {
                  console.log(event);
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
                  condition_or_action={
                    condition_or_action as ConditionInterface
                  }
                />

                {formItem.branching.condition.length == 1 && (
                  <Box>
                    <IconButton
                      aria-label="add"
                      sx={{
                        bgcolor: colors.primary,
                        padding: 0.1,
                      }}
                      onClick={() => {
                        const newCondition: ConditionInterface = {
                          action: ConditionActions.EQUALTO,
                          value: "",
                          id: faker.string.uuid(),
                        };
                        const newBranching = {
                          ...formItem.branching,
                          condition: [
                            ...formItem.branching.condition,
                            newCondition,
                          ],
                        };

                        const newItem: AllFormInterfacesType = {
                          ...formItem,
                          conditionLink: ConditionLinkEnum.AND,
                          branching: newBranching,
                        };
                        dispatch(updateFormField(newItem));
                      }}
                    >
                      <Add />
                    </IconButton>
                  </Box>
                )}
              </Stack>
            </Stack>
          ),
        }}
      />
    </Box>
  );
};

export default AppBranchConditionComponent;
