import { createSlice, nanoid } from '@reduxjs/toolkit';
import { FormFields } from '../../../../../libs/forms/src/enum';
import { AllFormInterfacesType } from '../../../../../libs/forms/src/types/all_form_types';
import { AppFormState } from '@tribu/forms';

const initialState: AppFormState = {
  sections: [{ formItems: [], id: '928JHAIDKWHAA-992JIH', index: 0 }],
  activeSection: 0,
  formTitle: {
    type: FormFields.FORM_TITLE,
    label: 'Survey Form',
    description: 'description',
    id: 'form-title',
  },
  formDescription: {
    type: FormFields.FORM_DESCRIPTION,
    label: 'Survey Description',
    description: 'description',
    id: 'form-description',
  },
  selectedField: null,
};

export const FormSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addFormField: (state, action) => {
      const field = {
        ...action.payload,
        id: nanoid(),
        index: state.sections[state.activeSection].formItems.length,
      };
      state.sections[state.activeSection].formItems.push(field);
      state.selectedField = field;
    },
    updateFormField: (state, action) => {
      // state.sections[state.activeSection].formItems[action.payload.index] =
      //   action.payload;
      // state.selectedField = action.payload;

      const item: AllFormInterfacesType = action.payload;
      state.sections[item.activeSectionIndex].formItems[item.index] =
        action.payload;
      state.selectedField = action.payload;
      console.log(item);
    },
    setSortedItems: (state, action) => {
      // state.sections[state.activeSection].formItems.splice(
      //   0,
      //   state.sections.length
      // );
      // const newArray = [...action.payload];
      // // state.sections.concat(newArray);
      // console.log("State sections", state.sections[state.activeSection]);
      // newArray.forEach((item, index) => {
      //   const newItem = { ...item, index: index };
      //   state.sections[state.activeSection].formItems.push(newItem);
      // });
      state.sections[state.activeSection].formItems = action.payload;

      // console.log("newArray", newArray);
    },
    removeFormField: (state, action) => {
      const newItems = state.sections[state.activeSection].formItems.filter(
        (field) => field.id != action.payload.id
      );
      state.sections[state.activeSection].formItems = newItems;
      if (state.selectedField?.id == action.payload.id) {
        state.selectedField = null;
      }
      if (newItems.length == 0) state.selectedField = null;
    },
    setSelectedField: (state, action) => {
      state.selectedField = action.payload;
    },
    updateFormTitle: (state, action) => {
      state.formTitle = action.payload;
    },
    updateFormDescription: (state, action) => {
      state.formDescription = action.payload;
    },
    addFormSection: (state, action) => {
      const field = {
        ...action.payload,
        id: nanoid(),
      };
      state.sections.splice(field.index, 0, field);
      // state.sections.push(field);
    },
    setActiveSection: (state, action) => {
      state.activeSection = action.payload;
    },
    removeFormSection: (state, action) => {
      const newItems = state.sections.filter(
        (field) => field.id != action.payload.id
      );
      state.sections = newItems;

      // if (newItems.length == 0) state.selectedField = null;
      state.selectedField = null;
    },
  },
});

export const {
  addFormField,
  addFormSection,
  removeFormSection,
  setActiveSection,
  removeFormField,
  setSelectedField,
  setSortedItems,
  updateFormField,
  updateFormTitle,
  updateFormDescription,
} = FormSlice.actions;
export default FormSlice.reducer;
