import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { roundUpToMidnight } from '../../utils/formatters';
export type AppDatePickerProps = {
  id: string | undefined;
  onChange?: (value: Date) => Date;
  hasBorder?: boolean;
  value?: Date | undefined;
  width?: string;
  minDate?: Dayjs;
  maxDate?: Dayjs;
};

export const AppDatePicker = (props: AppDatePickerProps) => {
  const [initialValue, setValue] = React.useState<Dayjs | null>(dayjs(null));
  React.useEffect(() => {
    setValue(dayjs(props.value));
  }, [props.value]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker', 'DatePicker']}>
        <DatePicker
          format="DD-MM-YYYY"
          value={initialValue}
          minDate={props.minDate}
          maxDate={props.maxDate}
          slotProps={{
            textField: {
              size: 'small',
            },
          }}
          onChange={(newValue) => {
            setValue(newValue);
            if (props.onChange) {
              const newDate = dayjs(newValue);
              const updatedDate = roundUpToMidnight(newDate.toDate());
              props.onChange(updatedDate);
            }
          }}
          className={`w-${props.width ?? 'full'} bg-white rounded-md ${
            props.hasBorder ? 'border border-gray-300' : ''
          } focus-within:border focus-within:border-primary`}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};
