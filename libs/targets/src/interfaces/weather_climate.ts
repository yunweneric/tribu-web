export interface WeatherClimate {
  Temperature: number;
  Humidity: number;
  Precipitation: string; // Enum
  WindSpeed: number;
  WindDirection: string; // Enum
  Visibility: number;
  CloudCoverage: number;
  UVIndex: number;
  WeatherCondition: string; // Enum
  Season: string; // Enum
  TimeOfDay: string; // Enum
  AirQualityIndex: number;
  SunriseSunsetTime: string; // Time
}
