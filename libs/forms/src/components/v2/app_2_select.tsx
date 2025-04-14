import React from 'react';
import { useController, Control, FieldValues, Path } from 'react-hook-form';

interface SelectFieldProps<T extends FieldValues> {
  name: Path<T>; // The name of the field, inferred from the form data type.
  control: Control<T>; // Control object from useForm, managing the field state
  label?: string; // Label for the select field
  //   options: { value: string | number; label: string }[]; // Options for the select dropdown
  options: string[];
  onChange?: (value: string | number) => void; // Custom onChange handler
  rules?: any; // Validation rules
  [rest: string]: any; // Allow other props (e.g., placeholder, className, etc.)
}

export const SelectField = <T extends FieldValues>({
  name,
  control,
  label,
  options,
  rules,
  onChange,
  ...rest
}: SelectFieldProps<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController<T>({
    name,
    control,
    rules,
    defaultValue: undefined,
  });

  // Handle custom onChange event if provided
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // Call the custom onChange handler, if any
    if (onChange) {
      onChange(e.target.value);
    }

    // Also trigger the default react-hook-form onChange
    field.onChange(e);
  };
  return (
    <div className="flex flex-col mb-4">
      {label && (
        <label
          htmlFor={name}
          className="block text-sm/6 font-medium text-gray-900"
        >
          {label}
        </label>
      )}
      <select
        id={name}
        {...field}
        {...rest}
        value={field.value}
        onChange={handleChange} // Attach the custom onChange handler
        className={`block w-full rounded-md bg-white px-3 text-base border py-2 text-gray-900 outline-0 -outline-offset-1 placeholder:text-gray-400 sm:text-sm/6 ${
          error
            ? 'border-red-500 focus:border-red-500'
            : 'border-gray-300 focus:border-primary-600 focus:-border-offset-2'
        }`}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && (
        <span className="mt-2 text-sm text-red-500">{error.message}</span>
      )}
    </div>
  );
};

export default SelectField;
