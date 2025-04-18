import { FC } from 'react';
import { DividerInterface } from '@tribu/forms';
import { Box, Stack } from '@mui/material';
import colors from '../../../utils/styles/colors.module.scss';
import FieldIcon from '../base/field_icon';
import { useDispatch } from 'react-redux';
import trash from '../../../assets/icons/trash.svg';
import { removeFormField } from '../../../data/logic/form.slice';

const FormDivider: FC<DividerInterface> = (item) => {
  const dispatch = useDispatch();

  return (
    <Stack
      direction={'row'}
      justifyContent={'center'}
      alignItems={'center'}
      marginX={1}
    >
      <Box
        sx={{
          height: '4px',
          backgroundColor: colors.gray,
          width: '100%',
        }}
      />
      <FieldIcon
        icon={trash}
        onClick={() => {
          dispatch(removeFormField(item));
        }}
      />
    </Stack>
  );
};

export default FormDivider;
