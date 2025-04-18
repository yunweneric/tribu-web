import { FC } from 'react';
import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { RadioInterface } from '@tribu/forms';
import { Control, Controller, FieldValues } from 'react-hook-form';
import { generateFormName } from '@tribu/forms';
import AppErrorMessage from '../base/app_error2_message';

interface FormRadioSelectInterface extends RadioInterface {
  control?: Control<FieldValues>;
}
export const FormRadioSelect = (props: FormRadioSelectInterface) => {
  const name = props.name ?? generateFormName(props.label, props.id);

  return (
    <Box
      display={'flex'}
      // justifyContent={"center"}
      // alignItems={"center"}
      // paddingY={5}
    >
      <FormControl>
        <Controller
          control={props.control}
          name={name}
          render={({ fieldState: { error }, field }) => {
            return (
              <>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  {props.elements &&
                    props.elements.map((props, index) => {
                      return (
                        <FormControlLabel
                          value={props.value}
                          control={
                            <Radio
                              onChange={(e) => {
                                if (e.target.value == props.value)
                                  field.onChange(props.value);
                              }}
                              checked={field.value == props.value}
                            />
                          }
                          label={props.value}
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
  );
};

export default FormRadioSelect;
