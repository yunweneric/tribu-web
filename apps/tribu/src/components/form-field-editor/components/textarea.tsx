import { Box } from '@mui/system';
import { TextAreaInterface, AppTextArea, AppInput } from '@tribu/forms';
import { useDispatch } from 'react-redux';
import { updateFormField } from '../../../data/logic/form.slice';
import { FormFields } from '../../../../../../libs/forms/src/enum';

const FormTextAreaRenderer = (formItem: TextAreaInterface) => {
  const dispatch = useDispatch();

  if (formItem.type == FormFields.PARAGRAPH)
    return (
      <Box width={'100%'}>
        <AppTextArea
          {...formItem}
          hasBorder={true}
          onChange={(e: any) => {
            const updatedItem = { ...formItem, value: e.target.value };
            dispatch(updateFormField(updatedItem));
          }}
        />
      </Box>
    );

  return (
    <Box width={'100%'}>
      <AppInput
        placeholder="Label"
        id={formItem.id}
        value={formItem.value}
        onChange={(e) => {
          const updatedItem = { ...formItem, label: e.target.value };
          console.log(updatedItem);
          dispatch(updateFormField(updatedItem));
        }}
        hasBorder={true}
        type="text"
      />
      <Box marginBottom={2} />
      <AppInput
        placeholder="Max length"
        id={formItem.id}
        value={formItem.value}
        onChange={(e) => {
          const updatedItem = { ...formItem, maxLength: e.target.value };
          console.log(updatedItem);
          dispatch(updateFormField(updatedItem));
        }}
        hasBorder={true}
        type="number"
      />
    </Box>
  );
};

export default FormTextAreaRenderer;
