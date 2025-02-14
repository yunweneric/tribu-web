import { FC } from "react";
import AppTextArea from "../base/app_text_area";
import BaseFieldItem from "../base/base_item";
import { Control, Controller, FieldValues } from "react-hook-form";
import AppErrorMessage from "../base/app_error2_message";
import { generateFormName } from "../../../utils/helpers/formatters";
import { TextAreaInterface } from "../../../data/interfaces";

interface FormTextAreaInterface extends TextAreaInterface {
  control?: Control<FieldValues>;
}

const FormTextArea: FC<FormTextAreaInterface> = (
  item: FormTextAreaInterface
) => {
  const name = generateFormName(item.label, item.id);

  return (
    <BaseFieldItem item={item}>
      <Controller
        name={name}
        control={item.control}
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          return (
            <>
              <AppTextArea
                {...item}
                hasBorder={item.isPreview}
                onChange={onChange}
                value={value}
              />

              <AppErrorMessage message={error?.message} />
            </>
          );
        }}
      />
    </BaseFieldItem>
  );
};

export default FormTextArea;
