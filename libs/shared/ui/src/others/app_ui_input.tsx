import React, { InputHTMLAttributes, ReactNode } from 'react';

export interface AppUIInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  additionalClasses?: string;
  hint?: string;
  label?: string;
  inputClasses?: string;
}

export const AppUIInput: React.FC<AppUIInputProps> = ({
  icon,
  additionalClasses,
  inputClasses,
  label,
  ...props
}) => {
  return (
    <div>
      {label && <p className="mb-2">{label}</p>}
      <div className={`relative flex items-center justify-start`}>
        <input
          {...props}
          type="text"
          className={`px-2 py-3 bg-white outline-none border focus:border-secondary-300 border-gray-300 rounded-md p-2 ${inputClasses}`}
        />
        {icon && icon}
      </div>
    </div>
  );
};

export default AppUIInput;
