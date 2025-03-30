import {
  AllFormInterfacesType,
  AppInput,
  FormFields,
  AppSelect,
  AppMultiSelect,
  AppNumberInput,
  AppDatePicker,
} from '@tribu/forms';

interface AudienceGenericFormProps<T> {
  data?: T;
  formFields: AllFormInterfacesType[];
  updateAudienceGenericForm: (data: T) => void;
}

const AudienceGenericFormForm = <T,>({
  data,
  updateAudienceGenericForm,
  formFields,
}: AudienceGenericFormProps<T>) => {
  const generateField = (field: AllFormInterfacesType) => {
    const value = data ? (data[field['name'] as keyof T] as string) : '';

    switch (field.type) {
      case FormFields.INPUT:
        return (
          <AppInput
            {...field}
            // value={value}
            onChange={(e) => {
              // console.log(e);
              updateAudienceGenericForm({
                ...data,
                [field.name]: e.target.value,
              } as T);
            }}
          />
        );
      case FormFields.NUMBER_INPUT:
        return (
          <AppNumberInput
            {...field}
            // value={value}
            onChange={(e) => {
              updateAudienceGenericForm({
                ...data,
                [field.name]: e.target.value,
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
          <AppSelect
            items={field.elements.map((e) => e.value)}
            {...field}
            fullWidth={true}
            value={value}
            onChange={(e) => {
              updateAudienceGenericForm({
                ...data,
                [field.name]: e.target.value,
              } as T);
            }}
          />
        );

      case FormFields.CHECKBOX:
        return (
          <AppMultiSelect
            items={field.elements.map((e) => e.value)}
            {...field}
            fullWidth={true}
            value={[value]}
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
    return <></>;
  };

  return (
    <div className="w-full">
      {formFields.map((field, key) => {
        return (
          <div className="mb-3" key={key}>
            <p>{field.label}</p>
            {generateField(field)}
          </div>
        );
      })}
    </div>
  );
};

export default AudienceGenericFormForm;
