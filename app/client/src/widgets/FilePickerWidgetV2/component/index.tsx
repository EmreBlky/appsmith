import React from "react";
import type { ComponentProps } from "widgets/BaseComponent";
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";
import "@uppy/webcam/dist/style.css";
import { BaseButton } from "widgets/ButtonWidget/component";
import { Colors } from "constants/Colors";

function FilePickerComponent(props: FilePickerComponentProps) {
  let computedLabel = props.label;

  if (props.files && props.files.length) {
    computedLabel = `${props.files.length} files selected`;
  }

  /**
   * opens modal
   */
  const openModal = () => {
    props.uppy.getPlugin("Dashboard").openModal();
  };

  return (
    <BaseButton
      borderRadius={props.borderRadius}
      boxShadow={props.boxShadow}
      buttonColor={props.buttonColor}
      disabled={props.isDisabled}
      loading={props.isLoading}
      maxWidth={props.maxWidth}
      minHeight={props.minHeight}
      minWidth={props.minWidth}
      onClick={openModal}
      shouldFitContent={props.shouldFitContent}
      text={computedLabel}
    />
  );
}
export interface FilePickerComponentProps extends ComponentProps {
  label: string;
  uppy: any;
  isLoading: boolean;
  files?: any[];
  buttonColor: string;
  borderRadius: string;
  boxShadow?: string;
  shouldFitContent: boolean;
  maxWidth?: number;
  minWidth?: number;
  minHeight?: number;
}

FilePickerComponent.defaultProps = {
  backgroundColor: Colors.GREEN,
};

export default FilePickerComponent;
