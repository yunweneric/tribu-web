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
import { FormStructure, Parameters } from '../../../data/enums/form_enums';

export interface NewAudienceFormProps {
  formDataValue: PersonaDto | undefined;
  currentParameter: FormStructure;
  setFormDataValue: (data: PersonaDto) => void;
  updateFormFieldValue: (data: FormStructure) => void;
  control: any;
}
const GenerateForm = ({
  currentParameter,
  control,
  formDataValue,
  setFormDataValue,
  updateFormFieldValue,
}: NewAudienceFormProps) => {
  switch (currentParameter.title) {
    case Parameters.Demographics:
      return (
        <AudienceGenericFormFIeldsForm<DemographicDto>
          data={formDataValue?.demographic}
          formFields={demographicFormData}
          formTitle={Parameters.Demographics}
          control={control}
          updateField={(index, value) => {
            currentParameter.data[index].value = value;
            updateFormFieldValue(currentParameter);
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
            currentParameter.data[index].value = value;
            updateFormFieldValue(currentParameter);
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
            currentParameter.data[index].value = value;
            updateFormFieldValue(currentParameter);
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
            currentParameter.data[index].value = value;
            updateFormFieldValue(currentParameter);
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
            currentParameter.data[index].value = value;
            updateFormFieldValue(currentParameter);
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
