import React, { ButtonHTMLAttributes, FC } from 'react';

export interface AppIconProps extends ButtonHTMLAttributes<HTMLImageElement> {
  icon: string;
  width?: number;
  additionalClass?: string;
}

const AppIcon: FC<AppIconProps> = ({
  icon,
  width,
  additionalClass,
  ...props
}) => {
  return (
    <div {...props}>
      <div
        className={`hover:bg-secondary-500 rounded-full p-3 cursor-pointer transition-all duration-300 ${additionalClass}`}
      >
        <img src={icon} alt="" className={`${width ?? 'w-5 h-5'} `} />
      </div>
    </div>
  );
};

export default AppIcon;
