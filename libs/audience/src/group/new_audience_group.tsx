import { AppButton, Chip } from '@tribu/ui';

import React from 'react';
import { IoIosClose, IoMdClose } from 'react-icons/io';

const parameters = [
  'Location',
  'Demographics',
  'Interests',
  'Language',
  'Income Level',
  'Occupation',
  'Device type',
  'Off Limits',
];

export const NewAudienceGroup = () => {
  const [currentParameter, setCurrentParameter] = React.useState(parameters[0]);
  return (
    <div>
      <div className="w-full h-[88vh]">
        <div className="flex w-[90%] mx-auto  border-b-gray-100">
          <div className="w-1/2 mt-10">
            <div className="w-1/3">
              {parameters.map((parameter, index) => (
                <div
                  key={`{${parameter}-x-${index}`}
                  className={`py-2 cursor-pointer pl-2 text-sm ${
                    currentParameter === parameter
                      ? 'bg-gray-100 border-r-primary-500 border-r-2'
                      : ''
                  }`}
                  onClick={() => setCurrentParameter(parameter)}
                >
                  {parameter}
                </div>
              ))}
            </div>
          </div>
          <div className="flex w-1/2 h-[80vh] overflow-y-auto">
            <div className="flex flex-col w-full">
              {parameters.map((parameter, index) => (
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
                    {parameters.map((item, index) => (
                      <Chip
                        label={parameters[index]}
                        key={`${item}-y-${index}`}
                        additionClasses="bg-white text-black font-light px-4  border border-gray-100 text-sm hover:border-gray-100"
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
