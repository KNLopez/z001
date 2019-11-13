import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import FBStore from "../../../form.builder/stores/FBStore";
import { withFormik } from "../../hoc/formik";
import PresenterFactory from "./presenter.factory";
import {
  AttachmentIconContainerProps,
} from "./utils/types";
import { Attachment } from "../attachment.field/container";


export let SetFile: React.Context<React.Dispatch<React.SetStateAction<Attachment | undefined>>>;

export const AttachmentIconContainer: React.FunctionComponent<AttachmentIconContainerProps> = ({
  name = "",
  form,
  field,
  ...other
}) => {


  const attachments = field!.value as Attachment[] || [];
  const [selectedFile, setSelectedFile] = useState<undefined | Attachment>(undefined);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  SetFile = React.createContext(setSelectedFile);



  const handleRemove = (attachment: Attachment) => () => {
    if (!form && !field) { return; }
    const filtered = (field!.value as Attachment[]).filter((a) => a.id !== attachment.id);
    form!.setFieldValue(name, filtered);

    if (FBStore.mode === "form") {
      FBStore.setValues({
        ...FBStore.values,
        [name as string]: filtered,
      });
    }
  };

  const handleContextMenu = (file: Attachment) => (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    setSelectedFile(file);
    setAnchorEl(evt.currentTarget);
  };


  const attachmentsRenderer = attachments.map((attachment) => (
    <PresenterFactory
      {...other}
      key={`attachment-${attachment.id}`}
      name={name}
      attachment={attachment}
      handleRemove={handleRemove}
      form={form}
      field={field}
      handleContextMenu={handleContextMenu}
    />
  ));

  return (
    <Grid container={true} spacing={2}>

      {attachmentsRenderer}
    </Grid>
  );
};

export default withFormik(AttachmentIconContainer);
