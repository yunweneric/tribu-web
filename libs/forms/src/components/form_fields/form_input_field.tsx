import { FC } from 'react';
import {
  Control,
  Controller,
  FieldValues,
  useController,
} from 'react-hook-form';
import { generateFormName } from '@tribu/forms';
import AppErrorMessage from '../base/app_error2_message';
import { TextInputInterface } from '../../interfaces';
import { AppInput } from '../base/app_input';
interface FormInputFieldInterface extends TextInputInterface {
  control?: Control<FieldValues>;
}
export const FormInputField = (props: FormInputFieldInterface) => {
  const name = props.name ?? generateFormName(props.label, props.id);

  const control = props.control;
  const {
    field,
    fieldState: { invalid, isTouched, isDirty, error },
    formState: { touchedFields, dirtyFields },
  } = useController({
    name,
    control,
    rules: { required: true },
  });

  // return (
  //   <AppInput
  //     {...props}
  //     hasBorder={props.isPreview}
  //     onChange={(e) => {
  //       if (props.onChange) props?.onChange(e);
  //     }}
  //     value={props.value}
  //   />
  // );
  return (
    <>
      <AppInput
        {...props}
        hasBorder={props.isPreview}
        onChange={(e) => {
          field.onChange(e);
          if (props.onChange) props?.onChange(e);
        }}
        value={field.value}
      />
      <AppErrorMessage message={error?.message} />
    </>
  );
};

export default FormInputField;
