import { TextField } from '@mui/material';
import { TextInputInterface } from '../../interfaces';
import { ErrorMessage } from 'formik';

interface FormInputFieldInterface extends TextInputInterface {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export const CustomTextField = ({
  id,
  name,
  label,
  type,
  value,
  onChange,
  onBlur,
}: FormInputFieldInterface) => {
  return (
    <>
      <TextField
        fullWidth
        id={id}
        name={name}
        label={label}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        //   error={error}
        //   helperText={helperText}
      />
      <ErrorMessage name="email" />
    </>
  );
};
