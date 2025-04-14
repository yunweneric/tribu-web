import { FC } from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';
import { generateFormName } from '@tribu/forms';
import AppErrorMessage from '../base/app_error2_message';
import { TextInputInterface } from '../../interfaces';
import { AppInput } from '../base/app_input';
interface FormInputFieldInterface extends TextInputInterface {
  control?: Control<FieldValues>;
}
export const FormInputField = (item: FormInputFieldInterface) => {
  const name = generateFormName(item.label, item.id);

  return (
    <Controller
      name={name}
      control={item.control}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <>
            <AppInput
              {...item}
              hasBorder={item.isPreview}
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

export default FormInputField;
