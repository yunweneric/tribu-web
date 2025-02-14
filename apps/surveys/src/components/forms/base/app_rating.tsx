import { SyntheticEvent, useEffect, useState } from "react";
import { Rating } from "@mui/material";

type AppRatingType = {
  max?: number | undefined;
  value: number;
  placeholder?: string | undefined;
  label?: string;
  id?: string;
  onChange: (
    event: SyntheticEvent<Element, Event>,
    value: number | null
  ) => void;
};
const AppRating = ({ ...props }: AppRatingType) => {
  useEffect(() => {
    if (typeof props.value == "number") {
      setFieldValue(props.value);
    }
  }, []);

  const [fieldValue, setFieldValue] = useState<number | null>();

  return (
    <Rating
      itemID={props.id}
      aria-label={props.placeholder}
      id={props.label}
      value={fieldValue}
      max={props.max}
      aria-valuetext={`${fieldValue}`}
      onChange={(e, val) => {
        const value = Number(val);
        setFieldValue(value);
        props.onChange(e, val);
      }}
    />
  );
};

export default AppRating;
