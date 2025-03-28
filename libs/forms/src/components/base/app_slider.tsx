import { useEffect, useState } from 'react';
import { Slider } from '@mui/material';
export type AppSliderType = {
  min?: number | undefined;
  max?: number | undefined;
  steps?: number | undefined;
  value: number | undefined;
  placeholder?: string | undefined;
  label: string;
  id: string;
  isPreview?: boolean;
  onChange: (
    event: Event,
    value: number | number[],
    activeThumb: number
  ) => void;
};
export const AppSlider = ({ ...props }: AppSliderType) => {
  useEffect(() => {
    if (typeof props.value == 'number') {
      setFieldValue(props.value);
    }
  }, []);

  const [fieldValue, setFieldValue] = useState<number | undefined>();

  return (
    <Slider
      itemID={props.id}
      aria-label={props.placeholder}
      id={props.label}
      max={props.max}
      aria-valuetext={`${fieldValue}`}
      valueLabelDisplay="auto"
      step={props.steps}
      value={fieldValue}
      min={props.min}
      onChange={(e, val, thumb) => {
        const value = Number(val);
        setFieldValue(value);
        props.onChange(e, val, thumb);
      }}
    />
  );
};

export default AppSlider;
