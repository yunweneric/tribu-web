import { FC } from 'react';
import { Box } from '@mui/material';
import { RatingInterface } from '@tribu/forms';
import AppRating from '../base/app_rating';
import { Control, Controller, FieldValues } from 'react-hook-form';
import AppErrorMessage from '../base/app_error2_message';
import { generateFormName } from '@tribu/forms';

interface FormRatingType extends RatingInterface {
  control?: Control<FieldValues>;
}
export const FormRating = (props: FormRatingType) => {
  const name = props.name ?? generateFormName(props.label, props.id);
  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      paddingY={5}
    >
      <Controller
        name={name}
        control={props.control}
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          return (
            <Box>
              <AppRating {...props} onChange={onChange} value={value} />
              <AppErrorMessage message={error?.message} />
            </Box>
          );
        }}
      />
    </Box>
  );
};

export default FormRating;
