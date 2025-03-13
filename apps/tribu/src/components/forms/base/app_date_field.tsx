import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import colors from "../../../utils/styles/colors.module.scss";
import { roundUpToMidnight } from "../../../utils/helpers/formatters";

type AppDatePicker = {
  id: string | undefined;
  onChange?: (value: Date) => Date;
  hasBorder?: boolean;
  value?: string | number;
  width?: string;
  minDate?: Dayjs;
  maxDate?: Dayjs;
};

export default function AppDatePicker(props: AppDatePicker) {
  const [initialValue, setValue] = React.useState<Dayjs | null>(dayjs(null));
  React.useEffect(() => {
    setValue(dayjs(props.value));
  }, [props.value]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker", "DatePicker"]}>
        <DatePicker
          // format="MM-DD-YYYY"
          format="DD-MM-YYYY"
          value={initialValue}
          minDate={props.minDate}
          maxDate={props.maxDate}
          onChange={(newValue) => {
            setValue(newValue);
            if (props.onChange) {
              const newDate = dayjs(newValue);
              // newDate.toDate().setHours(24, 0, 0, 0);
              const updatedDate = roundUpToMidnight(newDate.toDate());
              props.onChange(updatedDate);
            }
          }}
          sx={{
            width: props.width ?? "100%",
            backgroundColor: colors.white,
            borderRadius: 2,
            // border: hasBorder ? "none" : `1px solid ${colors.grayBorder}`,
            "& fieldset": {
              border: props.hasBorder
                ? `1px solid ${colors.grayBorder}`
                : "none",
            },
            ":focus": {
              border: `1px solid ${colors.primary}`,
              "& fieldset": { border: `1px solid ${colors.grayBorder}` },
            },
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
