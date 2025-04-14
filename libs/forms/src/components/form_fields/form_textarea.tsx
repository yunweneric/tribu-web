import { FC } from 'react';
import AppTextArea from '../base/app_text_area';
import { Control, Controller, FieldValues } from 'react-hook-form';
import AppErrorMessage from '../base/app_error2_message';
import { generateFormName } from '@tribu/forms';
import { TextAreaInterface } from '@tribu/forms';

interface FormTextAreaInterface extends TextAreaInterface {
  control?: Control<FieldValues>;
}
export const FormTextArea = (item: FormTextAreaInterface) => {
  const name = generateFormName(item.label, item.id);

  return (
    <Controller
      name={name}
      control={item.control}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <>
            <AppTextArea
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

export default FormTextArea;
