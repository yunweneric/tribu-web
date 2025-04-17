import {
  AllFormInterfacesType,
  FormInputField,
  FormFields,
  FormDateField,
  FormNumberField,
  FormSelect,
  generateFormName,
  FormMultiSelect,
} from '@tribu/forms';
import { FieldValues } from 'react-hook-form';

interface AudienceGenericFormFIeldsProps<T extends FieldValues> {
  data?: any;
  control: any;
  formFields: AllFormInterfacesType[];
  formTitle: string;
  updateAudienceGenericFormFIelds: (data: T) => void;
  updateField: (index: number, value: any) => void;
}
export const AudienceGenericFormFIelds = <T extends FieldValues>({
  data,
  updateAudienceGenericFormFIelds,
  formFields,
  control,
  formTitle,
  updateField,
}: AudienceGenericFormFIeldsProps<T>) => {
  const generateField = (field: AllFormInterfacesType, index: number) => {
    // const value = data ? (data[field.name as keyof T] as string) : '';
    // const value = data ? (data[field.name as keyof T])
    const value = data;
    const handleChange = (fieldName: string, updatedValue: any) => {
      updateAudienceGenericFormFIelds({
        ...data,
        [fieldName]: updatedValue,
      } as T);

      updateField(index, updatedValue);
    };

    const name = generateFormName(formTitle, field.label);
    const newField = { ...field, name };

    switch (newField.type) {
      case FormFields.INPUT:
        return (
          <FormInputField
            {...newField}
            control={control}
            type={FormFields.INPUT}
            onChange={(e: any) => handleChange(newField.name, e.target.value)}
          />
        );

      case FormFields.NUMBER_INPUT:
        return (
          <FormNumberField
            {...newField}
            control={control}
            onChange={(e) => handleChange(newField.name, e.target.value)}
          />
        );

      case FormFields.DATE_TIME:
        return (
          <FormDateField
            {...newField}
            control={control}
            onChange={(e: Date) => {
              handleChange(newField.name, e.toDateString());
              return e;
            }}
          />
        );

      case FormFields.RADIO:
        return (
          <FormSelect
            {...newField}
            value={value}
            control={control}
            onChange={(e) => handleChange(newField.name, e.target.value)}
          />
        );

      case FormFields.CHECKBOX:
        return (
          <FormMultiSelect
            {...newField}
            control={control}
            value={value}
            onChange={(e) => handleChange(newField.name, e.target.value)}
            // value={Array.isArray(value) ? value : [value]}
            // onChange={(e) => handleChange(newField.name, e.target.value)}
          />
        );

      default:
        return (
          <p className="text-sm border rounded-md px-3 py-2 border-red-500">
            <strong>{newField.type}</strong> field type not supported!
          </p>
        );
    }
  };

  return (
    <div className="w-full">
      {formFields.map((newField, key) => (
        <div className="mb-3" key={key}>
          {generateField(newField, key)}
        </div>
      ))}
    </div>
  );
};

export default AudienceGenericFormFIelds;
