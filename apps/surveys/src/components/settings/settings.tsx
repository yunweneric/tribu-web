import {
  Avatar,
  Box,
  Button,
  Divider,
  List,
  Stack,
  Typography,
} from "@mui/material";
import AppSelect from "../forms/base/app_select";
import { Add, ColorLens, People, TuneRounded } from "@mui/icons-material";
import colors from "../../utils/styles/colors.module.scss";
import avatarImage from "../../assets/images/avatar.png";
import AppTextArea from "../forms/base/app_text_area";
const SettingsTab = () => {
  return (
    <Box paddingX={2} paddingY={2}>
      <Audience />
      <ThemeData />
      <TermsAndConditions />
    </Box>
  );
};

const TermsAndConditions = () => {
  return (
    <Box
      border={"1px solid"}
      borderColor={colors.gray}
      py={1}
      borderRadius={2}
      mb={2}
    >
      <Button
        variant="text"
        sx={{ color: "#000", textTransform: "capitalize", ml: 2, fontSize: 16 }}
        startIcon={
          <Avatar sx={{ bgcolor: colors.gray }} variant="square">
            <TuneRounded sx={{ color: "#000" }} />
          </Avatar>
        }
      >
        Terms and Conditions
      </Button>
      <Divider sx={{ borderColor: colors.gray, marginY: 1 }} />

      <AppTextArea
        placeholder={"Terms and conditions"}
        id={"terms"}
        hasBorder={false}
        maxLength={500}
        onChange={(e) => {
          console.log(e);
        }}
      />
    </Box>
  );
};
const ThemeData = () => {
  const themeColors: { name: string; code: string }[] = [
    {
      name: "Main Color",
      code: "#0CAF60",
    },
    {
      name: "Background Color",
      code: "#1A73E8",
    },
    {
      name: "Font Color",
      code: "#13191E",
    },
  ];
  return (
    <Box
      border={"1px solid"}
      borderColor={colors.gray}
      paddingY={1}
      borderRadius={2}
      mb={2}
    >
      <Button
        variant="text"
        sx={{ color: "#000", textTransform: "capitalize", ml: 2, fontSize: 16 }}
        startIcon={
          <Avatar sx={{ bgcolor: colors.gray }} variant="square">
            <ColorLens sx={{ color: "#000" }} />
          </Avatar>
        }
      >
        Theme
      </Button>

      <Divider sx={{ borderColor: colors.gray, marginY: 1 }} />

      {themeColors.map((item, index) => {
        return (
          <Stack
            direction={"row"}
            key={index}
            justifyContent={"start"}
            alignItems={"center"}
            mb={1}
            py={1}
          >
            <Box width={"40%"}>
              <Typography textAlign={"end"}>{item.name}</Typography>
            </Box>
            <Box width={30} height={30} bgcolor={item.code} mx={2} />
            <Typography>{item.code}</Typography>
          </Stack>
        );
      })}
      <Box mt={2}>
        <Divider sx={{ borderColor: colors.gray, marginY: 1 }} />
        <Stack
          mx={2}
          direction={"row"}
          justifyContent={"end"}
          alignItems={"center"}
          py={2}
        >
          <Typography mr={2}>Font Family</Typography>
          <AppSelect
            hasBorder={true}
            id={"Times New Romans"}
            onChange={(event, child) => {
              console.log(event, child);
            }}
            items={["Times New Romans"]}
            value={"Times New Romans"}
            width="60%"
          />
        </Stack>
      </Box>
    </Box>
  );
};
const Audience = () => {
  return (
    <Box
      border={"1px solid"}
      borderColor={colors.gray}
      paddingY={1}
      borderRadius={2}
      mb={2}
    >
      <Stack justifyContent={"space-between"} direction={"row"} paddingX={2}>
        <Button
          variant="text"
          sx={{
            color: "#000",
            textTransform: "capitalize",
            ml: 2,
            fontSize: 16,
          }}
          startIcon={
            <Avatar sx={{ bgcolor: colors.gray }} variant="square">
              <People sx={{ color: "#000" }} />
            </Avatar>
          }
        >
          Audience
        </Button>
        <Button variant="text" startIcon={<Add />}>
          New
        </Button>
      </Stack>
      <Divider sx={{ borderColor: colors.gray, marginY: 1, mb: 2 }} />
      <Box paddingX={2}>
        <AppSelect
          hasBorder={true}
          id={"High school girls"}
          onChange={(event, child) => {
            console.log(event, child);
          }}
          items={["High school girls"]}
          value={"High school girls"}
          fullWidth={true}
          width="100%"
        />
        <Box mt={2}>
          <UserCard />
        </Box>
      </Box>
    </Box>
  );
};
const UserCard = () => {
  const items: { title: string; desc: string }[] = [
    { title: "Name", desc: "High schools Girl Campaign" },
    { title: "Age", desc: "18-25" },
    { title: "Location", desc: "Douala, Cameroon" },
    { title: "Interest", desc: "Sports" },
  ];
  return (
    <Box
      paddingX={1}
      paddingY={1}
      border={"2px solid"}
      borderColor={colors.gray}
      borderRadius={2}
    >
      <Stack direction={"row"} justifyContent={"start"} alignItems={"center"}>
        <img src={avatarImage} width={80} />
        <Box marginLeft={1}>
          <List dense>
            {items.map((item, index) => (
              <Stack
                direction={"row"}
                alignItems={"center"}
                key={index}
                marginBottom={1}
              >
                <Typography
                  width={50}
                  textAlign={"left"}
                  fontSize={12}
                  marginRight={2}
                >
                  {item.title}
                </Typography>
                <Typography textAlign={"left"} fontSize={14} fontWeight={500}>
                  {item.desc}
                </Typography>
              </Stack>
            ))}
          </List>
        </Box>
      </Stack>
    </Box>
  );
};

export default SettingsTab;
