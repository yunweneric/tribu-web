import { AppButton, AppChip } from '@tribu/ui';
import { useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { demographicFormData } from '../../ui/forms_data/data/demographic_form_data';
import { generateFormName, generateValidationSchema } from '@tribu/forms';
import { PersonaDto } from '@tribu/targets';
import { psychographicFormData } from '../../ui/forms_data/data/psychographic_form_data';
import { weatherAndClimateFormData } from '../../ui/forms_data/data/weather_and_climate_form_data';
import { transactionFormData } from '../../ui/forms_data/data/transaction_form_data';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import GenerateForm from '../../ui/forms_data/forms/new_audience_form';
import AudienceController from '../../controllers/audience_controller';
import { useApi } from '@tribu/utils';
import { Parameters } from '../../data/enums/form_enums';
import { Bloc, CreateAudience } from '../../data/interfaces/create_audience';

export const NewAudienceGroup = () => {
  console.log('Rendering NewAudienceGroup ....');
  const allBlocs: Bloc[] = [
    {
      questions: [
        ...demographicFormData.map((item, index) => ({
          metaData: item,
          key: `${Parameters.Demographics}-${index}`,
          name: item.name,
          description: '',
          type: item.type,
        })),
      ],
      key: Parameters.Demographics,
    },

    {
      questions: [
        ...psychographicFormData.map((item, index) => ({
          metaData: item,
          key: `${Parameters.Psychographics}-${index}`,
          name: item.name,
          description: '',
          type: item.type,
        })),
      ],
      key: Parameters.Psychographics,
    },

    {
      questions: [
        ...weatherAndClimateFormData.map((item, index) => ({
          metaData: item,
          key: `${Parameters.WeatherAndClimate}-${index}`,
          name: item.name,
          description: '',
          type: item.type,
        })),
      ],
      key: Parameters.WeatherAndClimate,
    },
    {
      questions: [
        ...transactionFormData.map((item, index) => ({
          metaData: item,
          key: `${Parameters.TransactionalData}-${index}`,
          name: item.name,
          description: '',
          type: item.type,
        })),
      ],
      key: Parameters.TransactionalData,
    },

    {
      questions: [
        ...[].map((item, index) => ({
          metaData: item,
          key: `${Parameters.DeviceType}-${index}`,
          name: '',
          description: '',
          type: '',
        })),
      ],
      key: Parameters.DeviceType,
    },
    {
      questions: [
        ...[].map((item, index) => ({
          metaData: item,
          key: `${Parameters.Location}-${index}`,
          name: '',
          description: '',
          type: '',
        })),
      ],
      key: Parameters.Location,
    },
  ];
  const [validationSchema, setValidationSchema] = useState<any>();
  const [blocs, setBlocs] = useState<Bloc[]>(allBlocs);

  const schema = generateValidationSchema(
    allBlocs
      .map((item) =>
        item.questions.map((field) => {
          return {
            ...field.metaData,
            name: generateFormName(item.key, field.metaData.label),
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
    // resolver: yupResolver(validationSchema),
  });

  const [currentBloc, setCurrentBloc] = useState<Bloc>(allBlocs[0]);
  const [formDataValue, setFormDataValue] = useState<PersonaDto>({});

  const {
    data: dd,
    mutate: addAudience,
    isPending,
  } = useApi.post({
    queryKey: ['audience', ''],
    callBack: (data: CreateAudience) => {
      return AudienceController.createAudience(data);
    },
  });

  const { data: posts, mutate: addPost } = useApi.post({
    queryKey: ['audience', ''],
    callBack: (formDataValue: any) => {
      return AudienceController.addPost(formDataValue);
    },
  });

  const onSubmit = (data: Record<string, any>) => {
    const finalData: CreateAudience = {
      name: '',
      description: '',
      isTemplate: true,
      metaData: {},
      blocs: currentBloc,
    };

    console.log('Final Data', finalData);
    addAudience(finalData);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div>
        <div className="w-full h-[88vh]">
          <div className="flex w-[90%] mx-auto  border-b-gray-100">
            <div className="flex w-1/2">
              <div className="w-1/4 py-10">
                {allBlocs.map((parameter, index) => (
                  <div
                    key={`{${parameter}-x-${index}`}
                    className={`py-4 cursor-pointer pl-2 text-sm ${
                      currentBloc.key === parameter.key
                        ? 'bg-gray-100 border-r-primary-500 border-r-2'
                        : ''
                    }`}
                    onClick={() => setCurrentBloc(parameter)}
                  >
                    {parameter.key}
                  </div>
                ))}
              </div>
              <div className="border-l border-gray-50 px-12 py-10 grow overflow-y-scroll h-[80vh]">
                {/* <button
                  onClick={() =>
                    addPost({
                      id: 1,
                      title: 'Sample Title',
                      body: 'This is a sample post body.',
                      userId: 1,
                    })
                  }
                >
                  Add Post
                </button> */}
                <GenerateForm
                  formDataValue={formDataValue}
                  currentBloc={currentBloc}
                  setFormDataValue={(data: PersonaDto) =>
                    setFormDataValue(data)
                  }
                  updateBloc={(newFormData) => {
                    const others = blocs.filter(
                      (item) => item.key != currentBloc.key
                    );
                    const updatedBloc = [...others, newFormData];
                    setBlocs(updatedBloc);
                    console.log('newFormData', newFormData);
                    console.log('updatedBoc', updatedBloc);
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
              isLoading={isPending}
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
