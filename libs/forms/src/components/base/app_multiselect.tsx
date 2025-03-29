import {
  Box,
  Chip,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useEffect, useState } from 'react';

export type AppMultiSelectType = {
  id: string | undefined;
  hasBorder?: boolean;
  value?: readonly string[] | readonly number[] | undefined;
  onChange: (
    // event: SelectChangeEvent<string | number | readonly string[]>,
    items: readonly number[] | readonly string[] | undefined,
    child: React.ReactNode
  ) => void;
  items: string[];
  fullWidth?: boolean;
  width?: string;
  prefix?: string;
  placeholder?: string;
  label?: string;
};
export const AppMultiSelect = ({ ...props }: AppMultiSelectType) => {
  useEffect(() => {
    // if (typeof props.value == 'string') {
    //   setFieldValue(props.value);
    // }
  }, [props.value]);
  const [fieldValue, setFieldValue] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof fieldValue>) => {
    const {
      target: { value },
    } = event;
    setFieldValue(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <FormControl fullWidth={props.fullWidth} sx={{ width: props.width }}>
      <Select
        multiple
        displayEmpty
        label={props.label}
        value={fieldValue}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'Without label' }}
        className="border-1 border-gray-50 bg-primary-300"
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
            <em>{props.placeholder}</em>
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
