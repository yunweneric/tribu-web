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
export const FormSlider = (item: FormSliderType) => {
  const name = generateFormName(item.label, item.id);

  return (
    <Box
      sx={{
        paddingX: 5,
        paddingY: 3,
      }}
    >
      <Controller
        name={name}
        control={item.control}
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          return (
            <>
              <AppSlider {...item} onChange={onChange} value={value} />
              <AppErrorMessage message={error?.message} />
            </>
          );
        }}
      />
    </Box>
  );
};

export default FormSlider;
