import { Typography } from '@mui/material';
import { FC } from 'react';

type AppErrorMessageType = {
  message?: string;
};

const AppErrorMessage: FC<AppErrorMessageType> = ({
  message,
}: AppErrorMessageType) => {
  return (
    <Typography fontSize={12} mt={0.5} color={'red'} ml={0.5}>
      {message}
    </Typography>
  );
};

export default AppErrorMessage;
