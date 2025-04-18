import {
  AppInput,
  AppNumberInput,
  RankingInterface,
  StepLabelItem,
} from '@tribu/forms';
import { Box, Divider, IconButton, Stack, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import {
  setSelectedField,
  updateFormField,
} from '../../../data/logic/form.slice';
import colors from '../../../utils/styles/colors.module.scss';
import { useState } from 'react';
import { Close } from '@mui/icons-material';
import { faker } from '@faker-js/faker';

type StepItem = {
  from: number;
  to: number;
  name?: string;
};
const FormRankingRenderer = (formItem: RankingInterface) => {
  const dispatch = useDispatch();
  const [stepItem, setStepItem] = useState<StepItem | undefined>();
  return (
    <Box width={'100%'} mb={2}>
      <AppInput
        placeholder="Label"
        id={formItem.id}
        value={formItem.label == 'Label' ? '' : formItem.label}
        onChange={(e) => {
          const updatedItem = { ...formItem, label: e.target.value };
          dispatch(updateFormField(updatedItem));
          dispatch(setSelectedField(updatedItem));
        }}
        hasBorder={true}
        type={formItem.type}
      />
      <Stack direction={'row'} spacing={1} my={2}>
        <AppNumberInput
          placeholder="Min"
          id={formItem.id}
          value={formItem?.min}
          min={0}
          max={10}
          onChange={(e) => {
            const updatedItem = { ...formItem, min: Number(e.target.value) };
            dispatch(updateFormField(updatedItem));
            dispatch(setSelectedField(updatedItem));
          }}
          hasBorder={true}
        />
        <AppNumberInput
          placeholder="Max"
          id={formItem.id}
          value={formItem?.max}
          min={0}
          max={10}
          onChange={(e) => {
            const updatedItem = { ...formItem, max: Number(e.target.value) };
            dispatch(updateFormField(updatedItem));
            dispatch(setSelectedField(updatedItem));
          }}
          hasBorder={true}
        />
      </Stack>
      <AppNumberInput
        placeholder="Step"
        id={formItem.id}
        value={formItem.steps.length == 0 ? undefined : formItem.steps.length}
        max={10}
        min={3}
        onChange={(e) => {
          const stepNumber = Number(e.target.value);
          const steps: number[] = Array.from(
            { length: stepNumber },
            (_, index) => index
          );
          const updatedItem = { ...formItem, steps: steps };
          dispatch(updateFormField(updatedItem));
          dispatch(setSelectedField(updatedItem));
        }}
        hasBorder={true}
      />

      <Box mt={3}>
        <Typography mb={1}>Range Labels</Typography>
        <Box mt={1}>
          {formItem.stepLabels.length > 0 ? (
            <Box mb={5}>
              <Stack direction={'row'} justifyContent={'space-between'} mb={1}>
                <Typography width={'40%'}>Label</Typography>
                <Typography width={'20%'}>From</Typography>
                <Typography width={'20%'}>To</Typography>
                <Typography width={'20%'}>Action</Typography>
              </Stack>
              <Divider />
              {formItem.stepLabels.map((item) => {
                return (
                  <Box>
                    <Stack
                      direction={'row'}
                      justifyContent={'space-between'}
                      py={1}
                    >
                      <Typography width={'40%'}> {item.name}</Typography>
                      <Typography width={'20%'}>{item.from}</Typography>
                      <Typography width={'20%'}>{item.to}</Typography>

                      <Box width={'20%'}>
                        <IconButton
                          aria-label="add"
                          sx={{
                            bgcolor: colors.gray,
                            p: 0.1,
                            ':hover': {
                              backgroundColor: colors.primary,
                              color: colors.white,
                            },
                          }}
                          onClick={() => {
                            const stepLabels = formItem.stepLabels.filter(
                              (label) => label.id !== item.id
                            );
                            const updatedItem: RankingInterface = {
                              ...formItem,
                              stepLabels: stepLabels,
                            };
                            dispatch(updateFormField(updatedItem));
                          }}
                        >
                          <Close sx={{ width: 1 / 2 }} />
                        </IconButton>
                      </Box>
                    </Stack>
                    <Divider />
                  </Box>
                );
              })}
            </Box>
          ) : (
            <Box py={5} bgcolor={colors.gray} textAlign={'center'} mt={1}>
              <Typography>No step label added!</Typography>
            </Box>
          )}
        </Box>
      </Box>

      {formItem.stepLabels.length < 3 && (
        <>
          <Stack direction={'row'} spacing={1} my={2}>
            <Box width={'50%'}>
              <AppInput
                placeholder="Step Name"
                id={stepItem?.name}
                value={stepItem?.name}
                onChange={(e) =>
                  setStepItem({ ...stepItem!, name: e.target.value as string })
                }
                hasBorder={true}
                type={formItem.type}
              />
            </Box>
            <Stack direction={'row'} spacing={1} width={'50%'}>
              <AppNumberInput
                placeholder="From"
                id={formItem.id}
                min={1}
                max={10}
                value={stepItem?.from}
                onChange={(e) =>
                  setStepItem({
                    ...stepItem!,
                    from:
                      Number(e.target.value) == 0 ? 1 : Number(e.target.value),
                  })
                }
                hasBorder={true}
              />
              <AppNumberInput
                placeholder="To"
                id={formItem.id}
                value={stepItem?.to}
                min={1}
                max={10}
                onChange={(e) =>
                  setStepItem({
                    ...stepItem!,
                    to:
                      Number(e.target.value) == 0 ? 1 : Number(e.target.value),
                  })
                }
                hasBorder={true}
              />
            </Stack>
          </Stack>
          <Box textAlign={'right'} mt={2}>
            <IconButton
              aria-label="add"
              sx={{
                bgcolor: colors.primary,
                px: 1.8,
                color: colors.white,
                borderRadius: 1,
                ':hover': {
                  backgroundColor: colors.primary,
                  color: colors.white,
                },
              }}
              onClick={() => {
                const newLabel: StepLabelItem = {
                  name: stepItem!.name!,
                  from: stepItem!.from,
                  to: stepItem!.to,
                  id: faker.string.uuid(),
                };
                const stepLabels: StepLabelItem[] = [
                  ...formItem.stepLabels,
                  newLabel,
                ];

                const updatedItem: RankingInterface = {
                  ...formItem,
                  stepLabels: stepLabels,
                };
                dispatch(updateFormField(updatedItem));
                setStepItem(undefined);
              }}
            >
              <Typography variant={'caption'}>Add Step</Typography>
            </IconButton>
          </Box>
        </>
      )}
    </Box>
  );
};

export default FormRankingRenderer;
