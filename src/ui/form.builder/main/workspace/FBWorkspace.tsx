import { observer } from "mobx-react";
import React from "react";
import FBAddFieldButton0 from "../../components/custom/FBAddFieldButton0";
import FBTransportSchema from "../../components/custom/FBTransportSchema";
import FBForm from "../../components/form/FBForm";
import FBStore from "../../stores/FBStore";
import FBEditorDialog from "../editor/FBEditorDialog";
import FBSortableContainer from "./FBSortableContainer";

const FBWorkspace: React.FunctionComponent<{}> = () => {
  const { schema, mode } = FBStore;
  const isStarter = (mode === "design") && (schema.length === 0);

  console.log(isStarter, schema.length)

  return (
    <FBForm initialValues={FBStore.values}>
      {isStarter && <FBAddFieldButton0 />}
      {!isStarter && <FBSortableContainer items={schema} />}
      <FBTransportSchema />
      <FBEditorDialog />
      {/* <Box display="flex" flexDirection="row-reverse">
        <FBButton label="Create" onClick={handleSubmit} />
      </Box> */}
    </FBForm>
  );
};

export default observer(FBWorkspace);
