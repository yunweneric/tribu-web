import { FC } from 'react';
import { SliderInterface } from '@tribu/forms';
import { Box } from '@mui/material';
import AppSlider from '../base/app_slider';
import { generateFormName } from '@tribu/forms';
import AppErrorMessage from '../base/app_error2_message';
import { Control, Controller, FieldValues } from 'react-hook-form';

interface FormSliderType extends SliderInterface {
  control?: Control<FieldValues>;
}
export const FormSlider = (props: FormSliderType) => {
  const name = props.name ?? generateFormName(props.label, props.id);

  return (
    <Box
      sx={{
        paddingX: 5,
        paddingY: 3,
      }}
    >
      <Controller
        name={name}
        control={props.control}
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          return (
            <>
              <AppSlider {...props} onChange={onChange} value={value} />
              <AppErrorMessage message={error?.message} />
            </>
          );
        }}
      />
    </Box>
  );
};

export default FormSlider;
