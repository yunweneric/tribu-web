import { AllFormInterfacesType, FormFields } from '@tribu/forms';
import {
  Age,
  Children,
  Education,
  Ethnicity,
  IncomeDefault,
  Language,
  MaritalStatus,
} from '@tribu/targets';
export const demographicFormData: AllFormInterfacesType[] = [
  {
    id: '',
    index: 0,
    activeSectionIndex: 0,
    // selectedElements: [],
    name: 'age',
    icon: 'age',
    label: 'Age',
    placeholder: 'Age',
    value: '',
    type: FormFields.RADIO,
    required: true,
    elements: Object.values(Age).map((item) => {
      return {
        value: item,
        label: item,
      };
    }),
  },
  {
    id: '',
    index: 0,
    activeSectionIndex: 0,
    // selectedElements: [],
    name: 'children',
    placeholder: 'Children',
    icon: 'Children',
    label: 'Children',
    value: '',
    type: FormFields.RADIO,
    required: true,
    elements: Object.values(Children).map((item) => {
      return {
        value: item,
        label: item,
      };
    }),
  },
  {
    label: 'Income Level',
    placeholder: 'Income Level',
    required: true,
    id: '',
    index: 0,
    activeSectionIndex: 0,
    value: 0,
    name: 'income',
    icon: 'income',
    type: FormFields.RADIO,
    elements: Object.values(IncomeDefault).map((item) => {
      return {
        value: item,
        label: item,
      };
    }),
  },

  {
    label: 'Educational Level',
    placeholder: 'Educational Level',
    required: true,
    id: '',
    index: 0,
    activeSectionIndex: 0,
    value: 0,
    name: 'education_level',
    icon: 'education_level',
    type: FormFields.RADIO,
    elements: Object.values(Education).map((item) => {
      return {
        value: item,
        label: item,
      };
    }),
  },

  {
    label: 'Household Size',
    placeholder: 'Household Size',
    id: '',
    index: 0,
    activeSectionIndex: 0,
    name: 'household_size',
    icon: 'Household Size',
    value: '',
    type: FormFields.INPUT,
    required: true,
  },
  {
    placeholder: 'Ethnicity',
    label: 'Ethnicity',
    required: true,
    id: '',
    index: 0,
    activeSectionIndex: 0,
    value: 0,
    name: 'ethnicity',
    icon: 'ethnicity',
    type: FormFields.RADIO,
    elements: Object.values(Ethnicity).map((item) => {
      return {
        value: item,
        label: item,
      };
    }),
  },
  {
    label: 'Language',
    required: true,
    id: '',
    index: 0,
    activeSectionIndex: 0,
    value: 0,
    name: 'language',
    icon: 'language',
    type: FormFields.RADIO,
    elements: Object.values(Language).map((item) => {
      return {
        value: item,
        label: item,
      };
    }),
  },
];
