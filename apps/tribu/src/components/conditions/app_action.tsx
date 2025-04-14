import { Typography, Box, Stack } from '@mui/material';
import { FC } from 'react';
import BaseContainer from './base_container';
import { useDispatch, useSelector } from 'react-redux';
import { updateFormField } from '../../data/logic/form.slice';
import { RootState } from '../../data/store/app_store';
import {
  ActionActions,
  ActionInterface,
  actionType,
  AllFormInterfacesType,
  AppConditionProps,
  AppSelect,
  convertActionStringToEnum,
} from '@tribu/forms';
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
        id: formItem.branching?.id || '',
        condition: formItem.branching?.condition || [],
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
                  updateActionSelectField(event.target.value as string, true);
                }}
                items={equality_options}
                value={formItem.branching?.action?.action ?? ''}
                width={
                  formItem.branching?.action.action == ActionActions.SKIP
                    ? '30%'
                    : '100%'
                }
              />
              {formItem.branching?.action.action == ActionActions.SKIP && (
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
                      updateActionSelectField(
                        event.target.value as string,
                        false
                      );
                    }}
                    items={sectionItems}
                    value={formItem.branching?.action.value ?? ''}
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
