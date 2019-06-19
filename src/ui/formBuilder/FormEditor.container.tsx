import React, {Fragment} from "react";
import {useStateValue} from "../../state/formContext";
import FormEditorPresenter from "./FormEditor.presenter";

const FormEditorContainer: React.FunctionComponent = () => {
  const [{elements}, dispatch]: any = useStateValue();

  const showModal = () => {
    dispatch({type: "SHOW_MODAL", currentIndex: 0});
  };

  const Presenter = elements.length > 0 ?
  <FormEditorPresenter EditorProps={elements}/> :
  <div onClick={showModal}> ADD FIELD</div>;
  return (
    <Fragment>
      {Presenter}
    </Fragment>
  );
};

export default FormEditorContainer;
