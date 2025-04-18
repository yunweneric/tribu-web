import { Typography } from '@mui/material';
import { getErrorMessage } from '../../utils/formatters';
import { useFormContext } from 'react-hook-form';
export type AppErrorMessageType = {
  id: string;
  label: string;
  name?: string;
  isPreview?: boolean;
};
export const AppCustomErrorMessage = ({
  id,
  label,
  isPreview,
  name,
}: AppErrorMessageType) => {
  const {
    formState: { errors },
  } = useFormContext();
  if (isPreview == true)
    return (
      <Typography fontSize={12} mt={0.5} color={'red'} ml={0.5}>
        {getErrorMessage(errors, label, id, name) &&
          getErrorMessage(errors, label, id, name)?.message}
      </Typography>
    );
  return <></>;
};

export default AppCustomErrorMessage;
