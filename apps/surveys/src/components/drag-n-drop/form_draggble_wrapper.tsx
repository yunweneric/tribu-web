import { FC, ReactNode } from "react";
import { Box } from "@mui/material";
import { Draggable } from "react-beautiful-dnd";
interface FormDraggableWrapperProps {
  index: number;
  children: ReactNode;
}

const FormDraggableWrapper: FC<FormDraggableWrapperProps> = ({
  index,
  children,
}) => {
  return (
    <Draggable draggableId={index.toString()} index={index}>
      {(provided) => (
        <Box
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          sx={{
            mb: 3,
            width: "100%",
          }}
        >
          {children}
        </Box>
      )}
    </Draggable>
  );
};

export default FormDraggableWrapper;
