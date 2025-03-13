import React, { ButtonHTMLAttributes } from 'react';

export interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}
const Chip: React.FC<ChipProps> = ({ label, ...props }) => {
  return (
    <button {...props} className="bg-secondary-500 text-white rounded-3xl px-5">
      {label}
    </button>
  );
};

export default Chip;
