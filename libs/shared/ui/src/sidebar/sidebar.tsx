import React, { FC } from 'react';
import logo from '../../../images/survey_logo.svg';
import audience from '../../../icons/audience.svg';
import check_box from '../../../icons/check_box.svg';
import store from '../../../icons/store.svg';
import logout from '../../../icons/logout.svg';
import SidebarItem, { SidebarItemProps } from './sidebar_item';
import AppIcon from '../others/app_icon';
import { useNavigate } from 'react-router-dom';

export const Sidebar: FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  const sidebarItems: SidebarItemProps[] = [
    {
      icon: check_box,
      label: 'Home',
      onClick: () => {},
    },
    {
      icon: store,
      label: 'Surveys',
      onClick: () => {},
    },
    {
      icon: audience,
      label: 'Audience',
      onClick: () => {},
    },
  ];
  const navigate = useNavigate();
  return (
    <div {...props}>
      <div className="h-screen flex flex-col py-10 justify-between">
        <AppIcon
          icon={logo}
          width={10}
          additionalClass="rounded-sm cursor-pointer"
          onClick={() => navigate('/dashboard')}
        />
        <div className="mt-20 flex flex-col gap-y-5 grow">
          {sidebarItems.map((item) => {
            return <SidebarItem {...item} />;
          })}
        </div>
        <div className="flex items-center justify-center">
          <img src={logout} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
