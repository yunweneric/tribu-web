import { AllFormInterfacesType, FormFields } from '@tribu/forms';
import {
  Age,
  Children,
  Education,
  Ethnicity,
  IncomeDefault,
  Interest,
  Language,
  LifeStyle,
  MaritalStatus,
  PersonalityTrait,
  PoliticalAffiliation,
  Values,
} from '@tribu/targets';
export const psychographicFormData: AllFormInterfacesType[] = [
  {
    id: '',
    index: 0,
    activeSectionIndex: 0,
    name: 'lifeStyle',
    icon: 'lifeStyle',
    label: 'LifeStyle',
    placeholder: 'LifeStyle',
    value: '',
    type: FormFields.RADIO,
    required: true,
    elements: Object.values(LifeStyle).map((item) => {
      // return {
      //   value: item,
      //   label: item,
      // };
      return item;
    }),
  },
  {
    id: '',
    index: 0,
    activeSectionIndex: 0,
    name: 'personalityTrait',
    placeholder: 'personalityTrait',
    icon: 'personalityTrait',
    label: 'Personality Trait',
    value: '',
    type: FormFields.RADIO,
    required: true,
    elements: Object.values(PersonalityTrait).map((item) => {
      // return {
      //   value: item,
      //   label: item,
      // };
      return item;
    }),
  },
  {
    label: 'Values',
    placeholder: 'Select values',
    required: true,
    id: '',
    index: 0,
    activeSectionIndex: 0,
    value: 0,
    name: 'values',
    icon: 'values',
    type: FormFields.RADIO,
    elements: Object.values(Values).map((item) => {
      // return {
      //   value: item,
      //   label: item,
      // };
      return item;
    }),
  },

  {
    label: 'Interest',
    placeholder: 'Interest',
    required: true,
    id: '',
    index: 0,
    activeSectionIndex: 0,
    value: 0,
    name: 'interest',
    icon: 'interest',
    type: FormFields.RADIO,
    elements: Object.values(Interest).map((item) => {
      // return {
      //   value: item,
      //   label: item,
      // };
      return item;
    }),
  },

  {
    label: 'Movitation',
    placeholder: 'Movitation',
    id: '',
    index: 0,
    activeSectionIndex: 0,
    name: 'movitation',
    icon: 'movitation',
    value: '',
    type: FormFields.INPUT,
    required: true,
  },
  {
    label: 'Brand Affinity',
    placeholder: 'Brand Affinity',
    id: '',
    index: 0,
    activeSectionIndex: 0,
    name: 'brandAffinity',
    icon: 'brandAffinity',
    value: '',
    type: FormFields.INPUT,
    required: true,
  },
  {
    label: 'Media Composition',
    placeholder: 'Media Composition',
    id: '',
    index: 0,
    activeSectionIndex: 0,
    name: 'mediaComposition',
    icon: 'mediaComposition',
    value: '',
    type: FormFields.INPUT,
    required: true,
  },
  {
    placeholder: 'Speeding Habits',
    label: 'Speeding Habits',
    required: true,
    id: '',
    index: 0,
    activeSectionIndex: 0,
    value: 0,
    name: 'speedingHabits',
    icon: 'speedingHabits',
    type: FormFields.RADIO,
    elements: Object.values(Ethnicity).map((item) => {
      // return {
      //   value: item,
      //   label: item,
      // };
      return item;
    }),
  },
  {
    label: 'Political Affiliation',
    required: true,
    id: '',
    index: 0,
    activeSectionIndex: 0,
    value: 0,
    name: 'politicalAffiliation',
    icon: 'politicalAffiliation',
    type: FormFields.RADIO,
    elements: Object.values(PoliticalAffiliation).map((item) => {
      // return {
      //   value: item,
      //   label: item,
      // };
      return item;
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
      // return {
      //   value: item,
      //   label: item,
      // };
      return item;
    }),
  },
  {
    label: 'Children',
    required: true,
    id: '',
    index: 0,
    activeSectionIndex: 0,
    value: 0,
    name: 'children',
    icon: 'children',
    type: FormFields.RADIO,
    elements: Object.values(Children).map((item) => {
      // return {
      //   value: item,
      //   label: item,
      // };
      return item;
    }),
  },
];
