import { demographicData } from '../data/data';
import InputField from '../fields/input_field';

const Demographic = () => {
  const generateField = (field: Field) => {
    switch (field.type) {
      case 'input':
        return <InputField />;

      case 'checkbox':
        return <InputField />;
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
