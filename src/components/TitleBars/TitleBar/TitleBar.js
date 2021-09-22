import React from "react";
import "./TitleBar.css";

function TitleBar(props) {
  const { leading, text, gap, justifySpace, direction } = props;
  return (
    <div
      style={{ justifyContent: justifySpace }}
      className={`titleBar ${gap} ${direction}`}
    >
      {leading}
      {text}
    </div>
  );
}

export default TitleBar;
