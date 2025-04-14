import { FC } from 'react';
import { NumberInputInterface } from '@tribu/forms';
import AppNumberInput from '../base/app_number_input';
import { Control, Controller, FieldValues } from 'react-hook-form';
import { generateFormName } from '@tribu/forms';
import AppErrorMessage from '../base/app_error2_message';

interface NumberInputInterfaceInterface extends NumberInputInterface {
  control?: Control<FieldValues>;
}
export const FormNumberField = (item: NumberInputInterfaceInterface) => {
  const name = generateFormName(item.label, item.id);

  return (
    <Controller
      name={name}
      control={item.control}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <>
            <AppNumberInput
              {...item}
              hasBorder={item.isPreview}
              onChange={onChange}
              value={value}
            />

            <AppErrorMessage message={error?.message} />
          </>
        );
      }}
    />
  );
};

export default FormNumberField;
