import { FC } from "react";
import { NumberInputInterface } from "../../../data/interfaces";
import BaseFieldItem from "../base/base_item";
import AppNumberInput from "../base/app_number_input";
import { Control, Controller, FieldValues } from "react-hook-form";
import { generateFormName } from "../../../utils/helpers/formatters";
import AppErrorMessage from "../base/app_error2_message";

interface NumberInputInterfaceInterface extends NumberInputInterface {
  control?: Control<FieldValues>;
}

const FormNumberField: FC<NumberInputInterfaceInterface> = (
  item: NumberInputInterfaceInterface
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
              <AppNumberInput
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

export default FormNumberField;
