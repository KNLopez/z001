import { Box } from "@material-ui/core";
import React, { useState } from "react";
import Select from "react-select";
import { withAutocompleteDefaults } from "../../hocs/withAutocompleteDefaults";
import { FBAutocompleteProps } from "../../types/autocomplete";
import { SelectOption } from "../../types/select";

const FBAutocomplete: React.FunctionComponent<FBAutocompleteProps> = ({
  labelRenderer,
  autocompleteList,
  disabled,
  readOnly,
  ...props
}) => {

  // *NOTE: For demo only. Will be removed
  const [options] = useState<SelectOption[]>([]);
  return (
    <Box mb={4}>
      {labelRenderer}
      <Select
        inputId={`react-select-${props.name}`}
        TextFieldProps={{
          InputLabelProps: {
            htmlFor: `react-select-${props.name}`,
            shrink: true,
          },
        }}
        isDisabled={disabled || readOnly}
        {...props}
        options={options}
      />
    </Box>
  );
};

export default withAutocompleteDefaults(FBAutocomplete);
