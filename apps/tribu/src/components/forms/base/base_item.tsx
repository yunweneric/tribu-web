import styles from '../styles/input_field.module.scss';
import copy from '../../../assets/icons/copy.svg';
import trash from '../../../assets/icons/trash.svg';
import branch from '../../../assets/icons/branch.svg';
import { Box, Switch, Typography } from '@mui/material';
import colors from '../../../utils/styles/colors.module.scss';
import {
  removeFormField,
  setActiveSection,
  setSelectedField,
  setSortedItems,
  updateFormField,
} from '../../../data/logic/form.slice';
import { FC, ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../data/store/app_store';
import { AllFormInterfacesType, FieldIcon } from '@tribu/forms';
import React from 'react';
import AppModal from '../../conditions/conditional_model';
import { FormFields } from '../../../../../../libs/forms/src/enum';
import { faker } from '@faker-js/faker';

interface ReusableContainerProps {
  children: ReactNode;
  item: AllFormInterfacesType;
  isPreview?: boolean;
}
const BaseFieldItem: FC<ReusableContainerProps> = ({
  children,
  item,
}: ReusableContainerProps) => {
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  // const selectedItem: AllFormInterfacesType | null = useSelector(
  //   (state: RootState) => state.form.selectedField
  // );
  const { sections, selectedField } = useSelector(
    (state: RootState) => state.form
  );
  const sectionFormItems = sections[item.activeSectionIndex].formItems;

  if (item.isPreview == true)
    return (
      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'flex-start'}
        alignItems={'start'}
        marginX={10}
      >
        <Typography mb={2}>{item.label}</Typography>
        <Box width="100%">{children}</Box>
      </Box>
    );
  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <FieldIcon
        icon={branch}
        bgColor={colors.gray}
        onClick={
          item.type == FormFields.PARAGRAPH ? () => {} : () => setOpen(true)
        }
      />
      <AppModal open={open} handleClose={handleClose} selectedItem={item} />
      <Box
        onClick={() => {
          dispatch(setActiveSection(item.activeSectionIndex));
          dispatch(setSelectedField(item));
        }}
        className={styles.container}
        sx={{
          borderRadius: 1,
          border: '1px dashed',
          borderColor:
            selectedField?.id == item.id ? colors.primary : 'transparent',
        }}
      >
        <Box className={styles.input_header} marginBottom={1}>
          <label htmlFor={'label'} className={styles.label_container}>
            <span className={styles.index}>Q{item.index + 1}</span>
            <span className={styles.label}>{item.label}</span>
          </label>
          <Box display="flex" alignItems={'center'}>
            <span>*required</span>
            <span>
              <Switch
                checked={item.required}
                onChange={(e) => {
                  const newField = {
                    ...item,
                    required: item.required == true ? false : true,
                  };
                  dispatch(setActiveSection(item.activeSectionIndex));
                  dispatch(updateFormField(newField));
                  console.log(newField, e.target.value);
                }}
              />
            </span>
            <img
              src={copy}
              alt=""
              style={{ cursor: 'pointer' }}
              onClick={() => {
                dispatch(setActiveSection(item.activeSectionIndex));
                const newItem: AllFormInterfacesType = {
                  ...item,
                  index: item.index + 1,
                  id: faker.string.uuid(),
                };
                dispatch(setSelectedField(newItem));
                const allSectionItems = [...sectionFormItems];
                allSectionItems.splice(item.index + 1, 0, newItem);
                dispatch(setSortedItems(allSectionItems));
              }}
            />
          </Box>
        </Box>
        {children}
      </Box>
      <FieldIcon
        icon={trash}
        onClick={() => {
          dispatch(setActiveSection(item.activeSectionIndex));
          dispatch(removeFormField(item));
        }}
      />
    </Box>
  );
};

export default BaseFieldItem;
