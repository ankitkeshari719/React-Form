import React from "react";

const Select = props => {
  let formControl = "form-control";
  let validationError = null;

  if (props.touched && !props.valid && props.value === "") {
    formControl = "form-control control-error";
    validationError = <p>Please enter a valid gender!</p>;
  }

  return (
    <div className="form-group">
      <select
        name={props.name}
        className={formControl}
        value={props.value}
        onChange={props.onChange}
      >
        {props.options.map(option => (
          <option key={option.value} value={option.value}>
            {option.displayValue}
          </option>
        ))}
      </select>
      {validationError}
    </div>
  );
};

export default Select;
