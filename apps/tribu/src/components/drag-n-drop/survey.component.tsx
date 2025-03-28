import DropZone from './drop_zone.component';
import colors from '../../utils/styles/colors.module.scss';
import { Box, Chip, IconButton, Stack, TextField } from '@mui/material';
import { RootState } from '../../data/store/app_store';
import { useDispatch, useSelector } from 'react-redux';
import {
  addFormSection,
  removeFormSection,
  updateFormDescription,
  updateFormTitle,
} from '../../data/logic/form.slice';
import { GlobalTab } from '../../../../../libs/forms/src/enum';
import FormPreview from '../preview/preview';
import AppInput from '../forms/base/app_input';
import { useEffect, useRef } from 'react';

const SurveyComponent = () => {
  const dispatch = useDispatch();
  const dropItemRef = useRef<HTMLDivElement>(null);

  const { sections, formTitle, formDescription } = useSelector(
    (state: RootState) => state.form
  );
  useEffect(() => {
    if (dropItemRef.current) {
      // dropItemRef.current?.scrollIntoView({
      //   block: "end",
      //   behavior: "smooth",
      // });
    }
  }, [sections]);

  const allSections = [...sections];

  const currentTab:
    | GlobalTab.CREATE
    | GlobalTab.PREVIEW
    | GlobalTab.SUBMISSION = useSelector(
    (state: RootState) => state.tabs.currentGlobalTab
  );

  if (currentTab == GlobalTab.PREVIEW)
    return (
      <Box
        sx={{
          padding: '0 2rem 0 2rem',
          height: '90vh',
          width: '100%',
        }}
      >
        <FormPreview />
      </Box>
    );

  if (currentTab == GlobalTab.SUBMISSION)
    return (
      <Box
        sx={{
          padding: '0 2rem 0 2rem',
          height: '90vh',
          // overflowY: "scroll",
          width: '100%',
          borderLeft: `1px solid ${colors.gray}`,
          borderRight: `1px solid ${colors.gray}`,
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        Submission
      </Box>
    );

  if (currentTab == GlobalTab.CREATE)
    return (
      <Box
        sx={{
          padding: '0 2rem 0 2rem',
          overflowY: 'scroll',
          width: '100%',
          height: '90vh',
        }}
        // ref={dropItemRef}
      >
        <Box
          sx={{
            width: '100%',
            padding: '1rem 2rem 1.5rem 2rem',
            backgroundColor: colors.primary,
            // margin: "2rem 0 1rem 0",
            color: colors.white,
            borderRadius: 1,
          }}
        >
          <AppInput
            placeholder="Survey Name"
            id="form-title"
            maxLength={255}
            onChange={(e) => {
              const newFormItem = {
                ...formTitle,
                label: e.target.value,
              };
              dispatch(updateFormTitle(newFormItem));
            }}
            hasBorder={false}
            styles={{
              backgroundColor: colors.primary,
              fontSize: 30,
              color: colors.white,
            }}
            type="text"
          />

          <TextField
            fullWidth
            variant="outlined"
            color="primary"
            multiline
            minRows={2}
            value={formDescription.description}
            InputProps={{ style: { color: colors.white } }}
            onChange={(e) => {
              const newFormItem = {
                ...formDescription,
                description: e.target.value,
              };
              dispatch(updateFormDescription(newFormItem));
            }}
            sx={{
              border: 'none',
              fontStyle: 'italic',
              '& fieldset': { border: 'none' },
              ':focus': {
                border: '1px solid #FFFFFF',
                '& fieldset': { border: 'none' },
              },
              ':hover': {
                border: 'none',
                '& fieldset': { border: 'none' },
              },
            }}
          />
        </Box>
        {allSections &&
          allSections.map((item, index) => {
            const displayIndex = index + 1;
            return (
              <Box sx={{ position: 'relative', my: 4 }} key={index}>
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'end'}
                  width={'100%'}
                >
                  <DropZone width="100%" activeSectionIndex={index} />
                </Box>
                <Box sx={{ position: 'absolute', right: 30, bottom: -15 }}>
                  <Stack direction={'row'} spacing={2} alignItems={'center'}>
                    <IconButton
                      aria-label="add"
                      sx={{
                        width: 30,
                        height: 30,
                        bgcolor: colors.primary,
                        fontSize: 14,
                        color: colors.white,
                      }}
                    >
                      {displayIndex}
                    </IconButton>
                    <Chip
                      label="New block"
                      sx={{
                        ':hover': {
                          backgroundColor: colors.primary,
                          color: colors.white,
                        },
                      }}
                      onClick={() => {
                        dispatch(
                          addFormSection({ formItems: [], index: index + 1 })
                        );
                      }}
                    />
                    {index != 0 && (
                      <Chip
                        label="Delete block"
                        sx={{
                          ':hover': {
                            backgroundColor: colors.error,
                            color: colors.white,
                          },
                        }}
                        onClick={() => {
                          dispatch(removeFormSection(item));
                        }}
                      />
                    )}
                  </Stack>
                </Box>
              </Box>
            );
          })}
        <Box ref={dropItemRef} height={10} width={'100%'} />
      </Box>
    );
};

export default SurveyComponent;
