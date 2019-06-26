export const formReducer = (state: any, action: any) => {
  const elements = [...state.elements];
  const index = state.currentIndex;
  switch (action.type) {
    case "ADD_FIELD":
      elements.splice(index + 1, 0, action.field);
      return {
        ...state,
        elements,
        modalState: { ...state.modalState, show: false },
      };
    case "ADD_LIST":
      const listField = {
        type: action.fieldType,
        config: {
          colWidth: "col-6",
          title: action.fieldType,
        },
      };
      elements.splice(index + 1, 0, listField);
      return {
        ...state,
        elements,
        modalState: { ...state.modalState, show: false },
      };
    case "SHOW_MODAL":
      return {
        ...state,
        modalState: { ...state.modalState, show: true },
        currentIndex: action.currentIndex,
      };
    case "HIDE_MODAL":
      return {
        ...state,
        modalState: { ...state.modalState, show: false },
        currentField: "",
      };

    case "EDIT_FIELD":
      return {
        ...state,
        elements,
        modalState: { ...state.modalState, show: true },
        currentField: {
          currentIndex: action.currentIndex,
          type: action.fieldType,
          config: action.config,
        },
      };

    case "UPDATE_FIELD":
      const updatedField = {
        type: action.fieldType,
        config: action.config,
        order: action.currentIndex,
      };
      elements.splice(action.currentIndex, 1, updatedField);
      return {
        ...state,
        elements,
        modalState: { ...state.modalState, show: false },
        currentField: "",
      };

    case "DELETE_FIELD":
      elements.splice(action.currentIndex, 1);
      return {
        ...state,
        elements,
      };

    case "SET_FORM_INFO":
      return {
        ...state,
        title: action.title,
        formNumber: action.formNumber,
        status: action.status,
      };

    case "UPDATE_DRAG_DROP_FIELDS":
      return {
        ...state,
        elements: action.fields,
      };
    default:
      return state;
  }
};
