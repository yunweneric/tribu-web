import { FC } from 'react';
import { RankingInterface } from '@tribu/forms';
import { Control, Controller, FieldValues } from 'react-hook-form';
import { generateFormName } from '@tribu/forms';
import AppErrorMessage from '../base/app_error2_message';
import RankingComponent from '../base/app_ranking';
import { Box } from '@mui/material';

interface FormInputFieldInterface extends RankingInterface {
  control?: Control<FieldValues>;
}
export const FormRankingField = (props: FormInputFieldInterface) => {
  const name = props.name ?? generateFormName(props.label, props.id);

  return (
    <Controller
      name={name}
      control={props.control}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <Box px={2} py={4}>
            <RankingComponent
              formItem={props}
              onChange={(val) => {
                onChange(val);
              }}
              value={value}
            />
            <AppErrorMessage message={error?.message} />
          </Box>
        );
      }}
    />
  );
};

export default FormRankingField;
