import { FormikHybridFieldProps } from "../../../hoc/utils/types";
import { Attachment } from "../../attachment.field/container";



export interface AttachmentIconFactoryProps extends FormikHybridFieldProps {
  attachment?: Attachment;
  extension?: string;
  size?: string;
  disabled?: boolean;
  handleRemove?: (attachment: Attachment) => () => any;
  handleContextMenu?: (file: Attachment) => (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleViewFile?: (attachment: Attachment) => () => any;
}

export interface AttachmentIconProps extends AttachmentIconFactoryProps {
  isUploading?: boolean;
  isLoading?: boolean;
}

export interface AttachmentMenuProps {

  handleClose?: () => void;
  anchorEl?: null | HTMLElement;
  attachment?: Attachment;
  openFileView: () => void;
}

export interface AttachmentIconStyleProp {
  size: string;
  disabled: boolean;
}

export type AttachmentIconContainerProps = AttachmentIconProps;
