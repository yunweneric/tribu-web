import { FC } from 'react';
import AppTextArea from '../base/app_text_area';
import { Control, Controller, FieldValues } from 'react-hook-form';
import AppErrorMessage from '../base/app_error2_message';
import { generateFormName, TextAreaInterface } from '@tribu/forms';
import { Typography } from '@mui/material';

interface FormTextAreaInterface extends TextAreaInterface {
  control?: Control<FieldValues>;
}
export const FormParagraph = (props: FormTextAreaInterface) => {
  const name = props.name ?? generateFormName(props.label, props.id);

  if (props.isPreview)
    return (
      <Typography textAlign={'center'} px={10}>
        {props.value}
      </Typography>
    );
  return (
    <Controller
      name={name}
      control={props.control}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <>
            <AppTextArea
              {...props}
              hasBorder={props.isPreview}
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

export default FormParagraph;
