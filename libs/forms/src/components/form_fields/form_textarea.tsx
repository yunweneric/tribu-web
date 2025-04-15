import AppTextArea from '../base/app_text_area';
import { Control, Controller, FieldValues } from 'react-hook-form';
import AppErrorMessage from '../base/app_error2_message';
import { generateFormName } from '@tribu/forms';
import { TextAreaInterface } from '@tribu/forms';

interface FormTextAreaInterface extends TextAreaInterface {
  control?: Control<FieldValues>;
}
export const FormTextArea = (props: FormTextAreaInterface) => {
  const name = props.name ?? generateFormName(props.label, props.id);

  return (
    <Controller
      name={name}
      control={props.control}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <>
            <AppTextArea
              {...props}
              hasBorder={props.isPreview}
              onChange={onChange}
              value={value}
            />

            <AppErrorMessage message={error?.message} />
          </>
        );
      }}
    />
  );
};

export default FormTextArea;
