import { Box } from '@mui/system';
import { SelectChangeEvent, Stack } from '@mui/material';
import colors from '../../../utils/styles/colors.module.scss';
import clock from '../../../assets/icons/clock.svg';
import calendar from '../../../assets/icons/calendar.svg';
import { ReactNode } from 'react';
import CustomDateField from './custom_datefield';
import { Dayjs } from 'dayjs';
import { TextDateInterface } from '@tribu/forms';
import AppSelect from '../base/app_select';
import AppInput from '../base/app_input';
import FieldIcon from '../base/field_icon';

const FormDateFieldRenderer = (formItem: TextDateInterface) => {
  return (
    <Box width={'100%'}>
      <AppInput
        placeholder="Label"
        id={formItem.id}
        value={formItem.value}
        onChange={(e) => {
          const updatedItem = { ...formItem, label: e.target.value };
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
            onChange={(event: SelectChangeEvent<string>, child: ReactNode) => {
              console.log(event, child);
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
            }}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default FormDateFieldRenderer;
