import React, { useEffect, useState } from "react";
import { useStateValue } from "../../state/formContext";
import styles from "./FormBuilder.module.css";
import FormFieldEditor from "./FormFieldEditor";

interface FormEditorPresenter {
  EditorProps: any[];
}

const placeholder = document.createElement("div");
placeholder.className = styles.placeholder;

const FormEditorPresenter: React.FunctionComponent<
  FormEditorPresenter
> = () => {
  const [{ elements }, dispatch]: any = useStateValue();
  const [fields, setFields] = useState(elements);

  useEffect(() => {
    setFields(elements);
  }, [elements]);

  let dragged: any;
  let container: any;

  const dragStart = (e: any) => {
    dragged = e.currentTarget;
    dragged.style.display = "block";
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("FormField", dragged);
  };

  const dragEnd = (e: any) => {
    const tempFields = fields;
    if (dragged) {
      dragged.style.display = "block";
    }
    if (container && container.className.includes("dragContainer")) {
      container.parentNode.removeChild(placeholder);
      const from = Number(dragged.dataset.id);
      let to = Number(container.dataset.id);
      if (from < to) {
        to--;
      }
      tempFields.splice(to, 0, tempFields.splice(from, 1)[0]);
      dispatch({ type: "UPDATE_DRAG_DROP_FIELDS", fields: [...tempFields] });
    }
  };

  const dragOver = (e: any) => {
    e.preventDefault();
    if (dragged) {
      dragged.style.display = "none";
    }

    if (e.target.className === "placeholder") {
      return;
    }
    if (e.target.className.includes("dragContainer")) {
      container = e.target;
      container.parentNode.insertBefore(placeholder, container);
    }
  };

  const Forms = fields.map((elem: any, i: any) => {
    return (
      <FormFieldEditor
        onDragStart={dragStart}
        onDragEnd={dragEnd}
        key={i}
        order={i}
        type={elem.type}
        config={elem.config}
      />
    );
  });

  return (
    <div className={styles.formEditorContainer} onDragOver={dragOver}>
      {Forms}
      <div data-id={10000} className={styles.last + " dragContainer"} />
    </div>
  );
};

export default FormEditorPresenter;
