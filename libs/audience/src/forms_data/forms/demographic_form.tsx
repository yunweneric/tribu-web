import { demographicData } from '../data/data';
import InputField, { InputFieldProps } from '../fields/input_field';

const Demographic = () => {
  const generateField = (field: Field) => {
    switch (field.type) {
      case 'input':
        return <InputField {...(field as InputFieldProps)} />;

      case 'checkbox':
        return <InputField {...(field as InputFieldProps)} />;

      default:
        break;
    }

    return <></>;
  };
  return (
    <div>
      {...demographicData.map((field, key) => {
        return generateField(field);
      })}
    </div>
  );
};

export default Demographic;
