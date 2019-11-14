import { Box, Typography } from "@material-ui/core";
import { FormikProps } from "formik";
import React, { useState } from "react";
import Text from "../../components/Text";
import FBButton from "../components/inputs/FBButton";
import { FBFieldEditorComponent } from "../defaults/editor";
import editorStore from "../stores/FBEditorStore";
import FBStore from "../stores/FBStore";
import { FBEditorFormProps } from "../types/editor";
import { FBTemplateSchema } from "../types/store";

export const withEditorRenderer =
  (other: FBEditorFormProps) =>
    (props: FormikProps<FBTemplateSchema>) => {

      const { type, index, mode } = other;
      const { includeNote, includeOther, fieldName } = props.values;
      const InputType = FBFieldEditorComponent[type as string];

      const onClick = () => {
        const isComplete = checkProps(type as string)
        if (!isComplete) {
          return
        } else {
          const schema: FBTemplateSchema = {
            type,
            index,
            name: fieldName || `${FBStore.prefixName}_field_${type}`,
            ...props.values,
            includeNote: includeNote || includeOther,
          };
          const removeEl = (mode === "create") ? 0 : 1;
          const newSchema = FBStore.schema;
          newSchema.splice(index, removeEl, schema);
          FBStore.setSchema(newSchema);
          editorStore.open = false;
        }
      };

      const buttonLabel = mode === "create"
        ? "form.builder.add.field"
        : "common.save";

      const checkProps = (type: string) => {
        const { label, linkUrl, placeholder, options } = props.values;

        const defaultValues = fieldName && label ? true : false;
        switch (type) {
          case "hyperlink":
            return defaultValues && linkUrl;
          case "textfield":
          case "autocomplete":
            return defaultValues && placeholder;
          case "checkboxgroup":
          case "radiogroup":
          case "select":
            return defaultValues && options;
          default:
            return defaultValues;
        }
      }
      return (
        <Box>
          <InputType />
          <Box display="flex" flexDirection="row-reverse" mx={-1}>
            <FBButton label={buttonLabel} onClick={onClick} />
            <FBButton label="common.cancel" onClick={editorStore.reset} />
          </Box>
        </Box>
      );
    };
