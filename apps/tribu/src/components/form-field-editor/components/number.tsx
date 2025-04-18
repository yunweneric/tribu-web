import { Box } from '@mui/system';
import {
  NumberInputInterface,
  AppInput,
  SliderInterface,
  AppNumberInput,
} from '@tribu/forms';
import { useDispatch } from 'react-redux';
import {
  setSelectedField,
  updateFormField,
} from '../../../data/logic/form.slice';
import { Stack } from '@mui/material';

const FormInputNumberRenderer = (
  formItem: NumberInputInterface | SliderInterface
) => {
  const dispatch = useDispatch();

  return (
    <Box width={'100%'}>
      <AppInput
        placeholder="Label"
        id={formItem.id}
        value={formItem.label == 'Label' ? '' : formItem.label}
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
          value={formItem.min}
          min={0}
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
          value={formItem.min}
          min={0}
          onChange={(e) => {
            const updatedItem = { ...formItem, max: Number(e.target.value) };
            dispatch(updateFormField(updatedItem));
            dispatch(setSelectedField(updatedItem));
          }}
          hasBorder={true}
        />
      </Stack>
    </Box>
  );
};

export default FormInputNumberRenderer;
