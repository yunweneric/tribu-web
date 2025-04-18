import React, { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  additionClasses?: string;
  icon?: ReactNode;
}
export const AppChip: React.FC<ChipProps> = ({
  label,
  additionClasses,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`bg-secondary-500 flex text-white items-center justify-center rounded-3xl px-5 ${additionClasses} ${
        props.icon && 'gap-2'
      }`}
    >
      {label}
      {props.icon && props.icon}
    </button>
  );
};

export default AppChip;
