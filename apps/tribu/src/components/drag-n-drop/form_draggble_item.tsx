import { Box } from '@mui/material';
import { Reorder, useMotionValue } from 'framer-motion';
import FormRenderer from '../forms/components/form_field_renderer';
import { useRaisedShadow } from '../../hooks/use_shadow';
import { AllFormInterfacesType } from '../../../../../libs/forms/src/types/all_form_types';
import { FC } from 'react';

type FormDraggableItemProps = {
  item: AllFormInterfacesType;
};
const FormDraggableItem: FC<FormDraggableItemProps> = ({
  item,
}: FormDraggableItemProps) => {
  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);
  return (
    <Reorder.Item
      value={item}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ boxShadow, y }}
    >
      <Box mb={2}>
        <FormRenderer {...item} />
      </Box>
    </Reorder.Item>
  );
};

export default FormDraggableItem;
