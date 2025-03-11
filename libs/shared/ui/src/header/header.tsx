import React, { FC } from 'react';

import wallet from '../../../icons/wallet.svg';
import bell from '../../../icons/bell.svg';
import Chip from '../others/chip';
import AppIcon from '../others/app_icon';
import { useLocation } from 'react-router-dom';

export const AppHeader: FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  const location = useLocation();
  const paths = location.pathname.split('/');
  const path = paths[paths.length - 1];
  const capitalizedPath = path.charAt(0).toUpperCase() + path.slice(1);

  return (
    <div {...props} className="py-5 border-b border-gray-100">
      <div className="flex w-[90%] mx-auto justify-between">
        <h2 className="text-2xl font-medium">{capitalizedPath}</h2>
        <div className="flex gap-4 items-center">
          <AppIcon icon={wallet} />
          <Chip label="XAF123.45" onClick={() => {}} className="text-2xl" />
          <AppIcon icon={bell} />
        </div>
      </div>
    </div>
  );
};
export default AppHeader;
