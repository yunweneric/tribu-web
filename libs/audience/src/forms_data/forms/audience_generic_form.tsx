import {
  AllFormInterfacesType,
  AppInput,
  FormFields,
  AppSelect,
  AppMultiSelect,
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
          <>
            <p>{field.label}</p>
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
          </>
        );

      case FormFields.RADIO:
        return (
          <>
            <p>{field.label}</p>
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
          </>
        );

      case FormFields.CHECKBOX:
        return (
          <>
            <p>{field.label}</p>
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
          </>
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
            {generateField(field)}
          </div>
        );
      })}
    </div>
  );
};

export default AudienceGenericFormForm;
