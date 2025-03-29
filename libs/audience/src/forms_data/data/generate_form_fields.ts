import { AllFormInterfacesType, FormFields } from '@tribu/forms';

export const generateFormFieldData = <T extends object>(
  data: T
): AllFormInterfacesType[] => {
  const created = Object.entries(data as T).map(([key, value]) => {
    const isEnum = typeof value === 'object' && value !== null;
    const isNumber = typeof value === 'number';
    const isDate = value instanceof Date;
    const field: AllFormInterfacesType = {
      id: '',
      index: 0,
      activeSectionIndex: 0,
      icon: '',
      name: key.toLowerCase(),
      label: key.replace(/([A-Z])/g, ' $1').trim(),
      placeholder: key.replace(/([A-Z])/g, ' $1').trim(),
      value: '',
      // type: FormFields.INPUT || FormFields.CHECKBOX,
      type: FormFields.INPUT || FormFields.RADIO || FormFields.CHECKBOX,
      required: true,

      // elements: isEnum && {
      //   elements: Object.entries(value).map(([key, value]) => ({
      //     value: key,
      //     label: value,
      //   })),
      // },
    };
    return field;
  });
  return created;
};
