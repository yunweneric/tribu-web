import { FC } from 'react';
import { useDrop } from 'react-dnd';
import { FormFields } from '../../../../../libs/forms/src/enum';
import {
  addFormField,
  setActiveSection,
  setSortedItems,
} from '../../data/logic/form.slice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../data/store/app_store';
import { Box, Typography } from '@mui/material';
import { AllFormInterfacesType } from '../../../../../libs/forms/src/types/all_form_types';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { StrictModeDroppable } from './strick_mode_droppable';
import { FormProvider, useForm } from 'react-hook-form';
import colors from '../../utils/styles/colors.module.scss';
import FormDraggableWrapper from './form_draggble_wrapper';
import { TextInputInterface } from '@tribu/forms';
import FormFieldRenderer from '../forms/components/form_field_renderer';
import BaseFieldItem from '../forms/base/base_item';
interface DropZoneProps {
  width?: string;
  activeSectionIndex: number;
}
const DropZone: FC<DropZoneProps> = ({ width, activeSectionIndex }) => {
  const dispatch = useDispatch();
  const formItems: AllFormInterfacesType[] = useSelector(
    (state: RootState) => state.form.sections[activeSectionIndex].formItems
  );

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: [
      FormFields.INPUT,
      FormFields.TEXTAREA,
      FormFields.DIVIDER,
      FormFields.RADIO,
      FormFields.CHECKBOX,
      FormFields.NUMBER_INPUT,
      FormFields.SLIDER,
      FormFields.RATING,
      FormFields.RANKING,
      FormFields.MATRIX_TABLE,
      FormFields.DATE_TIME,
      FormFields.PARAGRAPH,
    ],

    drop: (element: { item: TextInputInterface }, monitor) => {
      const itemExist = formItems.includes(element.item);
      dispatch(setActiveSection(activeSectionIndex));
      if (!itemExist) {
        const newElement: AllFormInterfacesType = {
          ...element.item,
          activeSectionIndex: activeSectionIndex,
        };
        dispatch(addFormField(newElement));

        // dropItemRef.current?.scrollIntoView({
        //   block: "end",
        //   behavior: "smooth",
        // });
      }

      if (element.item.id != null) {
        if (formItems.length > 1) {
          const itemIndex = formItems.findIndex(
            (item) => item.id == element.item.id
          );

          const offSetGreater =
            monitor!.getClientOffset()!.y >
            monitor!.getInitialClientOffset()!.y;
          const hoverIndex = offSetGreater ? itemIndex + 1 : itemIndex;

          const results = monitor?.canDrop();
          console.log('results', results, hoverIndex);
        }
      }
    },

    hover: (draggedItem, monitor) => {
      monitor.isOver({ shallow: true });
      console.log('draggedItem', draggedItem);
    },

    collect: (monitor) => {
      return {
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      };
    },
  });

  const isActive = canDrop && isOver;

  const form = useForm();

  const handleDrop = (item: DropResult) => {
    const newItems = [...formItems];
    dispatch(setActiveSection(activeSectionIndex));
    const [reorderedItem] = newItems.splice(item.source.index, 1);
    if (item.destination != null) {
      newItems.splice(item.destination.index, 0, reorderedItem);
      const reIndexItems = newItems.map((item, index) => {
        return { ...item, index: index };
      });
      dispatch(setSortedItems(reIndexItems));
    }
  };

  return (
    <FormProvider {...form}>
      <DragDropContext onDragEnd={handleDrop}>
        <Box
          ref={drop}
          sx={{
            padding: '4rem 0',
            borderRadius: '0.2rem',
            border: isActive
              ? `1px dashed ${colors.primary}`
              : `3px solid ${colors.gray}`,
            width: `${width}`,
          }}
        >
          <Box>
            {formItems.length == 0 ? (
              <Typography textAlign={'center'} sx={{}}>
                Drop Fields here to get started!
              </Typography>
            ) : (
              <StrictModeDroppable droppableId="droppable_id_1">
                {(provided) => (
                  <Box
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    sx={{
                      width: '100%',
                    }}
                  >
                    <Box>
                      {formItems.map((item, index) => {
                        const element = {
                          ...item,
                          activeSectionIndex: activeSectionIndex,
                          index: index,
                        };

                        return (
                          <FormDraggableWrapper key={index} index={index}>
                            <BaseFieldItem item={element}>
                              <FormFieldRenderer key={index} {...element} />
                            </BaseFieldItem>
                          </FormDraggableWrapper>
                        );
                      })}
                      {provided.placeholder}
                    </Box>
                  </Box>
                )}
              </StrictModeDroppable>
            )}
          </Box>
        </Box>
      </DragDropContext>
    </FormProvider>
  );
};

export default DropZone;
