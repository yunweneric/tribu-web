import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import AppLoader from './loader';

export interface AppButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  additionalClassName?: string;
  icon?: ReactNode;
  isLoading?: boolean;
}
export const AppButton: React.FC<AppButtonProps> = ({
  label,
  icon,
  additionalClassName,
  isLoading,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`bg-secondary-500 text-sm text-white rounded-3xl px-5 flex items-center gap-2 ${additionalClassName}`}
    >
      {isLoading ? (
        <AppLoader size={20} />
      ) : (
        <span className="flex justify-center items-center gap-1">
          <span>{icon && icon}</span> <span> {label}</span>
        </span>
      )}
    </button>
  );
};

export default AppButton;
