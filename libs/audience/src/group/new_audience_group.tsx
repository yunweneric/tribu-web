import { AppButton, Chip } from '@tribu/ui';
import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { demographicFormData } from '../forms_data/data/demographic_form_data';
import { AllFormInterfacesType } from '@tribu/forms';
import { DemographicDto, PersonaDto, PsychographicsDto } from '@tribu/targets';
import { psychographicFormData } from '../forms_data/data/psychographic_form_data';
import AudienceGenericFormForm from '../forms_data/forms/audience_generic_form';
import { IBehavioral } from 'libs/targets/src/interfaces/behavioral.dto';
import { behavioralFormData } from '../forms_data/data/behavior_form_data';

enum Parameters {
  Demographics = 'Demographics',
  Psychographics = 'Psychographics',
  Behavior = 'Behavior',
  WeatherAndClimateDto = 'Weather And ClimateDto',
  DeviceType = 'Device type',
  OffLimits = 'Off Limits',
  Location = 'Location',
}

type FormStructure = {
  title: Parameters;
  data: AllFormInterfacesType[];
};

export const NewAudienceGroup = () => {
  const formData: FormStructure[] = [
    { data: demographicFormData, title: Parameters.Demographics },
    { data: psychographicFormData, title: Parameters.Psychographics },
    { data: demographicFormData, title: Parameters.Behavior },
    { data: demographicFormData, title: Parameters.DeviceType },
    { data: demographicFormData, title: Parameters.Location },
  ];

  const [currentParameter, setCurrentParameter] = React.useState<FormStructure>(
    formData[0]
  );

  const [formDataValue, setFormDataValue] = React.useState<
    PersonaDto | undefined
  >({});

  const GenerateForm = () => {
    switch (currentParameter.title) {
      case Parameters.Demographics:
        return (
          <AudienceGenericFormForm<DemographicDto>
            data={formDataValue?.demographic}
            formFields={demographicFormData}
            updateAudienceGenericForm={(data) => {
              setFormDataValue({ ...formDataValue, demographic: data });
            }}
          />
        );
      case Parameters.Psychographics:
        return (
          <AudienceGenericFormForm<PsychographicsDto>
            data={formDataValue?.psychographics}
            formFields={psychographicFormData}
            updateAudienceGenericForm={(data) => {
              setFormDataValue({ ...formDataValue, psychographics: data });
            }}
          />
        );
      case Parameters.Behavior:
        return (
          <AudienceGenericFormForm<IBehavioral>
            data={formDataValue?.behavioral}
            formFields={behavioralFormData}
            updateAudienceGenericForm={(data) => {
              setFormDataValue({ ...formDataValue, behavioral: data });
            }}
          />
        );

      default:
        break;
    }

    return (
      <div className="flex items-center justify-center h-[50vh]">
        No Form added yet!
      </div>
    );
  };
  console.log(formDataValue);

  return (
    <div>
      <div className="w-full h-[88vh]">
        <div className="flex w-[90%] mx-auto  border-b-gray-100">
          <div className="flex w-1/2">
            <div className="w-1/4 py-10">
              {formData.map((parameter, index) => (
                <div
                  key={`{${parameter}-x-${index}`}
                  className={`py-2 cursor-pointer pl-2 text-sm ${
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
              <GenerateForm />
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
            additionalClassName="rounded-none w-32 justify-center item-center"
          />
        </div>
      </div>
    </div>
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
            <Chip
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
            <Chip
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
            <Chip
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

    default:
      break;
  }
};

export default NewAudienceGroup;
