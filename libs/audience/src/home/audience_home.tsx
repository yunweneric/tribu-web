import { AppButton, AppUIInput } from '@tribu/ui';
import { CiSearch } from 'react-icons/ci';
import { IoMdAdd } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

type Persona = {
  id: number;
  name: string;
  age: string;
  image: string;
  location: string;
  interest: string;
};

const personas: Persona[] = [
  {
    id: 1,
    name: 'John Doe',
    age: '30',
    image:
      'https://doodleipsum.com/700/avatar?bg=3D27F6&i=956bcdd5c02911034c0fb8acbb09a4b2',
    location: 'New York',
    interest: 'Music',
  },
  {
    id: 2,
    name: 'Jane Smith',
    age: '25',
    image: 'https://avatar.iran.liara.run/public',
    location: 'Los Angeles',
    interest: 'Art',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    age: '28',
    image: 'https://example.com/alice-johnson.jpg',
    location: 'Chicago',
    interest: 'Technology',
  },
  {
    id: 4,
    name: 'Bob Williams',
    age: '35',
    image: 'https://example.com/bob-williams.jpg',
    location: 'San Francisco',
    interest: 'Sports',
  },
  {
    id: 5,
    name: 'Eva Davis',
    age: '32',
    image: 'https://example.com/eva-davis.jpg',
    location: 'Miami',
    interest: 'Travel',
  },
];

export const AudienceHome = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[85%] mx-auto mt-20">
      <div className="flex justify-between mt-10">
        <div className="w-1/3">
          <AppUIInput
            icon={
              <CiSearch className="absolute left-2 text-gray-400 scale-150" />
            }
            inputClasses="w-full pl-10"
            additionalClasses="w-[40%]"
            placeholder="Search personas"
          />
        </div>
        <AppButton
          onClick={() => {
            navigate('/dashboard/audience/groups/new');
          }}
          label="New Group"
          icon={<IoMdAdd />}
          additionalClassName="rounded-sm"
        />
      </div>

      <div className="w-full flex flex-wrap gap-10 mt-10">
        {personas.map((persona, index) => (
          <div className="w-[30%]">
            <div className="border flex items-center border-gray-100 rounded-lg p-4">
              <img
                src={`https://avatar.iran.liara.run/public/${index}`}
                alt={persona.name}
                className="w-20 h-20 object-cover rounded-full"
              />
              <div className="flex ml-10">
                <div className="">
                  <p className="text-xs mr-5">Name</p>

                  <p className="text-xs mr-5">Age</p>

                  <p className="text-xs mr-5">Location</p>

                  <p className="text-xs mr-5">Interest</p>
                </div>
                <div className="">
                  <p className="text-xs mr-5">{persona.name}</p>

                  <p className="text-xs mr-5">{persona.age}</p>

                  <p className="text-xs mr-5">{persona.location}</p>

                  <p className="text-xs mr-5">{persona.interest}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AudienceHome;
