import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import colors from '../../utils/styles/colors.module.scss';
import { Button, Typography } from '@mui/material';
import { ConditionLinkEnum, conditionLinks } from '@tribu/forms';
const options = conditionLinks;

type SimpleListMenuType = {
  initialOption: ConditionLinkEnum;
  onChangeOption: (option: ConditionLinkEnum) => void;
};
const SimpleListMenu = ({
  initialOption,
  onChangeOption,
}: SimpleListMenuType) => {
  const initialIndex = conditionLinks.indexOf(initialOption);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(initialIndex);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (index: number) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    onChangeOption(conditionLinks[index]);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClickListItem}
        sx={{
          borderRadius: 1,
          paddingY: 0.1,
          paddingX: 1,
          color: colors.white,
        }}
      >
        <Typography fontSize={13}> {options[selectedIndex]}</Typography>
        <KeyboardArrowDownIcon />
      </Button>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={() => handleMenuItemClick(index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default SimpleListMenu;
