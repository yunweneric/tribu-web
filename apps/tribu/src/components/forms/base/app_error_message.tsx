import { Typography } from '@mui/material';
import { getErrorMessage } from '@tribu/forms';
import { useFormContext } from 'react-hook-form';

type AppErrorMessageType = {
  id: string;
  label: string;
  isPreview?: boolean;
};
const AppCustomErrorMessage = ({
  id,
  label,
  isPreview,
}: AppErrorMessageType) => {
  const {
    formState: { errors },
  } = useFormContext();
  if (isPreview == true)
    return (
      <Typography fontSize={12} mt={0.5} color={'red'} ml={0.5}>
        {getErrorMessage(errors, label, id) &&
          getErrorMessage(errors, label, id)?.message}
      </Typography>
    );
  return <></>;
};

export default AppCustomErrorMessage;
