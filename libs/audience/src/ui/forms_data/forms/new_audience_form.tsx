import { AudienceGLMap } from '@tribu/maps';
import AudienceGenericFormFIeldsForm from './generic_fields';
import {
  DemographicDto,
  PersonaDto,
  PsychographicsDto,
  TransactionDataDto,
} from '@tribu/targets';
import { IBehavioral } from 'libs/targets/src/interfaces/behavioral.dto';
import { WeatherAndClimateDto } from 'libs/targets/src/interfaces/weather-and-climate.dto';
import { behavioralFormData } from '../data/behavior_form_data';
import { demographicFormData } from '../data/demographic_form_data';
import { psychographicFormData } from '../data/psychographic_form_data';
import { transactionFormData } from '../data/transaction_form_data';
import { weatherAndClimateFormData } from '../data/weather_and_climate_form_data';
import { Parameters } from '../../../data/enums/form_enums';
import { Bloc } from 'libs/audience/src/data/interfaces/create_audience';

export interface NewAudienceFormProps {
  formDataValue: PersonaDto | undefined;
  currentBloc: Bloc;
  setFormDataValue: (data: PersonaDto) => void;
  updateBloc: (data: Bloc) => void;
  control: any;
}
const GenerateForm = ({
  currentBloc,
  control,
  formDataValue,
  setFormDataValue,
  updateBloc,
}: NewAudienceFormProps) => {
  switch (currentBloc.key) {
    case Parameters.Demographics:
      return (
        <AudienceGenericFormFIeldsForm<DemographicDto>
          data={formDataValue?.demographic}
          formFields={demographicFormData}
          formTitle={Parameters.Demographics}
          control={control}
          updateField={(index, value) => {
            currentBloc.questions[index].metaData.value = value;
            currentBloc.questions[index].description = value;
            updateBloc(currentBloc);
          }}
          updateAudienceGenericFormFIelds={(data) => {
            setFormDataValue({ ...formDataValue, demographic: data });
          }}
        />
      );
    case Parameters.Psychographics:
      return (
        <AudienceGenericFormFIeldsForm<PsychographicsDto>
          data={formDataValue?.psychographics}
          formFields={psychographicFormData}
          control={control}
          formTitle={Parameters.Psychographics}
          updateAudienceGenericFormFIelds={(data) => {
            setFormDataValue({ ...formDataValue, psychographics: data });
          }}
          updateField={(index, value) => {
            currentBloc.questions[index].metaData.value = value;
            currentBloc.questions[index].description = value;
            updateBloc(currentBloc);
          }}
        />
      );
    case Parameters.Behavior:
      return (
        <AudienceGenericFormFIeldsForm<IBehavioral>
          data={formDataValue?.behavioral}
          formFields={behavioralFormData}
          control={control}
          formTitle={Parameters.Behavior}
          updateAudienceGenericFormFIelds={(data) => {
            setFormDataValue({ ...formDataValue, behavioral: data });
          }}
          updateField={(index, value) => {
            currentBloc.questions[index].metaData.value = value;
            currentBloc.questions[index].description = value;
            updateBloc(currentBloc);
          }}
        />
      );
    case Parameters.WeatherAndClimate:
      return (
        <AudienceGenericFormFIeldsForm<WeatherAndClimateDto>
          data={formDataValue?.weatherAndClimate}
          formFields={weatherAndClimateFormData}
          control={control}
          formTitle={Parameters.WeatherAndClimate}
          updateAudienceGenericFormFIelds={(data) => {
            setFormDataValue({ ...formDataValue, weatherAndClimate: data });
          }}
          updateField={(index, value) => {
            currentBloc.questions[index].metaData.value = value;
            currentBloc.questions[index].description = value;
            updateBloc(currentBloc);
          }}
        />
      );
    case Parameters.TransactionalData:
      return (
        <AudienceGenericFormFIeldsForm<TransactionDataDto>
          control={control}
          data={formDataValue?.transactionalData}
          formFields={transactionFormData}
          formTitle={Parameters.TransactionalData}
          updateAudienceGenericFormFIelds={(data) => {
            setFormDataValue({ ...formDataValue, transactionalData: data });
          }}
          updateField={(index, value) => {
            currentBloc.questions[index].metaData.value = value;
            currentBloc.questions[index].description = value;
            updateBloc(currentBloc);
          }}
        />
      );

    case Parameters.Location:
      return <AudienceGLMap />;

    default:
      break;
  }

  return (
    <div className="flex items-center justify-center h-[50vh]">
      No Form added yet!
    </div>
  );
};

export default GenerateForm;
