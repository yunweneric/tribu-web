import { TextDateInterface } from '@tribu/forms';
import { AppDatePicker } from '../base/app_date_field';
import { Control, Controller, FieldValues } from 'react-hook-form';
import AppErrorMessage from '../base/app_error2_message';

interface FormDateFieldInterface extends TextDateInterface {
  control?: Control<FieldValues>;
}
export const FormDateField = (props: FormDateFieldInterface) => {
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <>
            <AppDatePicker
              hasBorder={props.isPreview}
              id={props.id}
              minDate={props.minDate}
              maxDate={props.maxDate}
              onChange={(date) => {
                // const newDate = dayjs(date);
                onChange(date);
                if (props.onChange) props?.onChange(date);

                return date;
              }}
              value={value}
            />
            <AppErrorMessage message={error?.message} />
          </>
        );
      }}
    />
  );
};

export default FormDateField;
