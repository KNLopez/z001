export const ADD_FIELD = (field: any) => {
  return {
    type: "ADD_FIELD",
    field,
  };
};

export const SHOW_MODAL = (currentIndex: number | string) => {
  return {
    type: "SHOW_MODAL",
    currentIndex,
  };
};

export const HIDE_MODAL = () => {
  return {
    type: "HIDE_MODAL",
  };
};

export const EDIT_FIELD = (type: string, config: any, order: string) => {
  return {
    type: "EDIT_FIELD",
  };
};

export const DELETE_FIELD = (currentIndex: number | string) => {
  return {
    type: "DELETE_FIELD",
    currentIndex,
  };
};
