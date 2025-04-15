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

interface AudienceGenericFormProps<T extends FieldValues> {
  data?: T;
  control: any;
  formFields: AllFormInterfacesType[];
  formTitle: string;
  updateAudienceGenericForm: (data: T) => void;
}

const AudienceGenericForm = <T extends FieldValues>({
  data,
  updateAudienceGenericForm,
  formFields,
  control,
  formTitle,
}: AudienceGenericFormProps<T>) => {
  const generateField = (field: AllFormInterfacesType) => {
    const value = data ? (data[field.name as keyof T] as string) : '';

    const handleChange = (fieldName: string, fieldValue: any) => {
      updateAudienceGenericForm({
        ...data,
        [fieldName]: fieldValue,
      } as T);
    };

    const name = generateFormName(formTitle, field.label);
    const newField = { ...field, name };
    // console.log('newField', newField);
    switch (newField.type) {
      case FormFields.INPUT:
        return (
          <FormInputField
            {...newField}
            type={FormFields.INPUT}
            control={control}
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
            value={Array.isArray(value) ? value : [value]}
            onChange={(e) => handleChange(newField.name, e)}
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
          {generateField(newField)}
        </div>
      ))}
    </div>
  );
};

export default AudienceGenericForm;
