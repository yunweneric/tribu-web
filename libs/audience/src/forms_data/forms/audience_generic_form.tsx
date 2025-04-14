import {
  AllFormInterfacesType,
  FormInputField,
  FormFields,
  AppSelect,
  AppMultiSelect,
  AppNumberInput,
  AppDatePicker,
} from '@tribu/forms';
import { Control, FieldValues, Path } from 'react-hook-form';

interface AudienceGenericFormProps<T extends FieldValues> {
  data?: T;
  control: Control<FieldValues>;
  formFields: AllFormInterfacesType[];
  updateAudienceGenericForm: (data: T) => void;
}

const AudienceGenericForm = <T extends FieldValues>({
  data,
  updateAudienceGenericForm,
  formFields,
  control,
}: AudienceGenericFormProps<T>) => {
  const generateField = (field: AllFormInterfacesType) => {
    const value = data ? (data[field.name as keyof T] as string) : '';

    const handleChange = (fieldName: string, fieldValue: any) => {
      updateAudienceGenericForm({
        ...data,
        [fieldName]: fieldValue,
      } as T);
    };

    switch (field.type) {
      case FormFields.INPUT:
        return (
          <FormInputField
            {...field}
            type={FormFields.INPUT}
            name={field.name}
            control={control}
            onChange={(e) => handleChange(field.name, e.target.value)}
          />
        );

      case FormFields.NUMBER_INPUT:
        return (
          <AppNumberInput
            {...field}
            onChange={(e) => handleChange(field.name, e.target.value)}
          />
        );

      case FormFields.DATE_TIME:
        return (
          <AppDatePicker
            {...field}
            // onChange={(e) => handleChange(field.name, e)}
          />
        );

      case FormFields.RADIO:
        return (
          <AppSelect
            items={field.elements.map((e) => e.value)}
            {...field}
            fullWidth
            value={value}
            onChange={(e) => handleChange(field.name, e.target.value)}
          />
        );

      case FormFields.CHECKBOX:
        return (
          <AppMultiSelect
            items={field.elements.map((e) => e.value)}
            {...field}
            fullWidth
            value={Array.isArray(value) ? value : [value]}
            onChange={(e) => handleChange(field.name, e)}
          />
        );

      default:
        return (
          <p className="text-sm border rounded-md px-3 py-2 border-red-500">
            <strong>{field.type}</strong> field type not supported!
          </p>
        );
    }
  };

  return (
    <div className="w-full">
      {formFields.map((field, key) => (
        <div className="mb-3" key={key}>
          {generateField(field)}
        </div>
      ))}
    </div>
  );
};

export default AudienceGenericForm;
