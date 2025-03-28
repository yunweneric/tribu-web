import { Box } from '@mui/material';
export const FieldIcon = ({
  icon,
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
