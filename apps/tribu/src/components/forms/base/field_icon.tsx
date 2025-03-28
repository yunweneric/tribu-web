import { Box } from '@mui/material';
import colors from '../../../utils/styles/colors.module.scss';
const FieldIcon = ({
  icon,
  bgColor,
  onClick,
}: {
  icon: string;
  bgColor?: string;
  onClick: React.MouseEventHandler<HTMLDivElement> | undefined;
}) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        backgroundColor: bgColor ?? colors.white,
        height: 40,
        width: 40,
        borderRadius: '50%',
        margin: '0 1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
      }}
    >
      <img src={icon} alt="" width={20} height={20} />
    </Box>
  );
};

export default FieldIcon;
