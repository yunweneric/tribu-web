import { Box } from '@mui/system';
import { useDispatch } from 'react-redux';
import { updateFormField } from '../../../data/logic/form.slice';
import { SelectChangeEvent, Stack } from '@mui/material';
import colors from '../../../utils/styles/colors.module.scss';
import FieldIcon from '../../forms/base/field_icon';
import clock from '../../../assets/icons/clock.svg';
import calendar from '../../../assets/icons/calendar.svg';
import { ReactNode } from 'react';
import CustomDateField from './custom_datefield';
import { Dayjs } from 'dayjs';
import { AppInput, AppSelect, TextDateInterface } from '@tribu/forms';

const FormDateFieldRenderer = (formItem: TextDateInterface) => {
  const dispatch = useDispatch();

  return (
    <Box width={'100%'}>
      <AppInput
        placeholder="Label"
        id={formItem.id}
        value={formItem.value ? formItem.value.toISOString() : ''}
        onChange={(e) => {
          const updatedItem = { ...formItem, label: e.target.value };
          dispatch(updateFormField(updatedItem));
        }}
        hasBorder={true}
        type="text"
      />
      <Box marginBottom={2} />
      <Stack marginTop={2} direction={'row'}>
        <Box
          sx={{
            borderTop: '1px solid',
            borderLeft: '1px solid',
            borderBottom: '1px solid',
            borderColor: colors.gray,
            justifyContent: 'center',
            alignItems: 'center',
            width: '15%',
            display: 'flex',
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5,
          }}
        >
          <FieldIcon icon={clock} onClick={() => {}} />
        </Box>

        <Box
          sx={{
            borderTop: '1px solid',
            borderBottom: '1px solid',
            borderLeft: '1px solid',
            borderColor: colors.gray,
            alignItems: 'center',
            px: 2,
            width: '60%',
            display: 'flex',
          }}
        >
          Time
        </Box>
        <Box
          sx={{
            border: '1px solid',
            borderColor: colors.gray,
            alignItems: 'center',
            width: '25%',
            display: 'flex',
            borderBottomRightRadius: 5,
          }}
        >
          <AppSelect
            id={'time-format'}
            value={'24H'}
            width="100%"
            onChange={(
              event: SelectChangeEvent<string | number | readonly string[]>,
              child: ReactNode
            ) => {
              const value = event.target.value as string; // Explicitly cast to string
              console.log(value, child);
              return;
            }}
            items={['24H', '12H']}
          />
        </Box>
      </Stack>
      <Stack marginTop={2} direction={'row'}>
        <Box
          sx={{
            borderTop: '1px solid',
            borderLeft: '1px solid',
            borderBottom: '1px solid',
            borderColor: colors.gray,
            justifyContent: 'center',
            alignItems: 'center',
            width: '15%',
            display: 'flex',
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5,
          }}
        >
          <FieldIcon icon={calendar} onClick={() => {}} />
        </Box>

        <Box
          sx={{
            borderTop: '1px solid',
            borderLeft: '1px solid',
            borderBottom: '1px solid',
            borderColor: colors.gray,
            justifyContent: 'center',
            alignItems: 'center',
            width: '28.3%',
            display: 'flex',
          }}
        >
          Date
        </Box>
        <Box
          sx={{
            borderTop: '1px solid',
            borderLeft: '1px solid',
            borderBottom: '1px solid',
            borderColor: colors.gray,
            justifyContent: 'center',
            alignItems: 'center',
            width: '28.3%',
            display: 'flex',
          }}
        >
          <CustomDateField
            id="from"
            placeholder="From"
            onChange={(e: Dayjs) => {
              const updatedItem = { ...formItem, minDate: e };
              dispatch(updateFormField(updatedItem));
            }}
          />
        </Box>

        <Box
          sx={{
            border: '1px solid',
            borderColor: colors.gray,
            justifyContent: 'center',
            alignItems: 'center',
            width: '28.3%',
            display: 'flex',
            borderTopRightRadius: 5,
            paddingY: 1.2,
            borderBottomRightRadius: 5,
          }}
        >
          <CustomDateField
            id="to"
            placeholder="To"
            onChange={(e: Dayjs) => {
              const updatedItem = { ...formItem, maxDate: e };
              dispatch(updateFormField(updatedItem));
            }}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default FormDateFieldRenderer;
