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

export const EDIT_FIELD = (
  fieldType: string,
  config: any,
  currentIndex: number | string,
) => {
  return {
    type: "EDIT_FIELD",
    fieldType,
    config,
    currentIndex,
  };
};

export const UPDATE_FIELD = (
  fieldType: string,
  config: any,
  currentIndex: number | string,
) => {
  return {
    type: "UPDATE_FIELD",
    fieldType,
    config,
    currentIndex,
  };
};

export const DELETE_FIELD = (currentIndex: number | string) => {
  return {
    type: "DELETE_FIELD",
    currentIndex,
  };
};
