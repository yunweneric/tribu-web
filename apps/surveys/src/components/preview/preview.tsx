import { useSelector } from "react-redux";
import { RootState } from "../../data/store/app_store";
import { AppFormState } from "../../data/interfaces";
import { Box, Stack, Typography } from "@mui/material";
import colors from "../../utils/styles/colors.module.scss";
import { FC, useEffect, useState } from "react";
import { AllFormInterfacesType } from "../../data/types/all_form_types";
import FormRenderer from "../forms/components/form_field_renderer";
import { useDispatch } from "react-redux";
import { FormProvider, useForm } from "react-hook-form";
import { evaluateCanSkip } from "../../utils/helpers/evaluators";
import {
  setCurrentIndex,
  setPreviewItems,
  updatePreviewItem,
} from "../../data/logic/preview.slice";
import { yupResolver } from "@hookform/resolvers/yup";
import generateValidationSchema from "../../utils/helpers/validation_parser";
import PreviewProgressIndicator from "./components/progress_indicator";
import PreviewButtons from "./components/form_progress_buttons";
import { FormFields } from "../../data/enum";
import { ActionActions } from "../../data/enum/condition_actions";
import { getErrorMessage } from "../../utils/helpers/formatters";

type AnimatingData = {
  isAnimating: boolean;
  isForward: boolean;
};
const FormPreview = () => {
  const dispatch = useDispatch();

  const formDetails: AppFormState = useSelector(
    (state: RootState) => state.form
  );
  const { previewItems, currentIndex } = useSelector(
    (state: RootState) => state.previewItem
  );

  const [reverseIndexes, setReverseIndexes] = useState<number[]>([0]);

  const [validationSchema, setValidationSchema] = useState<any>();

  const form = useForm({
    resolver: yupResolver(validationSchema),
  });

  const { handleSubmit, control, formState, reset, watch } = form;

  const { errors } = formState;

  useEffect(() => {
    console.log("Rebuilding validation schema...");

    const validSection = formDetails.sections.filter(
      (item) => item.formItems.length > 0
    );

    if (validSection.length > 0) {
      const allItems = validSection.map((item) => item.formItems).flat();
      const items = allItems.map((item, index) => {
        return { ...item, index: index };
      });

      const filteredItems = items.filter(
        (item) => item.type != FormFields.DIVIDER
      );

      dispatch(setPreviewItems(filteredItems));
      const schema = generateValidationSchema(filteredItems);
      setValidationSchema(schema);
    }

    return () => {
      dispatch(setPreviewItems([]));
      reset();
      dispatch(setCurrentIndex(0));
    };
  }, [formDetails.sections]);

  const onSubmit = (data) => {
    console.log("onSubmit", data);
  };
  const [animationState, setAnimationState] = useState<AnimatingData>({
    isAnimating: false,
    isForward: false,
  });

  const animateNext = (isForward: boolean) => {
    const label = previewItems[currentIndex].label;

    const id = previewItems[currentIndex].id;

    const error = getErrorMessage(errors, label, id);
    // console.log("errorMessage 2", errors, error);

    if (error == null) {
      if (currentIndex == previewItems.length - 1 && isForward) {
        console.log("Submitting ...");
        return;
      }
      setAnimationState({ isAnimating: true, isForward });
      // setAnimationState({ isAnimating: false, isForward });
      setTimeout(() => {
        setAnimationState({ isAnimating: false, isForward });
        isForward ? animateForward() : animateBackward();
      }, 600);
    }
  };

  const animateBackward = () => {
    if (reverseIndexes.length > 0) {
      reverseIndexes.pop();
      setReverseIndexes(reverseIndexes);
      dispatch(setCurrentIndex(reverseIndexes[reverseIndexes.length - 1]));
    }
  };
  const animateForward = () => {
    if (currentIndex == previewItems.length - 1) {
      return;
    }
    // If there is no conditions,
    if (previewItems[currentIndex].branching == null) {
      if (currentIndex < previewItems.length - 1) {
        dispatch(setCurrentIndex(currentIndex + 1));
        setReverseIndexes([...reverseIndexes, currentIndex + 1]);
      }
      return;
    }
    const canSkip = evaluateCanSkip(previewItems[currentIndex], watch);
    console.log("canSkip", canSkip);
    if (canSkip) {
      const nextActiveSectionIndex =
        Number(previewItems[currentIndex].branching.action.value) - 1;

      updateNextItemPreviousId(
        previewItems[currentIndex].id,
        nextActiveSectionIndex
      );

      preformNextActionFromCondition(
        previewItems[currentIndex],
        nextActiveSectionIndex
      );
    } else {
      if (currentIndex < previewItems.length - 1) {
        dispatch(setCurrentIndex(currentIndex + 1));
        setReverseIndexes([...reverseIndexes, currentIndex + 1]);
      }
    }
  };

  const preformNextActionFromCondition = (
    item: AllFormInterfacesType,
    nextActiveSectionIndex: number
  ) => {
    if (item.branching.action.action == ActionActions.SKIP) {
      const nextSection = formDetails.sections[nextActiveSectionIndex];

      if (nextSection.formItems.length > 0) {
        const nextFirstSectionItem = nextSection.formItems[0];
        const nextPreviewItem = previewItems.filter(
          (item) => item.id === nextFirstSectionItem.id
        );
        const nextItemIndex = previewItems.indexOf(nextPreviewItem[0]);
        dispatch(setCurrentIndex(nextItemIndex));
        setReverseIndexes([...reverseIndexes, nextItemIndex]);
      } else {
        console.log("Submit form");
      }
    }
  };

  const updateNextItemPreviousId = (
    currentItemId: string,
    nextActiveSectionIndex: number
  ) => {
    const nextSection = formDetails.sections[nextActiveSectionIndex];

    if (nextSection.formItems.length > 0) {
      const nextFirstItem = nextSection.formItems[0];
      const nextItemInPreviewItems = previewItems.find(
        (item) => item.id == nextFirstItem.id
      );

      if (nextItemInPreviewItems) {
        const updatedNextItem: AllFormInterfacesType = {
          ...nextItemInPreviewItems,
          previousItemId: currentItemId,
        };
        dispatch(updatePreviewItem(updatedNextItem));
      }
    }
  };
  if (previewItems.length == 0) {
    return (
      <Box
        height={"100%"}
        width={"100%"}
        alignItems={"center"}
        justifyContent={"center"}
        display={"flex"}
      >
        <Typography textAlign={"center"}>Form is empty!</Typography>
      </Box>
    );
  }

  return (
    <Box height={"100%"}>
      <FormProvider {...form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          style={{ height: "100%" }}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            height={"100%"}
          >
            <Box
              sx={{
                padding: "4rem 3rem",
                borderBottom: `2px solid ${colors.gray}`,
                backgroundColor: colors.primary,
                color: colors.white,
                borderRadius: 1,
                mt: 4,
              }}
            >
              <Typography fontSize={30}>
                {formDetails.formTitle.label}
              </Typography>
              <Typography marginTop={2}>
                {formDetails.formDescription.description}
              </Typography>
            </Box>

            <Box
              sx={{
                transition: "all 0.2s",
                translate: `${
                  animationState.isAnimating
                    ? animationState.isForward
                      ? "10rem"
                      : "10rem"
                    : "0"
                } 0`,
                opacity: ` ${animationState.isAnimating ? "0" : "1"}`,
              }}
            >
              <Stack>
                {previewItems &&
                  previewItems
                    .map((item, index) => {
                      const newItem = {
                        ...item,
                        isPreview: true,
                        control: control,
                      };
                      return <FormRenderer key={index} {...newItem} />;
                    })
                    .filter((_, index) => index == currentIndex)}
              </Stack>
            </Box>
            <Stack
              width="100%"
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              mb={5}
            >
              <FormProgressIndicators
                currentIndex={currentIndex}
                previewItems={previewItems}
              />
              <PreviewButtons
                currentIndex={currentIndex}
                animateNext={animateNext}
                previewItems={previewItems}
                reverseIndexes={reverseIndexes}
              />
            </Stack>
          </Box>
        </form>
      </FormProvider>
    </Box>
  );
};

type FormProgressIndicatorsType = {
  currentIndex: number;
  previewItems: AllFormInterfacesType[];
};
const FormProgressIndicators: FC<FormProgressIndicatorsType> = ({
  currentIndex,
  previewItems,
}: FormProgressIndicatorsType) => {
  return (
    <Stack>
      <Box mb={2} />
      <PreviewProgressIndicator
        currentIndex={currentIndex}
        items={previewItems}
        title="Progress"
      />
    </Stack>
  );
};

export default FormPreview;
