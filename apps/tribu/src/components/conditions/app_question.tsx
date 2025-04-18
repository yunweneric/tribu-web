import { Chip, Avatar, Box } from '@mui/material';
import { FC } from 'react';
import colors from '../../utils/styles/colors.module.scss';
import BaseContainer from './base_container';
import { AppInput, FormFields } from '@tribu/forms';

type AppQuestionProps = {
  label: string;
  selectedItem: string;
  index: string | number;
};
const AppQuestion: FC<AppQuestionProps> = ({ label, index, selectedItem }) => {
  return (
    <Box paddingY={2}>
      <BaseContainer
        componentProps={{
          component1: (
            <Chip
              label={label}
              sx={{
                paddingX: 1,
                bgcolor: colors.primary,
                color: colors.white,
                borderRadius: 2,
              }}
            />
          ),
          component2: (
            <AppInput
              startAdornment={
                <Avatar
                  variant="rounded"
                  sx={{
                    width: 30,
                    height: 30,
                    mr: 1,
                    fontSize: 14,
                    backgroundColor: '#000',
                  }}
                >
                  {`Q${index}`}
                </Avatar>
              }
              type={FormFields.INPUT}
              hasBorder={true}
              id={selectedItem}
              onChange={(event) => {
                console.log(event);
              }}
              value={selectedItem}
            />
          ),
        }}
      />
    </Box>
  );
};
export default AppQuestion;
