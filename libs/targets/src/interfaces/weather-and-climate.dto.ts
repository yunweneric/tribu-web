import { Season, TimesOfDay, WeatherCondition } from '../enums/target.num';

export interface WeatherAndClimateDto {
  temperature?: number;
  humidity?: number;
  windSpeed?: number;
  visibility?: number;
  cloudCoverage?: number;
  uvIndex?: number;
  weatherCondition?: WeatherCondition;
  timesOfDay?: TimesOfDay;
  season?: Season;
  airQualityIndex?: number;
  sunriseTime?: Date;
  sunsetTime?: Date;
}

export interface UpdateWeatherAndClimateDto
  extends Partial<WeatherAndClimateDto> {}
