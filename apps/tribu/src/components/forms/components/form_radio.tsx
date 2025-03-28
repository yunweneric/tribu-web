import { FC } from 'react';
import BaseFieldItem from '../base/base_item';
import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { RadioInterface } from '@tribu/forms';
import { Control, Controller, FieldValues } from 'react-hook-form';
import { generateFormName } from '../../../utils/helpers/formatters';
import AppErrorMessage from '../base/app_error2_message';

interface FormRadioSelectInterface extends RadioInterface {
  control?: Control<FieldValues>;
}
const FormRadioSelect: FC<FormRadioSelectInterface> = (
  item: FormRadioSelectInterface
) => {
  const name = generateFormName(item.label, item.id);

  return (
    <BaseFieldItem item={item}>
      <Box
        display={'flex'}
        // justifyContent={"center"}
        // alignItems={"center"}
        // paddingY={5}
      >
        <FormControl>
          <Controller
            control={item.control}
            name={name}
            render={({ fieldState: { error }, field }) => {
              return (
                <>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    {item.elements &&
                      item.elements.map((item, index) => {
                        return (
                          <FormControlLabel
                            value={item.value}
                            control={
                              <Radio
                                onChange={(e) => {
                                  if (e.target.value == item.value)
                                    field.onChange(item.value);
                                }}
                                checked={field.value == item.value}
                              />
                            }
                            label={item.value}
                            key={index}
                          />
                        );
                      })}
                  </RadioGroup>
                  <AppErrorMessage message={error?.message} />
                </>
              );
            }}
          />
        </FormControl>
      </Box>
    </BaseFieldItem>
  );
};

export default FormRadioSelect;
