import { Box } from '@mui/system';
import { MatrixInterface, AppInput } from '@tribu/forms';
import { useDispatch } from 'react-redux';
import {
  setSelectedField,
  updateFormField,
} from '../../../data/logic/form.slice';
import { IconButton, Stack, Typography } from '@mui/material';
import FieldIcon from '../../forms/base/field_icon';
import colors from '../../../utils/styles/colors.module.scss';
import trash from '../../../assets/icons/trash.svg';
import { Add } from '@mui/icons-material';

const FormMatrixRenderer = (formItem: MatrixInterface) => {
  const dispatch = useDispatch();

  return (
    <Box width={'100%'}>
      <AppInput
        placeholder="Label"
        id={formItem.id}
        value={formItem.value}
        onChange={(e) => {
          const updatedItem = { ...formItem, label: e.target.value };
          console.log(updatedItem);
          dispatch(updateFormField(updatedItem));
        }}
        hasBorder={true}
        type={formItem.type}
      />
      <Box marginBottom={5} />

      <Box>
        <Typography>Rows</Typography>
        <Box
          width={'100%'}
          sx={{
            marginTop: 2,
            display: formItem.rows?.length > 0 ? 'block' : 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {formItem.rows &&
            formItem.rows.map((item, index) => {
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
                        const newValues = formItem.rows.filter(
                          (_, i) => i != index
                        );
                        const newSelectedItem = {
                          ...formItem,
                          rows: newValues,
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
                    id={item.id}
                    onChange={(e) => {
                      const newField = {
                        ...item,
                        label: item.label,
                        value: e.target.value,
                      };
                      const radioItems = [...formItem.rows];
                      radioItems[index] = newField;
                      const newSelectedItem = {
                        ...formItem,
                        rows: radioItems,
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
                marginTop: formItem.rows?.length > 0 ? 2 : 0,
              }}
              onClick={() => {
                const newElements = [
                  ...formItem.rows,
                  { label: 'Label', value: '' },
                ];
                const newItem = { ...formItem, ...{ rows: newElements } };
                dispatch(setSelectedField(newItem));
              }}
            >
              <Add />
            </IconButton>
          </Box>
        </Box>
      </Box>

      <Box>
        <Typography>Columns</Typography>
        <Box
          width={'100%'}
          sx={{
            marginTop: 2,
            display: formItem.columns?.length > 0 ? 'block' : 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {formItem.columns &&
            formItem.columns.map((item, index) => {
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
                        const newValues = formItem.columns.filter(
                          (_, i) => i != index
                        );
                        const newSelectedItem = {
                          ...formItem,
                          columns: newValues,
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
                    id={item.id}
                    onChange={(e) => {
                      const newField = {
                        ...item,
                        label: item.label,
                        value: e.target.value,
                      };
                      const radioItems = [...formItem.columns];
                      radioItems[index] = newField;
                      const newSelectedItem = {
                        ...formItem,
                        columns: radioItems,
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
                marginTop: formItem.columns?.length > 0 ? 2 : 0,
              }}
              onClick={() => {
                const newElements = [
                  ...formItem.columns,
                  { label: 'Label', value: '' },
                ];
                const newItem = { ...formItem, ...{ columns: newElements } };
                dispatch(setSelectedField(newItem));
              }}
            >
              <Add />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FormMatrixRenderer;
