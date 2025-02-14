import { FC } from "react";
import { FormFields } from "../../../data/enum";
import FormInputField from "./form_input_field";
import FormTextArea from "./form_textarea";
import FormSlider from "./form_slider";
import FormRating from "./form_rating";
import FormRadioSelect from "./form_radio";
import FormCheckBox from "./form_checkboxes";
import { AllFormInterfacesType } from "../../../data/types/all_form_types";
import FormNumberField from "./form_number_field";
import FormDivider from "./form_divider";
import FormMatrix from "./form_matrix";
import FormDateField from "./form_date_field";
import FormRankingField from "./form_ranking";
import FormParagraph from "./form_paragraph";

const FormFieldRenderer: FC<AllFormInterfacesType> = (
  item: AllFormInterfacesType
) => {
  switch (item.type) {
    case FormFields.INPUT:
      return <FormInputField {...item} />;

    case FormFields.TEXTAREA:
      return <FormTextArea {...item} />;

    case FormFields.PARAGRAPH:
      return <FormParagraph {...item} />;

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
