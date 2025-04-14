import { FC } from 'react';
import { TextInputInterface } from '@tribu/forms';
import AppInput from '../base/app_input';
import BaseFieldItem from '../base/base_item';
import { Control, Controller, FieldValues } from 'react-hook-form';
import { generateFormName } from '@tribu/forms';
import AppErrorMessage from '../base/app_error2_message';

interface FormInputFieldInterface extends TextInputInterface {
  control?: Control<FieldValues>;
}

const FormInputField: FC<FormInputFieldInterface> = (
  item: FormInputFieldInterface
) => {
  const name = generateFormName(item.label, item.id);

  return (
    <BaseFieldItem item={item}>
      <Controller
        name={name}
        control={item.control}
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          return (
            <>
              <AppInput
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
    </BaseFieldItem>
  );
};

export default FormInputField;
