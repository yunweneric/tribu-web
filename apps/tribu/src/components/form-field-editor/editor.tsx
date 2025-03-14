import { useSelector } from "react-redux";
import { TextInputInterface } from "../../data/interfaces";
import { RootState } from "../../data/store/app_store";
import { Box, Typography } from "@mui/material";
import FormEditorRenderer from "./renderer";
import colors from "../../utils/styles/colors.module.scss";
import { GlobalTab } from "../../data/enum";

const FormFieldEditor = () => {
  const formItem: TextInputInterface | null = useSelector(
    (state: RootState) => state.form.selectedField
  );

  const currentGlobalTab:
    | GlobalTab.CREATE
    | GlobalTab.PREVIEW
    | GlobalTab.SUBMISSION = useSelector(
    (state: RootState) => state.tabs.currentGlobalTab
  );

  if (currentGlobalTab != GlobalTab.CREATE) {
    return (
      <Box
        sx={{
          borderLeft: "1px solid",
          borderColor: colors.gray,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        {/* <Typography>App is in Preview Mode!</Typography> */}
      </Box>
    );
  }

  if (formItem == null)
    return (
      <Box
        sx={{
          borderLeft: "1px solid",
          borderColor: colors.gray,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Typography>No Item selected!</Typography>
      </Box>
    );

  return (
    <Box
      sx={{
        borderLeft: "1px solid",
        borderColor: colors.gray,
        display: "flex",
        justifyContent: "center",
        paddingX: 5,
        paddingTop: 5,
        height: "95%",
      }}
    >
      <FormEditorRenderer field={formItem} />
    </Box>
  );
};

export default FormFieldEditor;
