import { FC } from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';
import { AppSelect } from '@tribu/forms';
import AppErrorMessage from '../base/app_error2_message';
import { RadioInterface } from '../../interfaces';
interface FormSelectInterface extends RadioInterface {
  control?: Control<FieldValues>;
}
export const FormSelect = (item: FormSelectInterface) => {
  return (
    <Controller
      name={item.name}
      control={item.control}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <>
            <AppSelect
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

export default FormSelect;
