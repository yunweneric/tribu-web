import { Typography, Box, Stack } from '@mui/material';
import { FC } from 'react';
import AppSelect from '../forms/base/app_select';
import BaseContainer from './base_container';
import { AppConditionProps } from '../../data/types/app_condition_props_type';
import { useDispatch, useSelector } from 'react-redux';
import { ActionInterface } from '../../data/interfaces';
import { updateFormField } from '../../data/logic/form.slice';
import { AllFormInterfacesType } from '../../data/types/all_form_types';
import { ActionActions, actionType } from '../../data/enum/condition_actions';
import { convertActionStringToEnum } from '../../utils/helpers/condition_helper';
import { RootState } from '../../data/store/app_store';
const AppBranchActionComponent: FC<AppConditionProps> = ({
  equality_options,
  formItem,
}) => {
  const dispatch = useDispatch();
  const { sections } = useSelector((state: RootState) => state.form);
  const sectionItems = sections.map((_, index) => `${index + 1}`);

  sectionItems.splice(formItem.activeSectionIndex, 1);

  const currentAction = formItem.branching?.action as ActionInterface;
  const updateActionSelectField = (value: string, isAction: boolean) => {
    const actionEnum: actionType | null = convertActionStringToEnum(value);

    let updatedAction: ActionInterface = {
      ...currentAction,
    };

    if (isAction) {
      updatedAction = {
        ...currentAction,
        action: actionEnum == null ? currentAction?.action : actionEnum,
        value: actionEnum == ActionActions.CANCEL ? '1' : currentAction?.value,
      };
    } else {
      updatedAction = {
        ...currentAction,
        value: value,
        action: currentAction?.action,
      };
    }

    console.log(updatedAction, 'updatedAction');

    const newFormItem: AllFormInterfacesType = {
      ...formItem,
      branching: {
        ...formItem.branching,
        action: updatedAction,
      },
    };
    dispatch(updateFormField(newFormItem));
  };

  return (
    <Box paddingY={2}>
      <BaseContainer
        componentProps={{
          component1: (
            <Typography textAlign={'center'} fontWeight={600}>
              Action
            </Typography>
          ),
          component2: (
            <Stack direction={'row'} spacing={2}>
              <AppSelect
                hasBorder={true}
                id={formItem.id}
                onChange={(event) => {
                  updateActionSelectField(event.target.value, true);
                }}
                items={equality_options}
                value={formItem.branching.action?.action}
                width={
                  formItem.branching.action.action == ActionActions.SKIP
                    ? '30%'
                    : '100%'
                }
              />
              {formItem.branching.action.action == ActionActions.SKIP && (
                <Stack
                  width="70%"
                  direction={'row'}
                  alignItems={'center'}
                  spacing={1}
                >
                  <AppSelect
                    hasBorder={true}
                    id={formItem.id}
                    prefix="Block "
                    onChange={(event) => {
                      updateActionSelectField(event.target.value, false);
                    }}
                    items={sectionItems}
                    value={formItem.branching.action.value}
                    width="100%"
                  />
                </Stack>
              )}
            </Stack>
          ),
        }}
      />
    </Box>
  );
};

export default AppBranchActionComponent;
