import { DemographicDto } from './demographic.dto';
import { PsychographicsDto } from './psychographics.dto';
import { WeatherAndClimateDto } from './weather-and-climate.dto';
import { SocialDataDto } from './social-data.dto';
import { ILocationDto } from './location.dto';
import { IBehavioral } from './behavioral.dto';
import { IDeviceDto } from './device.dto';
import { TransactionDataDto } from './transactional_data.dto';

export interface PersonaDto {
  location?: ILocationDto;
  demographic?: DemographicDto;
  psychographics?: PsychographicsDto;
  behavioral?: IBehavioral;
  device?: IDeviceDto;
  weatherAndClimate?: WeatherAndClimateDto;
  socialData?: SocialDataDto;
  audienceSize?: number;
  transactionalData?: TransactionDataDto;
}

export interface UpdatePersonaDto extends Partial<PersonaDto> {}
