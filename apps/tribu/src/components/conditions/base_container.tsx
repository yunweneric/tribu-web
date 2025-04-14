import { Stack, Box } from '@mui/system';

type ComponentProps = {
  component1: JSX.Element;
  component2: JSX.Element;
};

const BaseContainer: React.FC<{ componentProps: ComponentProps }> = ({
  componentProps,
}) => {
  return (
    <Stack paddingX={3} direction={'row'} alignItems={'center'}>
      <Box width={'20%'} textAlign={'center'}>
        {componentProps.component1}
      </Box>
      <Box width={'80%'}>{componentProps.component2}</Box>
    </Stack>
  );
};
export default BaseContainer;
