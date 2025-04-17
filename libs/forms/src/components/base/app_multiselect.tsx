import {
  Box,
  Chip,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useState } from 'react';

export type AppMultiSelectType = {
  id: string | undefined;
  hasBorder?: boolean;
  value?: readonly string[] | readonly number[] | undefined;
  onChange?: (
    event: SelectChangeEvent<readonly string[] | readonly number[] | undefined>
  ) => void;
  items: number[] | string[] | undefined;
  fullWidth?: boolean;
  width?: string;
  prefix?: string;
  placeholder?: string;
  label?: string;
};
export const AppMultiSelect = ({ ...props }: AppMultiSelectType) => {
  const [fieldValue, setFieldValue] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof fieldValue>) => {
    const {
      target: { value },
    } = event;
    setFieldValue(typeof value === 'string' ? value.split(',') : value);
    if (props.onChange) props.onChange(event);
  };

  return (
    <FormControl fullWidth={props.fullWidth} sx={{ width: props.width }}>
      <label
        htmlFor="email"
        className="block text-sm/6 font-medium text-gray-900"
      >
        {props.label}
      </label>
      <Select
        multiple
        displayEmpty
        size="small"
        value={fieldValue}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'Without label' }}
        className="border-1 border-gray-50"
        renderValue={(selected) => (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {selected.map((value) => (
              <Chip key={value} label={value} />
            ))}
          </Box>
        )}
      >
        {props.placeholder && (
          <MenuItem disabled value="">
            <em className="text-gray-500 text-sm">
              Select {props.placeholder}
            </em>
          </MenuItem>
        )}
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

export default AppMultiSelect;
