
import React from "react";
import PropTypes from "prop-types";

const NumberField = props => {
  const onChange = event => {
    props.onChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor={props.name}>Income</label>
      <input
        type="number"
        name={props.name}
        value={props.value}
        onChange={onChange}
      />
    </div>
  );
};

NumberField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default NumberField;
