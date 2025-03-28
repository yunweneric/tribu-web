import * as yup from 'yup';
import { AllFormInterfacesType } from '../types/all_form_types';
import { FormFields } from '../enum';
import { generateFormName } from './formatters';
const generateValidationSchema = (fields: AllFormInterfacesType[]) => {
  let yupSchema = yup.object();

  fields.forEach((field) => {
    let fieldSchema;

    switch (field.type) {
      case FormFields.NUMBER_INPUT:
        fieldSchema = yup.number();
        if (field.min !== undefined) {
          fieldSchema = fieldSchema.min(
            field.min,
            `${field.label} min value is ${field.min}`
          );
        }
        if (field.max !== undefined) {
          fieldSchema = fieldSchema.max(
            field.max,
            `${field.label} max value is ${field.max}`
          );
        }
        break;
      case FormFields.INPUT:
        fieldSchema = yup.string();
        if (field.maxLength !== undefined) {
          fieldSchema = fieldSchema.max(
            field.maxLength,
            `${field.label} max length is ${field.maxLength}`
          );
        }
        break;
      case FormFields.TEXTAREA:
        fieldSchema = yup.string();
        if (field.maxLength !== undefined) {
          fieldSchema = fieldSchema.max(
            field.maxLength,
            `${field.label} max length is ${field.maxLength}`
          );
        }
        break;
      case FormFields.DATE_TIME:
        fieldSchema = yup.date();
        if (field.minDate !== undefined) {
          fieldSchema = fieldSchema.min(
            field.minDate,
            `${field.label} min date should be ${field.minDate}`
          );
        }
        if (field.maxDate !== undefined) {
          fieldSchema = fieldSchema.max(
            field.maxDate,
            `${field.label} max date should be ${field.maxDate}`
          );
        }
        break;

      case FormFields.SLIDER:
        fieldSchema = yup.number();
        break;

      case FormFields.CHECKBOX:
        fieldSchema = yup.array().min(1, 'Please select at least 1 options.');
        break;

      case FormFields.RATING:
        fieldSchema = yup.number();
        if (field.max !== undefined) {
          fieldSchema = fieldSchema.max(
            field.max,
            `${field.label} max value is ${field.max}`
          );
        }
        break;

      case FormFields.RADIO:
        fieldSchema = yup.string();
        break;

      case FormFields.MATRIX_TABLE:
        fieldSchema = yup.array().min(1, 'Please select at least 1 options.');
        break;

      default:
        console.log(`Unsupported field type: ${field.type}`);
    }

    if (field.required) {
      fieldSchema = fieldSchema?.required(`${field.label} is required`);
    }

    // yupSchema = yupSchema.shape({
    //   [generateFormName(field.label, field.id)]: fieldSchema,
    // });

    if (fieldSchema) {
      yupSchema = yupSchema.shape({
        [generateFormName(field.label, field.id)]: fieldSchema,
      });
    }
  });

  return yupSchema;
};

export default generateValidationSchema;
