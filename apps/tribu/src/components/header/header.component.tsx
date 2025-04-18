import { Box, Tab, Tabs } from '@mui/material';
import colors from '../../utils/styles/colors.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedTab } from '../../data/logic/tab.slice';
import { GlobalTab } from '../../../../../libs/forms/src/enum';
const Header = () => {
  const dispatch = useDispatch();
  const handleChange = (newValue: number) => {
    setCurrentTab(newValue);
    switch (newValue) {
      case 0:
        dispatch(setSelectedTab(GlobalTab.CREATE));
        break;
      case 1:
        dispatch(setSelectedTab(GlobalTab.PREVIEW));
        break;
      case 2:
        dispatch(setSelectedTab(GlobalTab.SUBMISSION));
        break;
      default:
        break;
    }
  };
  const [currentTab, setCurrentTab] = useState<number>(0);
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        // width: "100%",
        borderBottom: `1px solid ${colors.gray}`,
        height: '100%',
        alignItems: 'end',
      }}
    >
      <Box />
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-around'}
        borderBottom={'1px solid'}
        borderColor={colors.gray}
      >
        <Tabs
          value={currentTab}
          onChange={(_, val) => handleChange(val)}
          aria-label="basic tabs example"
          sx={{ textTransform: 'capitalize' }}
        >
          <Tab
            label="Create"
            sx={{ border: 'none', textTransform: 'capitalize' }}
          />
          <Tab label="Preview" sx={{ textTransform: 'capitalize' }} />
          <Tab label="Submission" sx={{ textTransform: 'capitalize' }} />
        </Tabs>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default Header;
