import { TextField } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { styleFormFields } from '../../utils/formatters';

type AppTextAreaType = {
  placeholder?: string | undefined;
  id?: string | undefined;
  hasBorder?: boolean;
  maxLength?: number;
  value?: string | number | readonly string[] | undefined;
  onChange:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  isPreview?: boolean;
};
const AppTextArea: FC<AppTextAreaType> = ({ ...props }) => {
  useEffect(() => {
    if (typeof props.value == 'string') {
      setFieldValue(props.value);
    }
  }, [props.value]);
  const [fieldValue, setFieldValue] = useState<string>('');

  return (
    <TextField
      fullWidth
      variant="outlined"
      id={props.id}
      multiline
      minRows={4}
      maxRows={7}
      inputProps={{
        maxLength: props.maxLength,
      }}
      placeholder={props.placeholder}
      onChange={(e) => {
        props.onChange && props.onChange(e);
        setFieldValue(e.target.value);
      }}
      value={fieldValue}
      sx={styleFormFields(props)}
    />
  );
};

export default AppTextArea;
