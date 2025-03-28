import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { styleFormFields } from '../../utils/formatters';

export type AppSelectType = {
  id: string | undefined;
  hasBorder?: boolean;
  value?: string | number | readonly string[] | undefined;
  onChange: (event: SelectChangeEvent<string>, child: React.ReactNode) => void;
  items: string[];
  fullWidth?: boolean;
  width?: string;
  prefix?: string;
};
export const AppSelect = ({ ...props }: AppSelectType) => {
  useEffect(() => {
    if (typeof props.value == 'string') {
      setFieldValue(props.value);
    }
  }, [props.value]);
  const [fieldValue, setFieldValue] = useState<string>('');

  return (
    <FormControl fullWidth={props.fullWidth} sx={{ width: props.width }}>
      <Select
        displayEmpty
        value={fieldValue}
        onChange={(e, child) => {
          props.onChange(e, child);
          setFieldValue(e.target.value);
        }}
        inputProps={{ 'aria-label': 'Without label' }}
        className="border-1 border-gray-50 bg-primary-300"
      >
        {props.items &&
          props.items.map((e, index) => (
            <MenuItem key={index} value={e} sx={{ fontSize: 14 }}>
              {props.prefix == null ? e : `${props.prefix}${e}`}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};

export default AppSelect;
