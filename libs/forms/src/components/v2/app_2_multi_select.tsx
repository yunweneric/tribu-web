import React from 'react';
import { AppChip } from '@tribu/ui';
import {
  useController,
  Control,
  FieldValues,
  Path,
  PathValue,
} from 'react-hook-form';

interface MultiSelectFieldProps<T extends FieldValues> {
  name: Path<T>; // The name of the field, inferred from the form data type.
  control: Control<T>; // Control object from useForm, managing the field state
  label?: string; // Label for the select field
  options: string[]; // Options for the select dropdown
  onChange?: (value: (string | number)[]) => void; // Custom onChange handler for multi-select
  rules?: any; // Validation rules
  [rest: string]: any; // Allow other props (e.g., placeholder, className, etc.)
}

export const MultiSelectField = <T extends FieldValues>({
  name,
  control,
  label,
  options,
  rules,
  onChange,
  ...rest
}: MultiSelectFieldProps<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController<T>({
    name,
    control,
    rules,
    defaultValue: [] as PathValue<T, Path<T>>, // Default to an empty array for multi-select
  });

  // Handle custom onChange event if provided
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );

    const newValues = [...field.value, ...selectedOptions];

    // Update the react-hook-form value and the custom onChange handler
    field.onChange(newValues);
    if (onChange) {
      onChange(selectedOptions);
    }
  };

  // Handle removing a selected option (chip delete)
  const handleChipDelete = (value: string) => {
    const updatedValues = field.value.filter((item: string) => item !== value);
    field.onChange(updatedValues);
    if (onChange) onChange(updatedValues);
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
        // multiple // Allow multiple selection
        value={field.value} // Bind the selected values
        onChange={handleChange} // Handle change event
        className={`block w-full rounded-md bg-white px-3 text-base border py-2 text-gray-900 outline-0 -outline-offset-1 placeholder:text-gray-400 sm:text-sm/6 ${
          error
            ? 'border-red-500 focus:border-red-500'
            : 'border-gray-300 focus:border-primary-600 focus:-border-offset-2'
        }`}
      >
        {options.map((option) => (
          <option
            key={option}
            value={option}
            className="flex flex-row justify-between items-end"
          >
            <p className="w-full"> {option}</p>
            <p className="w-full"> {option}</p>
          </option>
        ))}
      </select>

      {/* Display Chips for selected items */}
      {field.value.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {field.value.map((value: string, index: number) => (
            <div className="text-xs border p-2 rounded-xl">
              <p>{value}</p>
            </div>
          ))}
        </div>
      )}

      {error && (
        <span className="mt-2 text-sm text-red-500">{error.message}</span>
      )}
    </div>
  );
};

export default MultiSelectField;
