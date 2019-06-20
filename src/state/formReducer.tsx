export const formReducer = (state: any, action: any) => {
  const elements = [...state.elements];
  const index = state.currentIndex;
  switch (action.type) {
    case "ADD_FIELD":
      elements.splice(index + 1, 0, action.field);
      return {
        ...state,
        elements,
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
      };

    case "EDIT_FIELD":
      elements.splice(index + 1, 1, action.field);
      return {
        ...state,
        elements,
      };
    case "DELETE_FIELD":
      elements.splice(action.currentIndex, action.currentIndex + 1);
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
    default:
      return state;
  }
};
