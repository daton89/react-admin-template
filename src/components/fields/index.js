import React from "react";
import cx from "classnames";

const getValidityClassName = meta => {
  if (meta.asyncValidating) return 'async-validating'
  if (meta.active) return
  if (meta.touched && meta.invalid) return 'invalid'
  if (meta.touched && meta.valid) return 'valid'
}

export const customInput = props => {
  const { label, input, type, errors, meta } = props;
  return (
    <div
      className={cx(
        "custom-input-container",
        { "flex-row-reverse": type === "checkbox" },
        { dirty: meta.dirty },
        getValidityClassName(meta)
      )}
    >
      <input {...input} type={type} />
      <label>{label}</label>
      {meta.error &&
        meta.touched && <div className="feedback-text error-text">{meta.error}</div>}
    </div>
  );
};

export const customSelect = props => {
  return (
    <div>
      <label>{props.label}</label>
      <select {...props.input}>
        <option />
        <option value="1">option 1 </option>
        <option value="2">option 2 </option>
      </select>
    </div>
  );
};
