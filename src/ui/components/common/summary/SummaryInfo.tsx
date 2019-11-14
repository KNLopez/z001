import React from "react";
import translations from "../../../translations/en.json";
import Text from "../../Text";

export type Translation = keyof typeof translations;

interface OwnProps {
  label: Translation;
  value: string | number | JSX.Element;
}

export type Props = OwnProps;

export const SummaryInfo: React.FunctionComponent<Props> = ({
  label, value,
}) => {
  return (
    <div>
      <Text translation={label} />:{" "}
      {value}
    </div>
  );
};

export default SummaryInfo;
