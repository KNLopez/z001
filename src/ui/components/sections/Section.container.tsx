import React from "react";
import SectionPresenter from "./Section.presenter";

interface SecTionProps {
  title: string;
  subType: string;
}

const SectionContainer: React.FunctionComponent<SecTionProps> = ({
  title, subType,
}) => {
  return (
    <SectionPresenter title={title} subType={subType} />
  );
};

export default SectionContainer;
