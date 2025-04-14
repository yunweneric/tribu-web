import { FC } from 'react';
import { TextDateInterface } from '@tribu/forms';
import { AppDatePicker } from '../base/app_date_field';
import { Control, Controller, FieldValues } from 'react-hook-form';
import AppErrorMessage from '../base/app_error2_message';
import { generateFormName } from '@tribu/forms';

interface FormDateFieldInterface extends TextDateInterface {
  control?: Control<FieldValues>;
}
export const FormDateField = (item: FormDateFieldInterface) => {
  const name = generateFormName(item.label, item.id);

  return (
    <Controller
      name={name}
      control={item.control}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <>
            <AppDatePicker
              hasBorder={item.isPreview}
              id={item.id}
              minDate={item.minDate}
              maxDate={item.maxDate}
              onChange={(date) => {
                // const newDate = dayjs(date);
                onChange(date.toISOString());
                console.log('newDate', date);
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
