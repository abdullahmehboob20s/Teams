import React from "react";
import "./Input.css";
import inputIcon from "assets/images/input-icon.png";

function Input(props) {
  const { placeholder } = props;
  return (
    <div className="input">
      <img src={inputIcon} alt="" />
      <input type="text" placeholder={placeholder} />
    </div>
  );
}

export default Input;
