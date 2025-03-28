import { FieldErrors, FieldValues } from 'react-hook-form';
import { ErrorMessage } from '../types/error.types';
// import colors from '../styles/colors.module.scss';
const generateFormName = (label: string, id: string) => {
  // console.log(label, id);
  return label.split(' ').join('') + `-${id}`;
};

const getErrorMessage = (
  errors: FieldErrors<FieldValues>,
  label: string,
  id: string
): ErrorMessage | null => {
  let errorMessage = null;
  const errorKeys = Object.keys(errors);
  const errorValues = Object.values(errors);
  const newId = generateFormName(label, id);

  for (let i = 0; i < errorKeys.length; i++) {
    for (let z = 0; z < errorValues.length; z++) {
      if (errorKeys[i] == newId) {
        errorMessage = {
          id: newId,
          message: errorValues[z]?.message as string,
        };
        return errorMessage;
      }
    }
  }

  return errorMessage;
};
const styleFormFields = (props: any) => {
  return {
    // backgroundColor: '#fff',
    // border: !props.hasBorder ? 'none' : `1px solid ${colors.gray}`,
    // boxShadow: 'none',
    // borderRadius: !props.hasBorder ? 0 : 0.5,
    // '& fieldset': {
    //   border: !props.hasBorder ? 'none' : `1px solid ${colors.gray}`,
    // },
    // ':focus': {
    //   border: !props.hasBorder ? 'none' : `1px solid ${colors.gray}`,
    //   '& fieldset': {
    //     border: !props.hasBorder ? 'none' : `1px solid ${colors.gray}`,
    //   },
    // },
    // ':hover': {
    //   border: !props.hasBorder ? 'none' : `1px solid ${colors.gray}`,
    //   '& fieldset': {
    //     border: !props.hasBorder ? 'none' : `1px solid ${colors.gray}`,
    //   },
    // },
  };
};

const roundUpToMidnight = (date: Date): Date => {
  const roundedDate = new Date(date);
  roundedDate.setHours(24, 0, 0, 0);
  return roundedDate;
};

export {
  generateFormName,
  getErrorMessage,
  styleFormFields,
  roundUpToMidnight,
};
