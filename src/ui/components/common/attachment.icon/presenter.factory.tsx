import React from "react";
import Presenter from "./presenter";
import { AttachmentIconFactoryProps, AttachmentIconProps } from "./utils/types";

export const AttachmentIconPresenterFactory: React.FunctionComponent<
  AttachmentIconFactoryProps
> = ({
  name,
  attachment,
  size,
  handleRemove,
  handleContextMenu,
  handleViewFile,
  disabled = false,
  ...other
}) => {
    const file = attachment!;
    const isUploading = file.s3link == null;
    const isLoading = file.isLoading || false;
    const isFileViewable = false
    const defaultProps = {
      name,
      attachment,
      size,
      disabled,
      isUploading,
      isLoading,
      handleRemove,
      ...other,
    };
    let props: AttachmentIconProps = {
      ...defaultProps,
      handleContextMenu,
    };

    if (isFileViewable && !isUploading) {
      props = {
        ...defaultProps,
        handleContextMenu,
      };
    }

    if (isUploading) {
      props = {
        ...defaultProps,
      };
    }

    return <Presenter {...props} />;
  };

export default AttachmentIconPresenterFactory;
