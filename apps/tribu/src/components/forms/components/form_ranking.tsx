import { FC } from 'react';
import { RankingInterface } from '@tribu/forms';
import BaseFieldItem from '../base/base_item';
import { Control, Controller, FieldValues } from 'react-hook-form';
import { generateFormName } from '@tribu/forms';
import AppErrorMessage from '../base/app_error2_message';
import RankingComponent from '../base/app_ranking';
import { Box } from '@mui/material';

interface FormInputFieldInterface extends RankingInterface {
  control?: Control<FieldValues>;
}

const FormRankingField: FC<FormInputFieldInterface> = (
  item: FormInputFieldInterface
) => {
  const name = generateFormName(item.label, item.id);

  return (
    <BaseFieldItem item={item}>
      <Controller
        name={name}
        control={item.control}
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          return (
            <Box px={2} py={4}>
              <RankingComponent
                formItem={item}
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
    </BaseFieldItem>
  );
};

export default FormRankingField;
