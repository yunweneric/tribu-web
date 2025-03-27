import {
  Age,
  Children,
  Education,
  Ethnicity,
  IncomeDefault,
  Language,
  MaritalStatus,
} from '@tribu/targets';
export const demographicData: Field[] = [
  {
    label: 'Age',
    type: 'radio',
    required: true,
    values: Object.values(Age),
  },
  {
    label: 'children',
    type: 'checkbox',
    required: true,
    values: Object.values(Children),
  },
  {
    label: 'Income Level',
    type: 'radio',
    required: true,
    values: Object.values(IncomeDefault),
  },
  {
    label: 'Income Level',
    type: 'radio',
    required: true,
    values: Object.values(IncomeDefault),
  },
  {
    label: 'Educational Level',
    type: 'radio',
    required: true,
    values: Object.values(Education),
  },
  {
    label: 'Educational Level',
    type: 'radio',
    required: true,
    values: Object.values(MaritalStatus),
  },
  {
    label: 'Household Size',
    type: 'input',
    required: true,
  },
  {
    label: 'Ethnicity',
    type: 'radio',
    required: true,
    values: Object.values(Ethnicity),
  },
  {
    label: 'Language',
    type: 'radio',
    required: true,
    values: Object.values(Language),
  },
];
