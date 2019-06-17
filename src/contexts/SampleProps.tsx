
const sampleFormProps = [
  {
    type: "section",
    config: {
      colWidth: "col-12",
      subType: "mainSection",
      title: "This is a main Section",
    },
  },
  {
    type: "subSection",
    config: {
      colWidth: "col-12",
      title: "This is a subsection",
    },
  },
  {
    type: "singleLine",
    config: {
      colWidth: "col-6",
      title: "This is a short single line",
      placeholder: "short",
    },
  },
  {
    type: "singleLine",
    config: {
      colWidth: "col-6",
      title: "This is a short single line",
      placeholder: "short",
    },
  },
  {
    type: "singleLine",
    config: {
      colWidth: "col-12",
      title: "This is a long single line",
      placeholder: "long",
    },
  },
  {
    type: "textarea",
    config: {
      colWidth: "col-12",
      title: "This is a multiline",
      placeholder: "long",
    },
  },
  {
    type: "section",
    config: {
      colWidth: "col-12",
      subType: "mainSection",
      title: "Another Section",
    },
  },
  {
    type: "radio",
    config: {
      colWidth: "col-12",
      title: "These are radio buttons",
      options: ["radio", "radio2", "radio3"],
    },
  },
  {
    type: "numeric",
    config: {
      colWidth: "col-12",
      title: "This is a numeric field",
      placeholder: "Enter number",
      tolerance: true,
      toleranceType: "percent",
      min: 5,
      max: 100,
    },
  },
  {
    type: "checkbox",
    config: {
      colWidth: "col-12",
      title: "This is a checkbox field",
      notes: "Some Note",
    },
  },
  {
    type: "datepicker",
    config: {
      colWidth: "col-12",
      title: "This is a calendar",
    },
  },
];

const ModalState = {
  show: false,
  field: "",
};

const formProps = {
  title: "Form title",
  formNumber: "FORM0001",
  status: "DRAFT",
  elements: sampleFormProps,
  modalState: ModalState,
};

export default formProps;