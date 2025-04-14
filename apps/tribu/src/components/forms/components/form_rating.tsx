import { FC } from 'react';
import BaseFieldItem from '../base/base_item';
import { Box } from '@mui/material';
import { RatingInterface } from '@tribu/forms';
import AppRating from '../base/app_rating';
import { Control, Controller, FieldValues } from 'react-hook-form';
import AppErrorMessage from '../base/app_error2_message';
import { generateFormName } from '@tribu/forms';

interface FormRatingType extends RatingInterface {
  control?: Control<FieldValues>;
}
const FormRating: FC<FormRatingType> = (item: FormRatingType) => {
  const name = generateFormName(item.label, item.id);
  return (
    <BaseFieldItem item={item}>
      <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        paddingY={5}
      >
        <Controller
          name={name}
          control={item.control}
          render={({ field: { onChange, value }, fieldState: { error } }) => {
            return (
              <Box>
                <AppRating {...item} onChange={onChange} value={value} />
                <AppErrorMessage message={error?.message} />
              </Box>
            );
          }}
        />
      </Box>
    </BaseFieldItem>
  );
};

export default FormRating;
