import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useEffect, useState } from 'react';

export type AppSelectType = {
  id: string | undefined;
  hasBorder?: boolean;
  value?: string | number | readonly string[] | undefined;
  onChange?: (
    event: SelectChangeEvent<string | number | readonly string[]>,
    child: React.ReactNode
  ) => void;
  items: string[];
  fullWidth?: boolean;
  width?: string;
  prefix?: string;
  label?: string;
};
export const AppSelect = ({ ...props }: AppSelectType) => {
  useEffect(() => {
    if (typeof props.value == 'string') {
      setFieldValue(props.value);
    }
  }, [props.value]);
  const [fieldValue, setFieldValue] = useState<
    string | number | readonly string[]
  >('');

  return (
    <FormControl
      fullWidth={props.fullWidth}
      sx={{ width: props.width }}
      className="flex flex-col"
    >
      <label
        htmlFor="email"
        className="block text-sm/6 font-medium text-gray-900"
      >
        {props.label}
      </label>
      <Select
        // displayEmpty
        // label={props.label}
        placeholder={props.label}
        size="small"
        value={fieldValue}
        onChange={(e, child) => {
          if (props.onChange) props.onChange(e, child);
          setFieldValue(e.target.value);
        }}
        inputProps={{ 'aria-label': 'Without label' }}
        className="border-1 border-gray-50 "
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
