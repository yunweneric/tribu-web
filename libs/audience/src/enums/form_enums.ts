import { AllFormInterfacesType } from '@tribu/forms';

export enum Parameters {
  Demographics = 'Demographics',
  Psychographics = 'Psychographics',
  Behavior = 'Behavior',
  WeatherAndClimate = 'Weather And Climate',
  TransactionalData = 'Transactional Data',
  DeviceType = 'Device type',
  Location = 'Location',
}
export type FormStructure = {
  title: Parameters;
  data: AllFormInterfacesType[];
};
