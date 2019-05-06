import React from 'react';

const Email = props => {

    let formControl = "form-control";
    let validationError = null;

    if (props.touched && !props.valid) {
        formControl = 'form-control control-error';
        validationError = <p>Please enter a valid email!</p>;
    }

    return (
        <div className="form-group">
            <input type="email" className={formControl} {...props} />
            {validationError}
        </div>
    );
}

export default Email;