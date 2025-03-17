import {
  Age,
  Children,
  Education,
  Ethnicity,
  Gender,
  IncomeDefault,
  Language,
  MaritalStatus,
} from '../enums/target.num';

export interface DemographicDto {
  age?: Age;
  gender?: Gender;
  income?: IncomeDefault;
  education?: Education;
  maritalStatus?: MaritalStatus;
  householdSize?: number;
  ethnicity?: Ethnicity;
  language?: Language;
  children?: Children;
}
