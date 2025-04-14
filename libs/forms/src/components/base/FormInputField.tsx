import { FC } from 'react';
import { TextInputInterface } from '@tribu/forms';
import { Control, Controller, FieldValues } from 'react-hook-form';
import { generateFormName } from '../../utils/formatters';
import AppErrorMessage from './app_error2_message';
import { TextField } from '@mui/material';

interface FormInputFieldInterface extends TextInputInterface {
  control?: Control<FieldValues>;
  onChange?: (e: any) => void;
}
export const FormInputField: FC<FormInputFieldInterface> = (
  props: FormInputFieldInterface
) => {
  const name = generateFormName(props.label, props.id);

  return (
    <Controller
      name={name}
      control={props.control}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        console.log(`error ${name}`, error);
        return (
          <>
            <TextField
              {...props}
              fullWidth
              label={props.label}
              size="small"
              variant="outlined"
              placeholder={props.placeholder}
              // InputProps={{
              //   startAdornment: item.startAdornment,
              // }}
              value={value}
              onChange={(e) => {
                // Custom onChange logic
                onChange(e); // Trigger react-hook-form's onChange
                if (onChange) {
                  onChange(e); // Trigger custom onChange handler
                }
              }}
              sx={{
                py: 1.5,
              }}
            />
            <AppErrorMessage message={error?.message} />
          </>
        );
      }}
    />
  );
};

export default FormInputField;
