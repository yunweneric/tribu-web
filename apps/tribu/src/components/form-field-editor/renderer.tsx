import { Box } from "@mui/material";
import { FormFields } from "../../data/enum";
import FormInputRenderer from "./components/input";
import { FC } from "react";
import FormRadioRenderer from "./components/radio";
import { AllFormInterfacesType } from "../../data/types/all_form_types";
import FormTextAreaRenderer from "./components/textarea";
import FormInputNumberRenderer from "./components/number";
import FormRatingRenderer from "./components/rating";
import FormSliderRenderer from "./components/slider";
import FormMatrixRenderer from "./components/matrix";
import FormDateFieldRenderer from "./components/datefield";
import FormRankingRenderer from "./components/ranking";

interface FormEditorRendererProps {
  field: AllFormInterfacesType;
}

const FormEditorRenderer: FC<FormEditorRendererProps> = ({ field }) => {
  switch (field.type) {
    case FormFields.INPUT:
      return <FormInputRenderer {...field} />;

    case FormFields.NUMBER_INPUT:
      return <FormInputNumberRenderer {...field} />;

    case FormFields.DATE_TIME:
      return <FormDateFieldRenderer {...field} />; // Update the type of FormDateFieldRenderer to TextInputInterface

    case FormFields.SLIDER:
      return <FormSliderRenderer {...field} />;

    case FormFields.RATING:
      return <FormRatingRenderer {...field} />;

    case FormFields.TEXTAREA:
      return <FormTextAreaRenderer {...field} />;

    case FormFields.PARAGRAPH:
      return <FormTextAreaRenderer {...field} />;

    case FormFields.RADIO:
      return <FormRadioRenderer {...field} />;

    case FormFields.CHECKBOX:
      return <FormRadioRenderer {...field} />;

    case FormFields.MATRIX_TABLE:
      return <FormMatrixRenderer {...field} />;

    case FormFields.RANKING:
      return <FormRankingRenderer {...field} />;

    default:
      break;
  }
  return <Box></Box>;
};

export default FormEditorRenderer;
