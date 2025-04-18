import { CheckboxInterface, AppInput, RadioInterface } from '@tribu/forms';
import { Box, IconButton, Stack } from '@mui/material';
import { Add } from '@mui/icons-material';
import colors from '../../../utils/styles/colors.module.scss';
import trash from '../../../assets/icons/trash.svg';
import { useDispatch } from 'react-redux';
import {
  setSelectedField,
  updateFormField,
} from '../../../data/logic/form.slice';
import FieldIcon from '../../forms/base/field_icon';

const FormRadioRenderer = (formItem: RadioInterface | CheckboxInterface) => {
  const dispatch = useDispatch();
  return (
    <Box
      width={'100%'}
      sx={{
        marginTop: 2,
        display: formItem.elements?.length > 0 ? 'block' : 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {formItem.elements &&
        formItem.elements.map((item, index) => {
          return (
            <Stack marginTop={2} direction={'row'}>
              <Box
                sx={{
                  borderTop: '1px solid',
                  borderLeft: '1px solid',
                  borderBottom: '1px solid',
                  borderColor: colors.gray,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 50,
                  display: 'flex',
                  borderTopLeftRadius: 5,
                  borderBottomLeftRadius: 5,
                }}
              >
                <FieldIcon
                  icon={trash}
                  onClick={() => {
                    const newValues = formItem.elements.filter(
                      (_, i) => i != index
                    );
                    const newSelectedItem = {
                      ...formItem,
                      elements: newValues,
                    };
                    dispatch(setSelectedField(newSelectedItem));
                    dispatch(updateFormField(newSelectedItem));
                  }}
                />
              </Box>
              <AppInput
                value={item.value}
                placeholder={item.label}
                key={index}
                type="text"
                hasBorder={true}
                id={item.value}
                onChange={(e: any) => {
                  const newField = {
                    label: item.label,
                    value: e.target.value,
                  };
                  const radioItems = [...formItem.elements];
                  radioItems[index] = newField;
                  const newSelectedItem = {
                    ...formItem,
                    elements: radioItems,
                  };
                  dispatch(setSelectedField(newSelectedItem));
                  dispatch(updateFormField(newSelectedItem));
                }}
              />
            </Stack>
          );
        })}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'end',
        }}
      >
        <IconButton
          aria-label="add"
          sx={{
            bgcolor: colors.primary,
            marginTop: formItem.elements?.length > 0 ? 2 : 0,
          }}
          onClick={() => {
            const newElements = [
              ...formItem.elements,
              { label: 'Label', value: '' },
            ];
            const newItem = { ...formItem, ...{ elements: newElements } };
            dispatch(setSelectedField(newItem));
          }}
        >
          <Add />
        </IconButton>
      </Box>
    </Box>
  );
};

export default FormRadioRenderer;
