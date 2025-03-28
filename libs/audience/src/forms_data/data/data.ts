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
export const demographicData: AllFormInterfacesType[] = [
  {
    id: '',
    index: 0,
    activeSectionIndex: 0,
    selectedElements: [],
    name: 'Age',
    icon: 'Age',
    label: 'Age',
    placeholder: 'Age',
    value: '',
    type: FormFields.CHECKBOX,
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
    selectedElements: [],
    name: 'Children',
    placeholder: 'Children',
    icon: 'Children',
    label: 'Children',
    value: '',
    type: FormFields.CHECKBOX,
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
    name: 'Children',
    icon: 'Children',
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
    name: 'Children',
    icon: 'Children',
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
    name: 'Household Size',
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
    name: 'Children',
    icon: 'Children',
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
    name: 'Children',
    icon: 'Children',
    type: FormFields.RADIO,
    elements: Object.values(Language).map((item) => {
      return {
        value: item,
        label: item,
      };
    }),
  },
];
