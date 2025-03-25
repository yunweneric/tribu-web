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
    title: 'age',
    type: 'radio',
    required: true,
    values: Object.values(Age),
  },
  {
    title: 'children',
    type: 'checkbox',
    required: true,
    values: Object.values(Children),
  },
  {
    title: 'Income Level',
    type: 'radio',
    required: true,
    values: Object.values(IncomeDefault),
  },
  {
    title: 'Income Level',
    type: 'radio',
    required: true,
    values: Object.values(IncomeDefault),
  },
  {
    title: 'Educational Level',
    type: 'radio',
    required: true,
    values: Object.values(Education),
  },
  {
    title: 'Educational Level',
    type: 'radio',
    required: true,
    values: Object.values(MaritalStatus),
  },
  {
    title: 'Household Size',
    type: 'input',
    required: true,
  },
  {
    title: 'Ethnicity',
    type: 'radio',
    required: true,
    values: Object.values(Ethnicity),
  },
  {
    title: 'Language',
    type: 'radio',
    required: true,
    values: Object.values(Language),
  },
];
