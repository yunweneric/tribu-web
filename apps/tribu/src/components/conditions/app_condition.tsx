import { Typography, IconButton, Box, Stack } from '@mui/material';
import { FC } from 'react';
import BaseContainer from './base_container';
import colors from '../../utils/styles/colors.module.scss';
import { Add } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { updateFormField } from '../../data/logic/form.slice';
import RenderConditionalField from './render_conditional';
import { faker } from '@faker-js/faker';
import {
  AllFormInterfacesType,
  AppConditionProps,
  AppSelect,
  ConditionActions,
  ConditionInterface,
  ConditionLinkEnum,
  conditionTypes,
  convertConditionStringToEnum,
  updateFormFieldWithConditions,
} from '@tribu/forms';

const AppBranchConditionComponent: FC<AppConditionProps> = ({
  equality_options,
  formItem,
  condition_or_action,
}) => {
  const dispatch = useDispatch();
  const updateConditionSelectField = (value: string) => {
    const actionEnum: conditionTypes | null =
      convertConditionStringToEnum(value);
    const newFormItem: AllFormInterfacesType | undefined =
      updateFormFieldWithConditions({
        condition_or_action: condition_or_action,
        formItem: formItem,
        newAction: actionEnum == null ? undefined : actionEnum,
      });

    dispatch(updateFormField(newFormItem));
  };
  return (
    <Box>
      <BaseContainer
        componentProps={{
          component1: (
            <Typography textAlign={'center'} fontWeight={600}>
              Condition
            </Typography>
          ),
          component2: (
            <Stack direction={'row'} spacing={2}>
              <AppSelect
                hasBorder={true}
                id={formItem.id}
                onChange={(event: any) => {
                  console.log(event);
                  updateConditionSelectField(event.target.value);
                }}
                items={equality_options}
                value={condition_or_action?.action}
                width="30%"
              />
              <Stack
                width="70%"
                direction={'row'}
                alignItems={'center'}
                spacing={1}
              >
                <RenderConditionalField
                  formItem={formItem}
                  condition_or_action={
                    condition_or_action as ConditionInterface
                  }
                />

                {formItem.branching?.condition.length == 1 && (
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
                          value: '',
                          id: faker.string.uuid(),
                        };
                        const newBranching = {
                          ...formItem.branching!,
                          condition: [
                            ...formItem.branching!.condition,
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
