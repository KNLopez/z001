const sampleFormProps: any[] = [
  {
    type: "section",
    config: {
      title: "First Section",
      colWidth: "col-12",
    },
  },
  {
    type: "section",
    config: {
      title: "Testing Drag and Drop",
      colWidth: "col-12",
    },
  },
  {
    type: "section",
    config: {
      title: "Testing 3rd",
      colWidth: "col-12",
    },
  },
];

const ModalState = {
  show: false,
  field: "",
};

const formProps = {
  title: "",
  formNumber: "",
  status: "",
  elements: sampleFormProps,
  modalState: ModalState,
  currentField: "",
};

export default formProps;
