import { demographicData } from '../data/data';
import {
  AllFormInterfacesType,
  AppInput,
  FormFields,
  AppSelect,
} from '@tribu/forms';

interface FormEditorRendererProps {
  field: AllFormInterfacesType;
}
const Demographic = () => {
  const generateField = (field: AllFormInterfacesType) => {
    switch (field.type) {
      case FormFields.INPUT:
        return (
          <AppInput
            {...field}
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
        );

      // case FormFields.NUMBER_INPUT:
      //   return <FormInputNumberRenderer {...field} />;

      // case FormFields.DATE_TIME:
      //   return <FormDateFieldRenderer {...field} />; // Update the type of FormDateFieldRenderer to TextInputInterface

      // case FormFields.SLIDER:
      //   return <FormSliderRenderer {...field} />;

      // case FormFields.RATING:
      //   return <FormRatingRenderer {...field} />;

      // case FormFields.TEXTAREA:
      //   return <FormTextAreaRenderer {...field} />;

      // case FormFields.PARAGRAPH:
      //   return <FormTextAreaRenderer {...field} />;

      case FormFields.RADIO:
        return (
          <AppSelect
            onChange={(e) => {}}
            items={[]}
            {...field}
            fullWidth={true}
          />
        );

      case FormFields.CHECKBOX:
        return (
          <AppSelect
            onChange={(e) => {}}
            items={[]}
            {...field}
            fullWidth={true}
          />
        );

      // case FormFields.MATRIX_TABLE:
      //   return <FormMatrixRenderer {...field} />;

      // case FormFields.RANKING:
      //   return <FormRankingRenderer {...field} />;

      default:
        break;
    }
    return <></>;
  };
  return (
    <div className="w-full">
      {...demographicData.map((field, key) => {
        return (
          <div className="mb-3" key={key}>
            {generateField(field)}
          </div>
        );
      })}
    </div>
  );
};

export default Demographic;
