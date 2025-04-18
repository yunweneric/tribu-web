import { FC } from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';
import { AppMultiSelect, generateFormName } from '@tribu/forms';
import AppErrorMessage from '../base/app_error2_message';
import { CheckboxInterface } from '../../interfaces';
interface FormMultiSelectInterface extends CheckboxInterface {
  control?: Control<FieldValues>;
}
export const FormMultiSelect = (props: FormMultiSelectInterface) => {
  const name = props.name ?? generateFormName(props.label, props.id);

  return (
    <Controller
      name={name}
      control={props.control}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <>
            <AppMultiSelect
              {...props}
              items={props.elements}
              // items={props.elements.map((i) => i.value)}
              hasBorder={props.isPreview}
              fullWidth
              onChange={(e) => {
                onChange(e);
                if (props.onChange) props.onChange(e);
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

export default FormMultiSelect;
