import { FC } from 'react';
import { MatrixInterface } from '@tribu/forms';
import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from '@mui/material';
export const FormMatrix = (item: MatrixInterface) => {
  return <MatrixItems {...item} />;
};

const MatrixItems: FC<MatrixInterface> = (item: MatrixInterface) => {
  return (
    <Box paddingX={5} paddingTop={3}>
      <Stack direction={'row'} marginBottom={2}>
        <Box width={'30%'} />
        <Stack
          width={'70%'}
          justifyContent={'flex-start'}
          alignItems={'center'}
          direction={'row'}
        >
          {item.columns.map((element, index) => (
            <Box key={index} width={'30%'}>
              <Typography>{element.value}</Typography>
            </Box>
          ))}
        </Stack>
      </Stack>
      <Stack direction={'column'}>
        {item.rows.map((element, index) => (
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <Stack
                key={index}
                justifyContent={'space-between'}
                alignItems={'center'}
                direction={'row'}
                marginBottom={2}
              >
                <Box width={'30%'}>
                  <Typography>{element.value}</Typography>
                </Box>
                <Stack
                  direction={'row'}
                  justifyContent={'flex-start'}
                  width={'70%'}
                >
                  {item.columns.map((element, index) => (
                    <Box width={'30%'}>
                      <FormControlLabel
                        value={element.value}
                        control={<Radio />}
                        label={item.value}
                        key={index}
                      />
                    </Box>
                  ))}
                </Stack>
              </Stack>
            </RadioGroup>
          </FormControl>
        ))}
      </Stack>
    </Box>
  );
};
export default FormMatrix;
