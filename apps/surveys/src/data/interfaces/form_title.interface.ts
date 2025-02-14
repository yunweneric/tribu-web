import { FormFields } from "../enum";
export interface FormTitleInterface {
  type: FormFields.FORM_TITLE;
  label: string;
  description: string;
  id: string;
  isPreview?: boolean;
}

export interface FormDescriptionInterface {
  type: FormFields.FORM_DESCRIPTION;
  label: string;
  description: string;
  id: string;
  isPreview?: boolean;
}
