import { FC } from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';
import { AppMultiSelect } from '@tribu/forms';
import AppErrorMessage from '../base/app_error2_message';
import { CheckboxInterface } from '../../interfaces';
interface FormMultiSelectInterface extends CheckboxInterface {
  control?: Control<FieldValues>;
}
export const FormMultiSelect = (item: FormMultiSelectInterface) => {
  return (
    <Controller
      name={item.name}
      control={item.control}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <>
            <AppMultiSelect
              {...item}
              items={item.elements.map((i) => i.value)}
              hasBorder={item.isPreview}
              fullWidth
              onChange={(e) => {
                onChange(e);
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

export default FormMultiSelect;
