import { Box } from "@material-ui/core";
import _ from "lodash";
import React from "react";
import FBStore from "../../../form.builder/stores/FBStore";

import { withFormik } from "../../hoc/formik";
import Presenter from "./presenter";
import { AttachmentContainerProps, } from "./utils/types";

export interface Attachment {
  id: string;
  name: string;
  type: string;
  s3link: string;
  s3linkCleanCopy?: string;
  isLoading?: boolean;
}

export const AttachmentFieldContainer: React.FunctionComponent<AttachmentContainerProps> = ({
  name = "",
  component = "button",
  multiple = true,
  field,
  form,
  ...other
}) => {


  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    let isUserAlerted = false;
    const filteredFiles = Array.from(event.currentTarget.files || []).filter((file) => {
      const type = file.name.split(".").pop();

      if (type === "doc") {
        // TODO: update react-intl and make use of hooks to translate this message
        !isUserAlerted && alert(".doc files are not accepted. Please use .docx");
        isUserAlerted = true;
        return false;
      }
      return true;
    });

    if (filteredFiles.length === 0) {
      return;
    }
    form!.setFieldValue(name, filteredFiles);
    if (FBStore.mode === "form") {
      FBStore.setValues({
        ...FBStore.values,
        [name as string]: _.map(filteredFiles, (attach) => _.pick(attach, ["id", "name", "s3link"])),
      });
    }
    // handleUpload(filteredFiles as File[]);
  };

  return (
    <Box>
      <Presenter
        {...other}
        name={name}
        component={component}
        multiple={multiple}
        onChange={onChange}
        form={form}
        field={field}
      />
    </Box>
  );
};

export default withFormik(AttachmentFieldContainer);
