import { AppButton, AppChip } from '@tribu/ui';
import React, { useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { demographicFormData } from '../forms_data/data/demographic_form_data';
import { generateFormName, generateValidationSchema } from '@tribu/forms';
import { PersonaDto } from '@tribu/targets';
import { psychographicFormData } from '../forms_data/data/psychographic_form_data';
import { behavioralFormData } from '../forms_data/data/behavior_form_data';
import { weatherAndClimateFormData } from '../forms_data/data/weather_and_climate_form_data';
import { transactionFormData } from '../forms_data/data/transaction_form_data';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormStructure, Parameters } from '../enums/form_enums';
import GenerateForm from '../forms_data/forms/new_audience_form';

export const NewAudienceGroup = () => {
  console.log('Rendering NewAudienceGroup ....');
  const formData: FormStructure[] = [
    { data: demographicFormData, title: Parameters.Demographics },
    { data: psychographicFormData, title: Parameters.Psychographics },
    { data: behavioralFormData, title: Parameters.Behavior },
    { data: weatherAndClimateFormData, title: Parameters.WeatherAndClimate },
    { data: transactionFormData, title: Parameters.TransactionalData },
    { data: demographicFormData, title: Parameters.DeviceType },
    { data: demographicFormData, title: Parameters.Location },
  ];
  const [validationSchema, setValidationSchema] = useState<any>();

  const schema = generateValidationSchema(
    formData
      .map((item) =>
        item.data.map((field) => {
          return {
            ...field,
            name: generateFormName(item.title, field.label),
          };
        })
      )
      .flat()
  );

  useEffect(() => {
    setValidationSchema(schema);
  }, []);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [currentParameter, setCurrentParameter] = React.useState<FormStructure>(
    formData[0]
  );

  const [formDataValue, setFormDataValue] = React.useState<
    PersonaDto | undefined
  >({});

  const onSubmit = (data: Record<string, any>) => {
    // console.log('data', data);

    const groupedData: Record<string, any> = {};

    Object.entries(data).forEach(([key, value]) => {
      const [category, attribute] = key.split('-');
      // Format keys by replacing spaces with underscores and making them lowercase
      const formattedCategory = category.toLowerCase().replace(/\s+/g, '_');
      const formattedAttribute = attribute.toLowerCase().replace(/\s+/g, '_');

      if (!groupedData[formattedCategory]) {
        groupedData[formattedCategory] = {};
      }
      groupedData[formattedCategory][formattedAttribute] = value;
      // console.log('groupedData', value);
    });

    console.log('groupedData', groupedData);
    return groupedData;
    // };
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div>
        <div className="w-full h-[88vh]">
          <div className="flex w-[90%] mx-auto  border-b-gray-100">
            <div className="flex w-1/2">
              <div className="w-1/4 py-10">
                {formData.map((parameter, index) => (
                  <div
                    key={`{${parameter}-x-${index}`}
                    className={`py-4 cursor-pointer pl-2 text-sm ${
                      currentParameter.title === parameter.title
                        ? 'bg-gray-100 border-r-primary-500 border-r-2'
                        : ''
                    }`}
                    onClick={() => setCurrentParameter(parameter)}
                  >
                    {parameter.title}
                  </div>
                ))}
              </div>
              <div className="border-l border-gray-50 px-12 py-10 grow overflow-y-scroll h-[80vh]">
                <GenerateForm
                  formDataValue={formDataValue}
                  currentParameter={currentParameter}
                  setFormDataValue={(data: PersonaDto) => {
                    setFormDataValue(data);
                  }}
                  control={control}
                />
              </div>
            </div>
            <div className="flex w-1/2 h-[80vh] overflow-y-auto">
              <div className="flex flex-col w-full">
                {Object.values(Parameters).map((parameter, index) => (
                  <div
                    className="flex w-full border-b  border-gray-100 grow"
                    key={`{${parameter}-${index}`}
                  >
                    <div
                      className={`flex w-1/4 cursor-pointer text-sm items-center bg-gray-50 px-5`}
                    >
                      {parameter}
                    </div>
                    <div className="flex w-full flex-wrap   py-4 items-center px-5 gap-x-2 gap-y-2">
                      {formDataValue && (
                        <GenerateChipPreview
                          persona={formDataValue}
                          parameter={parameter}
                          updatePersona={(data) => {
                            setFormDataValue(data);
                          }}
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="border-b border-b-gray-50 w-full"></div>
          <div className="flex justify-end w-[90%] mx-auto mt-5">
            <AppButton
              label="Save"
              type="submit"
              additionalClassName="rounded-none w-32 justify-center item-center"
            />
          </div>
        </div>
      </div>
    </form>
  );
};
const GenerateChipPreview = ({
  persona,
  parameter,
  updatePersona,
}: {
  persona?: PersonaDto;
  parameter: Parameters;
  updatePersona: (data: PersonaDto) => undefined;
}) => {
  if (!persona) return <></>;

  switch (parameter) {
    case Parameters.Demographics:
      return (
        persona.demographic &&
        Object.keys(persona.demographic).map((key, index) => {
          const item = key as keyof typeof persona.demographic;
          return (
            <AppChip
              label={persona.demographic?.[item]?.toString() || ''}
              key={`${item}-y-${index}`}
              additionClasses="bg-gray-50 text-gray-800 font-light px-4  border border-gray-100 text-sm hover:border-gray-100"
              icon={
                <IoMdClose
                  className="hover:bg-gray-100 rounded-full w-6 h-6 p-1 "
                  onClick={() => {
                    const updatedDemographic = { ...persona.demographic };
                    delete updatedDemographic[item];
                    updatePersona({
                      ...persona,
                      demographic: updatedDemographic,
                    });
                  }}
                />
              }
            />
          );
        })
      );
    case Parameters.Psychographics:
      return (
        persona.psychographics &&
        Object.keys(persona.psychographics).map((key, index) => {
          const item = key as keyof typeof persona.psychographics;
          return (
            <AppChip
              label={persona.psychographics?.[item]?.toString() || ''}
              key={`${item}-y-${index}`}
              additionClasses="bg-gray-50 text-gray-800 font-light px-4  border border-gray-100 text-sm hover:border-gray-100"
              icon={
                <IoMdClose
                  className="hover:bg-gray-100 rounded-full w-6 h-6 p-1 "
                  onClick={() => {
                    const updatedDemographic = { ...persona.psychographics };
                    delete updatedDemographic[item];
                    updatePersona({
                      ...persona,
                      psychographics: updatedDemographic,
                    });
                  }}
                />
              }
            />
          );
        })
      );
    case Parameters.Behavior:
      return (
        persona.behavioral &&
        Object.keys(persona.behavioral).map((key, index) => {
          const item = key as keyof typeof persona.behavioral;
          return (
            <AppChip
              label={persona.behavioral?.[item]?.toString() || ''}
              key={`${item}-y-${index}`}
              additionClasses="bg-gray-50 text-gray-800 font-light px-4  border border-gray-100 text-sm hover:border-gray-100"
              icon={
                <IoMdClose
                  className="hover:bg-gray-100 rounded-full w-6 h-6 p-1 "
                  onClick={() => {
                    const updatedDemographic = { ...persona.behavioral };
                    delete updatedDemographic[item];
                    updatePersona({
                      ...persona,
                      behavioral: updatedDemographic,
                    });
                  }}
                />
              }
            />
          );
        })
      );

    case Parameters.WeatherAndClimate:
      return (
        persona.weatherAndClimate &&
        Object.keys(persona.weatherAndClimate).map((key, index) => {
          const item = key as keyof typeof persona.weatherAndClimate;
          return (
            <AppChip
              label={persona.weatherAndClimate?.[item]?.toString() || ''}
              key={`${item}-y-${index}`}
              additionClasses="bg-gray-50 text-gray-800 font-light px-4  border border-gray-100 text-sm hover:border-gray-100"
              icon={
                <IoMdClose
                  className="hover:bg-gray-100 rounded-full w-6 h-6 p-1 "
                  onClick={() => {
                    const updatedWeatherAndClimate = {
                      ...persona.weatherAndClimate,
                    };
                    delete updatedWeatherAndClimate[item];
                    updatePersona({
                      ...persona,
                      weatherAndClimate: updatedWeatherAndClimate,
                    });
                  }}
                />
              }
            />
          );
        })
      );
    case Parameters.TransactionalData:
      return (
        persona.transactionalData &&
        Object.keys(persona.transactionalData).map((key, index) => {
          const item = key as keyof typeof persona.transactionalData;
          return (
            <AppChip
              label={persona.transactionalData?.[item]?.toString() || ''}
              key={`${item}-y-${index}`}
              additionClasses="bg-gray-50 text-gray-800 font-light px-4  border border-gray-100 text-sm hover:border-gray-100"
              icon={
                <IoMdClose
                  className="hover:bg-gray-100 rounded-full w-6 h-6 p-1 "
                  onClick={() => {
                    const updatedTransactionalData = {
                      ...persona.transactionalData,
                    };
                    delete updatedTransactionalData[item];
                    updatePersona({
                      ...persona,
                      transactionalData: updatedTransactionalData,
                    });
                  }}
                />
              }
            />
          );
        })
      );

    default:
      break;
  }
};

export default NewAudienceGroup;
