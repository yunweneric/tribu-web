import { AppInput } from '@tribu/ui';
import React from 'react';
export interface InputFieldProps extends Field {
  label?: string | undefined;
  placeholder?: string | undefined;
  type: string;
  id: string | undefined;
  hasBorder?: boolean;
  readonly?: boolean;
  value?: string | number | readonly string[] | undefined;
  onChange:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  maxLength?: number;
  minLength?: number;
  styles?: any | undefined;
  multiline?: boolean;
  isPreview?: boolean;
  minRows?: number;
  startAdornment?: JSX.Element;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  label,
  className = '',
}) => {
  return (
    <div className="w-full">
      <AppInput
        additionalClasses="w-full"
        inputClasses="w-full"
        label={label}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
