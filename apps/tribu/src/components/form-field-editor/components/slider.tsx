import { Box } from '@mui/system';

import { SliderInterface, AppInput, AppNumberInput } from '@tribu/forms';
import { useDispatch } from 'react-redux';
import {
  setSelectedField,
  updateFormField,
} from '../../../data/logic/form.slice';
import { Stack } from '@mui/material';

const FormSliderRenderer = (formItem: SliderInterface) => {
  const dispatch = useDispatch();

  return (
    <Box width={'100%'}>
      <AppInput
        placeholder="Label"
        id={formItem.id}
        // value={formItem.value}
        onChange={(e) => {
          const updatedItem = { ...formItem, label: e.target.value };
          console.log(updatedItem);
          dispatch(updateFormField(updatedItem));
        }}
        hasBorder={true}
        type="text"
      />
      <Box marginBottom={2} />
      <Stack direction={'row'} spacing={2}>
        <AppNumberInput
          placeholder="Min"
          id={formItem.id}
          value={formItem.value}
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
          value={formItem.value}
          onChange={(e) => {
            const updatedItem = { ...formItem, max: Number(e.target.value) };
            dispatch(updateFormField(updatedItem));
            dispatch(setSelectedField(updatedItem));
          }}
          hasBorder={true}
        />
      </Stack>
      <Box marginBottom={2} />

      <AppNumberInput
        placeholder="Steps"
        id={formItem.id}
        value={formItem.value}
        onChange={(e) => {
          const updatedItem = { ...formItem, steps: Number(e.target.value) };
          dispatch(updateFormField(updatedItem));
          dispatch(setSelectedField(updatedItem));
        }}
        hasBorder={true}
      />
    </Box>
  );
};

export default FormSliderRenderer;
