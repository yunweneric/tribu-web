import { AllFormInterfacesType } from '@tribu/forms';

export interface CreateAudience {
  name: string;
  description: string;
  isTemplate: boolean;
  metaData: CreateAudienceMetaData;
  blocs: Bloc;
}

export interface Bloc {
  key: string;
  questions: Question[];
}

export interface BlocMetaData {
  title: string;
}

// export interface FormStructure {
//   key: string;
//   questions: Question[];
// }

export interface Question {
  metaData: AllFormInterfacesType;
  key: string;
  name: string;
  description: string;
  type: string;
}

export interface CreateAudienceMetaData {}
