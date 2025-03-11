import { Box } from "@mui/system";
import AppInput from "../../forms/base/app_input";
import { RatingInterface } from "../../../data/interfaces";
import { useDispatch } from "react-redux";
import {
  setSelectedField,
  updateFormField,
} from "../../../data/logic/form.slice";
import AppNumberInput from "../../forms/base/app_number_input";

const FormRatingRenderer = (formItem: RatingInterface) => {
  const dispatch = useDispatch();

  return (
    <Box width={"100%"}>
      <AppInput
        placeholder="Label"
        id={formItem.id}
        onChange={(e) => {
          const updatedItem = { ...formItem, label: e.target.value };
          console.log(updatedItem);
          dispatch(updateFormField(updatedItem));
        }}
        hasBorder={true}
        type="text"
      />
      <Box marginBottom={2} />
      <AppNumberInput
        placeholder="Max"
        id={formItem.id}
        onChange={(e) => {
          const updatedItem = { ...formItem, max: Number(e.target.value) };
          dispatch(updateFormField(updatedItem));
          dispatch(setSelectedField(updatedItem));
        }}
        hasBorder={true}
      />
    </Box>
  );
};

export default FormRatingRenderer;
