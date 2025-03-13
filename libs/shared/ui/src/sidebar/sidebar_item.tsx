import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
export interface SidebarItemProps {
  icon: string;
  label: string;
  onClick: () => void;
}

const SidebarItem: FC<SidebarItemProps> = ({ icon, label, onClick }) => {
  let location = useLocation();
  let navigate = useNavigate();

  const isActiveRoute: boolean = location.pathname
    .toLowerCase()
    .includes(label.toLowerCase());

  return (
    <div
      className={`flex items-center justify-center gap-2 p-2 cursor-pointer hover:bg-gray-200 ${
        isActiveRoute ? 'bg-secondary-500 text-white' : ''
      }`}
      // onClick={onClick}
      onClick={() => navigate(label.toLowerCase())}
    >
      {/* <h2 className="text-red-500 text-sm"> {`${isActiveRoute}`}</h2> */}
      <img src={icon} alt={label} className="w-6 h-6" />
    </div>
  );
};

export default SidebarItem;
