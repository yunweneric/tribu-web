import { FC } from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';
import { AppSelect, generateFormName } from '@tribu/forms';
import AppErrorMessage from '../base/app_error2_message';
import { RadioInterface } from '../../interfaces';
interface FormSelectInterface extends RadioInterface {
  control?: Control<FieldValues>;
}
export const FormSelect = (props: FormSelectInterface) => {
  const name = props.name ?? generateFormName(props.label, props.id);

  return (
    <Controller
      name={name}
      control={props.control}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <>
            <AppSelect
              {...props}
              items={props.elements.map((i) => i.value)}
              hasBorder={props.isPreview}
              fullWidth
              onChange={(e, child) => {
                onChange(e);
                if (props.onChange)
                  props?.onChange(
                    e as unknown as React.ChangeEvent<HTMLInputElement>,
                    child as boolean
                  );
              }}
              value={value}
            />
            <AppErrorMessage message={error?.message} />
          </>
        );
      }}
    />
  );
};

export default FormSelect;
