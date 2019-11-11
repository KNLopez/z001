import { Toolbar, Typography } from "@material-ui/core";
import React from "react";
import Text from "../../Text";
import { styles } from "./utils/styles";
import { HeaderFieldProps } from "./utils/types";
import { TypographyProps } from "@material-ui/core/Typography";

interface TempProps {
  dataProp: string;
  size?: string;
  variant?: TypographyProps["variant"];
  color?: TypographyProps["color"];
}

type Props = HeaderFieldProps & TempProps;

const HeaderField: React.FunctionComponent<Props> = ({
  dataProp,
  size = "md",
  variant = "h6",
  color = "primary",
  actionsRenderer,
}) => {
  const classes = styles({ size, color });

  return (
    <Toolbar disableGutters={true} className={classes.toolbar}>
      <Typography
        variant={variant}
        color={color}
        gutterBottom={true}
        style={{ flex: 1 }}
      >
        <Text message={dataProp} />
      </Typography>
      {actionsRenderer && actionsRenderer()}
    </Toolbar>
  );
};

export default HeaderField;
