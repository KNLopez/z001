import { observer } from "mobx-react";
import React from "react";
import FBAddFieldButton0 from "../../components/custom/FBAddFieldButton0";
import FBTransportSchema from "../../components/custom/FBTransportSchema";
import FBForm from "../../components/form/FBForm";
import FBStore from "../../stores/FBStore";
import FBEditorDialog from "../editor/FBEditorDialog";
import FBSortableContainer from "./FBSortableContainer";
import FBEditorSwitcher from "../../components/custom/FBEditorSwitcher";
import AppStyles from "../../../App.module.css";

const FBWorkspace: React.FunctionComponent<{}> = () => {
  const { schema, mode } = FBStore;
  const isStarter = (mode === "design") && (schema.length === 0);

  return (
    <FBForm initialValues={FBStore.values}>
      {isStarter && <FBAddFieldButton0 />}
      {!isStarter && <FBSortableContainer items={schema} />}
      <FBTransportSchema />
      <FBEditorDialog />
      <div className={AppStyles.switcher}>
        <FBEditorSwitcher />
      </div>
      {/* <Box display="flex" flexDirection="row-reverse">
        <FBButton label="Create" onClick={handleSubmit} />
      </Box> */}
    </FBForm>
  );
};

export default observer(FBWorkspace);
