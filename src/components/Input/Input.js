import React from "react";
import PropTypes from "prop-types";
import styles from "./Input.module.css";
import cn from "classnames";

const Input = (props) => {
  const { inputType, placeholder, label, value, onChange } = props;

  const rootCls = cn("flex", "items-center", "justify-between", "");

  const inputCls = cn("rounded-lg", "my-4");

  return (
    <div className={rootCls}>
      <label className="mr-4">{label}</label>
      <input
        className={inputCls}
        type={inputType}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

Input.propTypes = {};

Input.defaultProps = {};

export default Input;
