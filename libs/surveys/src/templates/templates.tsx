import { AppButton, AppInput } from '@tribu/ui';
import { Link, useNavigate } from 'react-router-dom';
export const SurveyTemplates = () => {
  let navigate = useNavigate();

  return (
    <div className="w-screen h-screen">
      <div className="flex w-full">
        <div className="lg:w-1/3 bg-secondary-100 h-screen"></div>
        <div className="h-screen w-full lg:w-2/3">
          <div className="w-[70%] mx-auto mt-20">
            <AppInput
              placeholder="Enter campaign Name"
              label="Enter campaign Name"
              additionalClasses="mt-20"
              inputClasses="w-full py-3"
            />
          </div>
          <div className="h-[60vh]  border-y-[1px] border-gray-200 mt-10 w-full">
            <div className="flex">
              <div className="w-[30%] h-[60vh] border-r-[1px] flex flex-col gap-5 px-10 lg:px-20 pt-10">
                {[
                  'General',
                  'Market surveys',
                  'Community',
                  'School surveys',
                  'Product reviews',
                  'Price schedules',
                ].map((item) => {
                  return (
                    <Link to="" className="font-normal">
                      {item}
                    </Link>
                  );
                })}
              </div>
              <div className="w-[70%] h-[60vh]"></div>
            </div>
          </div>
          <div className="flex justify-end px-20">
            <AppButton
              label="Proceed"
              additionalClassName="flex mt-10 justify-end rounded-sm bg-primary-600"
              onClick={() => navigate('/dashboard/surveys/new')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyTemplates;
