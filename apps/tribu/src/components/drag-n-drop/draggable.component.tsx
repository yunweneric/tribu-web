import { FC } from 'react';
import { useDrag } from 'react-dnd';
import { Avatar, Box } from '@mui/material';

import colors from '../../utils/styles/colors.module.scss';
import { FormFields } from '../../../../../libs/forms/src/enum';
import { AllFormInterfacesType } from '../../../../../libs/forms/src/types/all_form_types';

interface DraggableComponentProps {
  item: AllFormInterfacesType;
}

const DraggableComponent: FC<DraggableComponentProps> = ({ item }) => {
  const [{ isDragging }, drag] = useDrag({
    type:
      FormFields.INPUT ||
      FormFields.TEXTAREA ||
      FormFields.DIVIDER ||
      FormFields.RADIO ||
      FormFields.CHECKBOX ||
      FormFields.NUMBER_INPUT ||
      FormFields.SLIDER ||
      FormFields.RATING ||
      FormFields.RANKING ||
      FormFields.MATRIX_TABLE ||
      FormFields.PARAGRAPH,
    item: { item },
    end: (item, monitor) => {
      const result = monitor.getDropResult();
      console.log('result', result, item, monitor);
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <Box
      ref={drag}
      sx={{
        opacity: isDragging ? 1 : 1,
        backgroundColor: !isDragging ? '#fff' : '#fff',
        border: isDragging ? '1px solid' : '1px solid',
        borderColor: colors.gray,
        bgcolor: colors.white,
        width: {
          xs: '80%',
          md: '40%',
          lg: '40%',
        },
        borderRadius: 1.5,
        marginTop: 5,
        paddingY: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          borderRadius: 0.5,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Avatar
          variant="rounded"
          sx={{
            bgcolor: colors.gray,
          }}
        >
          <img src={item.icon} alt="" width={'15px'} height={'15px'} />
        </Avatar>

        <p>{item.label}</p>
      </Box>
    </Box>
  );
};

export default DraggableComponent;
