const initialState: any[] = [];

const rootReducer = (state: any[] = initialState, action: any): any => {
  const newState = [...state];
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];
    case "EDIT_TASK":
      newState.splice(action.id, 1, action.task);
      return [...newState];
    case "DELETE_TASK":
      newState.splice(action.id, 1);
      return [...newState];
    default:
      return state;
  }
};

export default rootReducer;
export type ApplicationState = ReturnType<typeof rootReducer>;
