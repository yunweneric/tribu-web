import { AllFormInterfacesType } from '../types/all_form_types';
import {
  FormDescriptionInterface,
  FormTitleInterface,
} from './form_title.interface';
import { TextInputInterface } from './input.interface';

export interface FormSection {
  id: string;
  index: number;
  formItems: AllFormInterfacesType[];
}

export interface AppFormState {
  selectedField: TextInputInterface | null;
  formTitle: FormTitleInterface;
  formDescription: FormDescriptionInterface;
  isPreview?: boolean;
  activeSection: number;
  sections: FormSection[];
}
