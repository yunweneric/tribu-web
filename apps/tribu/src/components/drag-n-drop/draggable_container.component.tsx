import { Box, Tab, Tabs } from "@mui/material";
import { draggableItems } from "../../data/services/draggables";
import DraggableComponent from "./draggable.component";
import colors from "../../utils/styles/colors.module.scss";
import { useState } from "react";
import SettingsTab from "../settings/settings";

const DraggableContainerComponents = () => {
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log(event);
    setCurrentTab(newValue);
  };
  const [currentTab, setCurrentTab] = useState<number>(0);
  const items = draggableItems;
  return (
    <Box
      sx={{
        borderRight: "1px solid",
        borderColor: colors.gray,
        height: "90vh",
      }}
    >
      <Box
        display={"flex"}
        alignItems={"end"}
        justifyContent={"space-around"}
        borderBottom={"1px solid"}
        borderColor={colors.gray}
        height={"8%"}
      >
        <Tabs
          value={currentTab}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Form Field" sx={{ textTransform: "capitalize" }} />
          <Tab label="Settings" sx={{ textTransform: "capitalize" }} />
        </Tabs>
      </Box>

      <Box
        sx={{
          height: "92%",
          overflowY: "scroll",
        }}
      >
        {currentTab == 0 ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              width: "100%",
              flexWrap: "wrap",
            }}
          >
            {items?.map((item, index: number) => {
              return <DraggableComponent key={index} item={item} />;
            })}
          </Box>
        ) : (
          <SettingsTab />
        )}
      </Box>
    </Box>
  );
};

export default DraggableContainerComponents;
