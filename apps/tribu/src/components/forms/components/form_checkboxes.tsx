import { FC, useEffect, useState } from 'react';
import BaseFieldItem from '../base/base_item';
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
} from '@mui/material';
import { CheckboxInterface, FormItemElementInterface } from '@tribu/forms';
import { Control, Controller, FieldValues } from 'react-hook-form';
import AppErrorMessage from '../base/app_error2_message';
import { generateFormName } from '../../../utils/helpers/formatters';
interface FormCheckBoxInterface extends CheckboxInterface {
  control?: Control<FieldValues>;
}
const FormCheckBox: FC<FormCheckBoxInterface> = (
  item: FormCheckBoxInterface
) => {
  useEffect(() => {
    // setSelectedItems(item.selectedElements ?? []);
  }, []);

  const [selectedItems, setSelectedItems] = useState<
    FormItemElementInterface[]
  >([]);

  const name = generateFormName(item.label, item.id);

  return (
    <BaseFieldItem item={item}>
      <Box>
        <FormControl>
          <FormGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
          >
            <Controller
              name={name}
              render={({ fieldState: { error }, field }) => {
                if (selectedItems?.length > 0) {
                  // field.value = selectedItems;
                  // selectedItems =field.value;
                  // setSelectedItems(field.value);
                }
                return (
                  <>
                    {item.elements &&
                      item.elements.map((element, index) => {
                        return (
                          <FormControlLabel
                            key={index}
                            control={
                              <Checkbox
                                onChange={(e) => {
                                  const otherItems = selectedItems.filter(
                                    (item) => item.value !== element.value
                                  );

                                  !selectedItems.includes(element)
                                    ? selectedItems.push(element)
                                    : setSelectedItems(otherItems);

                                  e.target.checked
                                    ? field.onChange(selectedItems)
                                    : field.onChange(otherItems);
                                }}
                                checked={selectedItems?.includes(element)}
                              />
                            }
                            label={element.value}
                          />
                        );
                      })}

                    <AppErrorMessage message={error?.message} />
                  </>
                );
              }}
            />
          </FormGroup>
        </FormControl>
      </Box>
    </BaseFieldItem>
  );
};

export default FormCheckBox;
