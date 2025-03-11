import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import Button from "@mui/material/Button";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import { UseDateFieldProps } from "@mui/x-date-pickers/DateField";
import {
  BaseSingleInputFieldProps,
  DateValidationError,
  FieldSection,
} from "@mui/x-date-pickers/models";

interface ButtonFieldProps
  extends UseDateFieldProps<Dayjs>,
    BaseSingleInputFieldProps<
      Dayjs | null,
      Dayjs,
      FieldSection,
      DateValidationError
    > {
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

function ButtonField(props: ButtonFieldProps) {
  const {
    setOpen,
    label,
    id,
    disabled,
    InputProps: { ref } = {},
    inputProps: { "aria-label": ariaLabel } = {},
  } = props;

  return (
    <Button
      variant="text"
      id={id}
      disabled={disabled}
      ref={ref}
      aria-label={ariaLabel}
      onClick={() => setOpen?.((prev) => !prev)}
      sx={{ textTransform: "capitalize", color: "#000000" }}
    >
      {label ? `${label}` : "DD-MM-YY"}
    </Button>
  );
}

function ButtonDatePicker(
  props: Omit<DatePickerProps<Dayjs>, "open" | "onOpen" | "onClose">
) {
  const [open, setOpen] = React.useState(false);

  return (
    <DatePicker
      slots={{ field: ButtonField, ...props.slots }}
      slotProps={{ field: { setOpen } as any }}
      {...props}
      // label={label}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    />
  );
}

type CustomDateFieldType = {
  id: string | undefined;
  placeholder: string | undefined;
  onChange?: (value: Dayjs) => Dayjs | void;
  hasBorder?: boolean;
  value?: string | number;
  width?: string;
};

export default function CustomDateField(props: CustomDateFieldType) {
  React.useEffect(() => {
    if (props.value != null) setValue(dayjs(props.value));
  }, [props.value]);
  const [initialValue, setValue] = React.useState<Dayjs | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ButtonDatePicker
        label={
          initialValue == null
            ? props.placeholder
            : initialValue.format("DD-MM-YYYY")
        }
        value={initialValue}
        onChange={(newValue) => {
          setValue(newValue);
          if (props.onChange) {
            const newDate = dayjs(newValue);
            props.onChange(newDate);
          }
        }}
      />
    </LocalizationProvider>
  );
}
