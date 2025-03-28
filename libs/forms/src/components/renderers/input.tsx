import { Box } from '@mui/system';

import { TextInputInterface } from '@tribu/forms';
import { useDispatch } from 'react-redux';
import AppInput from '../base/app_input';

const FormInputRenderer = (formItem: TextInputInterface) => {
  const dispatch = useDispatch();

  return (
    <Box width={'100%'}>
      <AppInput
        placeholder="Placeholder"
        id={formItem.id}
        value={formItem.placeholder}
        onChange={(e) => {
          const updatedItem = { ...formItem, placeholder: e.target.value };
          console.log(updatedItem);
        }}
        hasBorder={true}
        type={formItem.type}
      />
      <Box marginBottom={2} />
      <AppInput
        placeholder="Label"
        id={formItem.id}
        value={formItem.label}
        onChange={(e) => {
          const updatedItem = { ...formItem, label: e.target.value };
          console.log(updatedItem);
        }}
        hasBorder={true}
        type={formItem.type}
      />
    </Box>
  );
};

export default FormInputRenderer;
