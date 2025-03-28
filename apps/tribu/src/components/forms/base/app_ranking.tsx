import { Avatar, Box, Stack, Typography } from '@mui/material';
import { RankingInterface } from '@tribu/forms';
import colors from '../../../utils/styles/colors.module.scss';
import { useState } from 'react';

type RankingComponentType = {
  formItem: RankingInterface;
  onChange: (value: number) => void;
  value?: number;
};

const RankingComponent = ({
  formItem,
  onChange,
  value,
}: RankingComponentType) => {
  const [currentItem, setCurrentItem] = useState<number>(value);

  return (
    <Box>
      <Stack direction={'row'} justifyContent={'center'}>
        {formItem.steps &&
          formItem.steps.map((item, index) => {
            const newIndex = index + 1;
            return (
              <Box key={index}>
                <Avatar
                  onClick={() => {
                    setCurrentItem(index);
                    onChange(index);
                  }}
                  variant="rounded"
                  sx={{
                    bgcolor:
                      currentItem == index ? colors.primary : colors.gray,
                    border: `1px solid`,
                    borderColor:
                      currentItem == index ? colors.primary : '#747681',
                    mx: 1,
                    color: currentItem == index ? colors.white : '#000',
                    width: '25px',
                    fontSize: 12,
                    cursor: 'pointer',
                    transition: 'all 0.7s',
                  }}
                >
                  {newIndex}
                </Avatar>

                <Box mt={2}>
                  {formItem.stepLabels.map((label, i) => {
                    if (label.from == item + 1) {
                      return (
                        <Typography textAlign={'center'} key={i} fontSize={12}>
                          {label.name}
                        </Typography>
                      );
                    }
                  })}
                </Box>
              </Box>
            );
          })}
      </Stack>
      {/* <Stack direction={"row"} justifyContent={"center"}>
        {steps &&
          steps.map((index) => {
            return (
              <Avatar
                variant="rounded"
                sx={{
                  // width: "100%",
                  width: "30px",
                  mx: 1,
                  backgroundColor: "blue",
                }}
              >
                <Box />
              </Avatar>
            );
          })}
      </Stack> */}
    </Box>
  );
};

export default RankingComponent;
