import { AppButton, Chip } from '@tribu/ui';

import React from 'react';
import { IoIosClose, IoMdClose } from 'react-icons/io';
import { DemographicDto } from '@tribu/targets';
import { demographicData } from '../forms_data/data/data';
import Demographic from '../forms_data/forms/demographic_form';
enum Parameters {
  Demographics = 'Demographics',
  Location = 'Location',
  Interests = 'Interests',
  Language = 'Language',
  IncomeLevel = 'Income Level',
  Occupation = 'Occupation',
  DeviceType = 'Device type',
  OffLimits = 'Off Limits',
}

type FormStructure = {
  title: Parameters;
  data: Field[];
};

export const NewAudienceGroup = () => {
  const formData: FormStructure[] = [
    { data: demographicData, title: Parameters.Demographics },
  ];

  const [currentParameter, setCurrentParameter] = React.useState<FormStructure>(
    formData[0]
  );

  const generateForm = () => {
    switch (currentParameter.title) {
      case Parameters.Demographics:
        return <Demographic />;
      default:
        break;
    }

    return <></>;
  };
  return (
    <div>
      <div className="w-full h-[88vh]">
        <div className="flex w-[90%] mx-auto  border-b-gray-100">
          <div className="flex w-1/2 mt-10">
            <div className="w-1/4">
              {formData.map((parameter, index) => (
                <div
                  key={`{${parameter}-x-${index}`}
                  className={`py-2 cursor-pointer pl-2 text-sm ${
                    currentParameter === parameter
                      ? 'bg-gray-100 border-r-primary-500 border-r-2'
                      : ''
                  }`}
                  onClick={() => setCurrentParameter(parameter)}
                >
                  {parameter.title}
                </div>
              ))}
            </div>
            <div className="border-l border-gray-50 px-12 grow">
              {generateForm()}
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
                    {Object.values(Parameters).map((item, index) => (
                      <Chip
                        label={item}
                        key={`${item}-y-${index}`}
                        additionClasses="bg-white text-gray-800 font-light px-4  border border-gray-100 text-sm hover:border-gray-100"
                        icon={
                          <IoMdClose className="hover:bg-gray-100 rounded-full w-6 h-6 p-1 " />
                        }
                      />
                    ))}
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

export default NewAudienceGroup;
