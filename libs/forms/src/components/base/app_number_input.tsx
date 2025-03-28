import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { styleFormFields } from '../../utils/formatters';
export type AppNumberInputType = {
  placeholder?: string | undefined;
  id: string | undefined;
  hasBorder?: boolean;
  value?: number | null;
  max?: number;
  min?: number;
  isPreview?: boolean;
  onChange:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
};
export const AppNumberInput = ({ ...props }: AppNumberInputType) => {
  useEffect(() => {
    // if (typeof props.value == "number") {
    //   if (props.value != 0) setFieldValue(props.value);
    setFieldValue(props.value ?? null);
    console.log('Re-rendering', props.value);
    // }
  }, [props.value]);
  const [fieldValue, setFieldValue] = useState<number | null>(null);

  return (
    <TextField
      fullWidth
      variant="outlined"
      id={props.id}
      type="number"
      inputProps={{ max: props.max, min: props.min }}
      placeholder={props.placeholder}
      onChange={(e) => {
        const val = Number(e.target.value);
        props.onChange && props.onChange(e);
        setFieldValue(val);
      }}
      value={fieldValue ?? ''}
      sx={styleFormFields(props)}
    />
  );
};

export default AppNumberInput;
