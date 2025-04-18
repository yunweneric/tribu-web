import {
  Box,
  Button,
  Chip,
  IconButton,
  Modal,
  Step,
  Stepper,
  Typography,
} from '@mui/material';
import colors from '../../utils/styles/colors.module.scss';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../data/store/app_store';
import { useDispatch } from 'react-redux';
import { setActiveSection, updateFormField } from '../../data/logic/form.slice';
import AppQuestion from './app_question';
import AppConditionStep from './app_condition_step';
import { faker } from '@faker-js/faker';
import AppBranchActionComponent from './app_action';
import AppBranchConditionComponent from './app_condition';
import SimpleListMenu from './condition_menu';
import { Close } from '@mui/icons-material';
import {
  AllFormInterfacesType,
  BranchingBlockInterface,
  ActionActions,
  ConditionActions,
  actionSelectOptions,
  conditionInputActions,
  conditionSelectActions,
  FormFields,
} from '@tribu/forms';

type AppModalProps = {
  open: boolean;
  handleClose: () => void;
  selectedItem: AllFormInterfacesType | null;
};

const AppModal: FC<AppModalProps> = ({ open, handleClose, selectedItem }) => {
  const { sections } = useSelector((state: RootState) => state.form);

  const allBranchingFormItem = sections[
    selectedItem!.activeSectionIndex
  ].formItems.filter((item) => item.branching != null);

  const dispatch = useDispatch();

  const handleForm = () => {
    if (selectedItem?.branching == null) {
      const branch: BranchingBlockInterface = {
        id: faker.string.uuid(),
        condition: [
          {
            id: faker.string.uuid(),
            action: ConditionActions.EQUALTO,
            value: '',
          },
        ],
        action: {
          id: faker.string.uuid(),
          action: ActionActions.SKIP,
          value: '',
        },
      };
      const newItem = { ...selectedItem, branching: branch };
      // dispatch(setActiveSection(newItem.activeSectionIndex));
      dispatch(updateFormField(newItem));
    } else {
      console.log('Proceeding ...');
      console.log(selectedItem.branching);
    }
  };

  const handleProceed = () => {
    console.log('Proceeding ...');
    console.log(selectedItem);
    handleClose();
  };

  const getOptions = (type: string): string[] => {
    if (type == FormFields.NUMBER_INPUT || type == FormFields.SLIDER) {
      return conditionInputActions;
    } else {
      return conditionSelectActions;
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          bgcolor: colors.white,
          width: '50%',
          height: '80%',
          borderRadius: 1,
        }}
      >
        <Box
          height={'10%'}
          width={'100%'}
          display={'flex'}
          position={'relative'}
          alignItems={'center'}
        >
          <IconButton
            aria-label="close"
            sx={{
              // bgcolor: colors.primary,
              padding: 0.5,
              position: 'absolute',
              right: 20,
              top: 15,
            }}
            onClick={handleClose}
          >
            <Close />
          </IconButton>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            fontWeight={600}
            width={'100%'}
            textAlign={'center'}
            paddingBottom={2}
            borderBottom={`1px solid ${colors.grayBorder}`}
          >
            Branching
          </Typography>{' '}
        </Box>
        <Box
          sx={{
            overflowY: 'scroll',
            height: '80%',
            width: '100%',
          }}
        >
          {allBranchingFormItem.length == 0 ? (
            <Box
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              height={'100%'}
              width={'100%'}
            >
              <Typography>No conditions added</Typography>
            </Box>
          ) : (
            allBranchingFormItem.map((formItem, index) => {
              return (
                <Box sx={{ position: 'relative', mb: 5 }} key={index}>
                  <Box
                    sx={{
                      borderRadius: 2,
                      bgcolor: colors.gray,
                      border: `1px dashed ${colors.grayBorder}`,
                    }}
                    margin={2}
                    marginX={5}
                    paddingY={2}
                  >
                    <AppQuestion
                      label={'If'}
                      index={formItem.index + 1}
                      selectedItem={formItem?.label ?? ''}
                    />
                    <Stepper
                      orientation="vertical"
                      connector={
                        <Box
                          width={'30%'}
                          display={'flex'}
                          justifyContent={'flex-end'}
                        >
                          <Box
                            bgcolor={colors.grayBorder}
                            width={'2px'}
                            height={80}
                            display={'flex'}
                            alignItems={'center'}
                            justifyContent={'center'}
                          >
                            <SimpleListMenu
                              initialOption={formItem.conditionLink!}
                              onChangeOption={(option) => {
                                const newItem: AllFormInterfacesType = {
                                  ...formItem,
                                  conditionLink: option,
                                };
                                dispatch(updateFormField(newItem));
                              }}
                            />
                          </Box>
                        </Box>
                      }
                    >
                      <AppBranchConditionComponent
                        key={index}
                        formItem={formItem}
                        equality_options={getOptions(formItem.type)}
                        condition_or_action={formItem.branching!.condition[0]}
                      />
                      {formItem.branching!.condition.length > 1 && (
                        <Step>
                          <AppConditionStep
                            condition_or_action={
                              formItem.branching!.condition[1]
                            }
                            equality_options={getOptions(formItem.type)}
                            formItem={formItem}
                          />
                        </Step>
                      )}
                    </Stepper>

                    <AppBranchActionComponent
                      equality_options={actionSelectOptions}
                      formItem={formItem}
                    />
                  </Box>

                  <Box sx={{ position: 'absolute', right: 50, bottom: -15 }}>
                    <Chip
                      label="Delete block"
                      sx={{
                        ':hover': {
                          backgroundColor: colors.error,
                          color: colors.white,
                        },
                      }}
                      onClick={() => {
                        const newItem = {
                          ...formItem,
                          branching: null,
                        };
                        dispatch(updateFormField(newItem));
                      }}
                    />
                  </Box>
                </Box>
              );
            })
          )}
        </Box>
        <Box
          height={'10%'}
          width={'95%'}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'flex-end'}
          flexDirection={'row'}
        >
          <Button
            variant="contained"
            sx={{ color: colors.white, textTransform: 'capitalize' }}
            onClick={
              selectedItem?.branching == null ? handleForm : handleProceed
            }
          >
            {selectedItem?.branching == null ? 'Add Condition' : 'Proceed'}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default AppModal;
