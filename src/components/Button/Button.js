import React from "react";
import "./Button.css";

function Button(props) {
  const { title, fontSize, style } = props;
  return (
    <button style={style} className={`button ${fontSize}`}>
      {title}
    </button>
  );
}

export default Button;
