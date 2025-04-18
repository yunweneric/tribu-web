import { ReggionType } from '../enums/target.num';

export interface ILocationDto {
  country?: string;
  region?: string;
  city?: string;
  postalCode?: string;
  latitude?: number;
  longitude?: number;
  neighborhood?: string;
  proximityToLandmark?: string;
  timeZone?: string;
  regionType?: ReggionType;
}
