import { Box, Button } from '@mui/material';
import { AllFormInterfacesType } from '../../../../../../libs/forms/src/types/all_form_types';
import colors from '../../../utils/styles/colors.module.scss';
import { FC } from 'react';
type PreviewButtonsType = {
  currentIndex: number;
  animateNext: (value: boolean) => void;
  previewItems: AllFormInterfacesType[];
  reverseIndexes: number[];
};
const PreviewButtons: FC<PreviewButtonsType> = ({
  currentIndex,
  animateNext,
  previewItems,
  reverseIndexes,
}: PreviewButtonsType) => {
  return (
    <Box>
      <Button
        disabled={reverseIndexes.length == 1}
        disableElevation
        variant="contained"
        onClick={() => animateNext(false)}
        sx={{
          textTransform: 'capitalize',
          px: 5,
          py: 1.2,
          color: colors.white,
          mr: 2,
        }}
      >
        Prev
      </Button>

      <Button
        type="submit"
        variant="contained"
        disableElevation
        onClick={() => animateNext(true)}
        sx={{
          color: colors.white,
          textTransform: 'capitalize',
          px: 5,
          py: 1.2,
        }}
      >
        {currentIndex == previewItems.length - 1 ? 'Submit' : 'Next'}
      </Button>
    </Box>
  );
};

export default PreviewButtons;
