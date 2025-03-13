import { Sidebar, AppHeader, AppButton, AppInput } from '@tribu/ui';
import { IoMdAdd } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';

type counterItem = {
  id: number;
  title: string;
  description: string;
};

const counterItems: counterItem[] = [
  {
    id: 1,
    title: 'Active Sets',
    description: '2584',
  },
  {
    id: 2,
    title: 'Under Review',
    description: '02',
  },
  {
    id: 3,
    title: 'Live Sets',
    description: '306',
  },
  {
    id: 4,
    title: 'Completed',
    description: '14',
  },
  {
    id: 4,
    title: 'Paused',
    description: '01',
  },
];

export const SurveyHome = () => {
  let navigate = useNavigate();

  return (
    <div className="mt-20 w-[85%] mx-auto">
      <div className="flex">
        {counterItems.map((item) => (
          <div className="border border-gray-100 w-[25%] py-8">
            <div className="flex justify-center">
              <div className="flex flex-col items-center">
                <div className="text mb-2">{item.title}</div>
                <div className="text-3xl">{item.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-10">
        <div className="w-1/3">
          <AppInput
            icon={
              <CiSearch className="absolute left-2 text-gray-400 scale-150" />
            }
            inputClasses="w-full pl-10"
            additionalClasses="w-[40%]"
            placeholder="Search"
          />
        </div>
        <AppButton
          onClick={() => {
            navigate('/surveys/templates');
          }}
          label="New Survey"
          icon={<IoMdAdd />}
          additionalClassName="rounded-sm"
        />
      </div>
      {/* <AppTable /> */}
    </div>
  );
};

export default SurveyHome;
