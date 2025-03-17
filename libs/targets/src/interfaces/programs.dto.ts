import { PriceModel } from '../enums/instanvi.enum';

export interface ProgramsDto {
  programId?: string;
  vendorId?: string;
  name: string;
  description: string;
  adChannelIds?: string[];
  pricModel?: PriceModel;
  personaPreference: {
    location: {
      phone: string;
      email: string;
      address: string;
    };
    demorgraphics: {
      gender: string;
      age: number;
    };
    psychographics: {
      interest: string[];
      behavior: string[];
    };
  };
  maxUnitsPerDay: number;
  termsAndConditioons: string;
  inventoryManagement: {
    totalUnits: number;
    availableUnits: number;
    dayParting: {
      moring: number;
      afternoon: number;
      evening: number;
    };
  };
  performanceMetrics: {
    conversions: {
      daily: number;
      weekly: number;
      monthly: number;
    };
    bounceRate: {
      daily: number;
      weekly: number;
      monthly: number;
    };
    averageOrderValue: {
      daily: number;
      weekly: number;
      monthly: number;
    };
  };
}

export type UpdateProgramsDto = Partial<ProgramsDto>;
