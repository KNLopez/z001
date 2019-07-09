import {
  ADD_FIELD,
  CLOSE_SECTION,
  DELETE_FIELD,
  EDIT_FIELD,
  HIDE_MODAL,
  RECORD_UPDATES,
  SET_FORM_INFO,
  SHOW_MODAL,
  UPDATE_DRAG_DROP_FIELDS,
  UPDATE_FIELD,
  UPLOAD_TEMPLATE,
  ADD_LIST,
} from "./constants";

export const showModal = (currentIndex: number | string) => {
  return {
    type: SHOW_MODAL,
    currentIndex,
  };
};

export const hideModal = () => {
  return {
    type: HIDE_MODAL,
  };
};

export const addField = (field: any) => {
  return {
    type: ADD_FIELD,
    field,
  };
};

export const addList = (fieldType: string) => {
  return {
    type: ADD_LIST,
    fieldType,
  };
};

export const editField = (
  fieldType: string,
  config: any,
  currentIndex: number | string,
  closed: boolean,
) => {
  return {
    type: EDIT_FIELD,
    fieldType,
    config,
    currentIndex,
    closed,
  };
};

export const updateField = (
  fieldType: string,
  config: any,
  currentIndex: number | string,
  closed: boolean,
) => {
  return {
    type: UPDATE_FIELD,
    fieldType,
    config,
    currentIndex,
    closed,
  };
};

export const deleteField = (currentIndex: number | string) => {
  return {
    type: DELETE_FIELD,
    currentIndex,
  };
};

export const closeSection = (currentIndex: number | string) => {
  return {
    type: CLOSE_SECTION,
    currentIndex,
  };
};

export const recordUpdates = (
  prevConfig: any,
  newConfig: any,
  currentIndex: number | string,
  reason: string,
) => {
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  return {
    type: RECORD_UPDATES,
    prevConfig,
    newConfig,
    date,
    time,
    currentIndex,
    reason,
  };
};

export const uploadTemplate = (elements: any) => {
  return {
    type: UPLOAD_TEMPLATE,
    elements,
  };
};

export const setFormInfo = (
  title: string,
  formNumber: string,
  status: string,
) => {
  return {
    type: SET_FORM_INFO,
    title,
    formNumber,
    status,
  };
};

export const updateDragAndDropFields = (fields: any) => {
  return {
    type: UPDATE_DRAG_DROP_FIELDS,
    fields,
  };
};

export default {
  showModal,
  hideModal,
  addField,
  addList,
  editField,
  updateField,
  deleteField,
  closeSection,
  recordUpdates,
  setFormInfo,
  uploadTemplate,
  updateDragAndDropFields,
};
