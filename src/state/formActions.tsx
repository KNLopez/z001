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
  closed: boolean,
) => {
  return {
    type: "EDIT_FIELD",
    fieldType,
    config,
    currentIndex,
    closed,
  };
};

export const CLOSE_SECTION = (currentIndex: number | string) => {
  return {
    type: "CLOSE_SECTION",
    currentIndex,
  };
};

export const UPDATE_FIELD = (
  fieldType: string,
  config: any,
  currentIndex: number | string,
  closed: boolean,
) => {
  return {
    type: "UPDATE_FIELD",
    fieldType,
    config,
    currentIndex,
    closed,
  };
};

export const RECORD_UPDATES = (
  prevConfig: any,
  newConfig: any,
  currentIndex: number | string,
) => {
  const date = new Date().toLocaleDateString();
  return {
    type: "RECORD_UPDATES",
    prevConfig,
    newConfig,
    date,
    currentIndex,
  };
};

export const DELETE_FIELD = (currentIndex: number | string) => {
  return {
    type: "DELETE_FIELD",
    currentIndex,
  };
};
