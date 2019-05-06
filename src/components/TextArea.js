import React from "react";

const TextArea = props => {
  let formControl = "form-control";
  let validationError = null;

  if (props.touched && !props.valid) {
    formControl = "form-control control-error";
    validationError = <p>Please enter a valid address!</p>;
  }

  return (
    <div className="form-group">
          <textarea {...props} className={formControl} />
          {validationError}
    </div>
  );
};

export default TextArea;
