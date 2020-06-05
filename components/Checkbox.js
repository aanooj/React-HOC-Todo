import React, { useState } from "react";

const Checkbox = props => {
  const { onClick, name } = props;
  const [isChecked, setIsChecked] = useState(props.isChecked);
  return (
    <input
      onClick={e => {
        setIsChecked(e.target.checked);
        onClick && onClick(name);
      }}
      type="checkbox"
      name={name}
      checked={isChecked}
    />
  );
};

export default Checkbox;
