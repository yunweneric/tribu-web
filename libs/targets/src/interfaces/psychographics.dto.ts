import {
  LifeStyle,
  PersonalityTrait,
  Values,
  Interest,
  SpeedingHabits,
  PoliticalAffiliation,
  Language,
  Children,
} from '../enums/target.num';

export interface PsychographicsDto {
  lifeStyle?: LifeStyle;
  personalityTrait?: PersonalityTrait;
  values?: Values;
  interest?: Interest;
  speedingHabits?: SpeedingHabits;
  movitation?: string;
  brandAffinity?: string;
  mediaComposition?: string;
  politicalAffiliation?: PoliticalAffiliation;
  language?: Language;
  children?: Children;
}

export type UpdatePsychographicsDto = Partial<PsychographicsDto>;
