import React from "react";

const Input = props => {
  const {
    id = "",
    required = false,
    label = "",
    type = "text",
    onChange,
    value = "",
    name = ""
  } = props;

  return (
    <div className="input-container">
      <input
        type={type}
        id={id}
        required={required}
        onChange={onChange}
        value={value}
        name={name}
      />
      <label for={id}>{label}</label>
      <div className="bar" />
    </div>
  );
};

export default Input;
