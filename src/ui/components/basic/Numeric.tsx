import React, { Fragment } from "react";

interface NumericProps {
  title: string;
  tolerance: boolean;
  toleranceType: string;
  min?: string;
  max?: string;
}

const Numeric: React.FunctionComponent<NumericProps>  = ({
  title, tolerance, toleranceType, min, max,
}) => {

  const NumberField = (
    <div>
      <input type="number" name={title} />
      <div className="tolerance">
        <input type="text" value={min} />
        <input type="text" value={max} />
      </div>
    </div>
  );

  return (
    <Fragment>
      {NumberField}
    </Fragment>
  );
};

export default Numeric;
