import React, { ButtonHTMLAttributes, ReactNode } from 'react';

export interface AppButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  additionalClassName?: string;
  icon?: ReactNode;
}
export const AppButton: React.FC<AppButtonProps> = ({
  label,
  icon,
  additionalClassName,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`bg-secondary-500 text-sm text-white rounded-3xl px-5 flex items-center gap-2 ${additionalClassName}`}
    >
      {icon && icon} {label}
    </button>
  );
};

export default AppButton;
