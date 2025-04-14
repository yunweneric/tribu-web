import {
  AllFormInterfacesType,
  FormCheckBox,
  FormDateField,
  FormFields,
  FormInputField,
  FormMatrix,
  FormNumberField,
  FormParagraph,
  FormRadioSelect,
  FormRankingField,
  FormRating,
  FormSlider,
  FormTextArea,
  TextAreaInterface,
  TextInputInterface,
} from '@tribu/forms';
import { FC } from 'react';
import FormDivider from './form_divider';

const FormFieldRenderer: FC<AllFormInterfacesType> = (
  item: AllFormInterfacesType
) => {
  switch (item.type) {
    case FormFields.INPUT:
      return <FormInputField {...(item as TextInputInterface)} />;

    case FormFields.TEXTAREA:
      return <FormTextArea {...item} />;

    case FormFields.PARAGRAPH:
      return <FormParagraph {...(item as TextAreaInterface)} />;

    case FormFields.NUMBER_INPUT:
      return <FormNumberField {...item} />;

    case FormFields.DIVIDER:
      return <FormDivider {...item} />;

    case FormFields.DATE_TIME:
      return <FormDateField {...item} />;

    case FormFields.SLIDER:
      return <FormSlider {...item} />;

    case FormFields.RATING:
      return <FormRating {...item} />;

    case FormFields.RADIO:
      return <FormRadioSelect {...item} />;

    case FormFields.CHECKBOX:
      return <FormCheckBox {...item} />;

    case FormFields.RANKING:
      return <FormRankingField {...item} />;

    case FormFields.MATRIX_TABLE:
      return <FormMatrix {...item} />;

    default:
      break;
  }
};

export default FormFieldRenderer;
