import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';
export type AppInputType = {
  placeholder?: string | undefined;
  label?: string | undefined;
  type: string | undefined;
  id: string | undefined;
  hasBorder?: boolean;
  readonly?: boolean;
  value?: string | number | readonly string[] | undefined;
  onChange:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  maxLength?: number;
  minLength?: number;
  styles?: any | undefined;
  multiline?: boolean;
  isPreview?: boolean;
  minRows?: number;
  startAdornment?: JSX.Element;
};
export const AppInput = ({ ...props }: AppInputType) => {
  useEffect(() => {
    if (typeof props.value == 'string') {
      setFieldValue(props.value);
    }
  }, [props.value]);
  const [fieldValue, setFieldValue] = useState<string | null>(null);
  return (
    <>
      {props.label && (
        <label className="block text-sm/6 font-medium text-gray-900">
          {props.label}
        </label>
      )}
      <TextField
        type={props.type}
        fullWidth
        variant="outlined"
        size="small"
        id={props.id}
        // label={props.label}
        value={fieldValue}
        placeholder={props.placeholder}
        onChange={(e) => {
          props.onChange && props.onChange(e);
          setFieldValue(e.target.value);
        }}
        InputProps={{
          startAdornment: props.startAdornment,
          // maxLength: props.maxLength,
          // minLength: props.minLength,
          type: props.type,
          style: { ...props.styles },
        }}
        sx={{
          '& .MuiFormLabel-root': {
            fontSize: '0.875rem',
          },
          '& input::placeholder': {
            fontSize: '0.875rem',
          },
        }}
      />
    </>
  );
};

export default AppInput;
