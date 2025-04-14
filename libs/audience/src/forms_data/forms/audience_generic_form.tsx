import {
  AllFormInterfacesType,
  AppInput,
  FormFields,
  AppSelect,
  AppMultiSelect,
  AppNumberInput,
  AppDatePicker,
  InputField,
  SelectField,
  MultiSelectField,
} from '@tribu/forms';

interface AudienceGenericFormProps<T> {
  data?: T;
  formFields: AllFormInterfacesType[];
  updateAudienceGenericForm: (data: T) => void;
  control: any;
}

const AudienceGenericFormForm = <T,>({
  data,
  updateAudienceGenericForm,
  formFields,
  control,
}: AudienceGenericFormProps<T>) => {
  const generateField = (field: AllFormInterfacesType) => {
    const value = data ? (data[field['name'] as keyof T] as string) : '';

    switch (field.type) {
      case FormFields.INPUT:
        return (
          <InputField
            {...field}
            control={control}
            rules={{
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            }}
            onChange={(e) => {
              updateAudienceGenericForm({
                ...data,
                [field.name]: e,
              } as T);
            }}
          />
        );
      case FormFields.NUMBER_INPUT:
        return (
          <InputField
            {...field}
            control={control}
            rules={{
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            }}
            onChange={(e) => {
              updateAudienceGenericForm({
                ...data,
                [field.name]: e,
              } as T);
            }}
          />
        );

      case FormFields.DATE_TIME:
        return (
          <AppDatePicker
            {...field}
            // value={value}
            onChange={(e) => {
              updateAudienceGenericForm({
                ...data,
                [field.name]: e,
              } as T);
              return e;
            }}
          />
        );

      case FormFields.RADIO:
        return (
          <SelectField
            {...field}
            control={control}
            options={field.elements.map((e) => e.value)}
            fullWidth={true}
            value={value}
            onChange={(e) => {
              updateAudienceGenericForm({
                ...data,
                [field.name]: e,
              } as T);
            }}
          />
        );

      case FormFields.CHECKBOX:
        return (
          <MultiSelectField
            {...field}
            control={control}
            options={field.elements.map((e) => e.value)}
            fullWidth={true}
            // value={value}
            onChange={(e) => {
              updateAudienceGenericForm({
                ...data,
                [field.name]: e,
              } as T);
            }}
          />
        );

      default:
        break;
    }
    return (
      <p className="text-sm border rounded-md px-3 py-2 border-red-500">
        <strong> {field.type} field</strong> type not generated!
      </p>
    );
  };

  return (
    <div className="w-full">
      {formFields.map((field, key) => {
        return (
          <div className="mb-3" key={key}>
            {generateField(field)}
          </div>
        );
      })}
    </div>
  );
};

export default AudienceGenericFormForm;
