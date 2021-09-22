import React from "react";
import "./SidebarButton.css";

function SidebarButton(props) {
  const {
    title,
    icon,
    mb,
    textColor = "color-grey-2",
    textFontWeigth = "weight-600",
  } = props;
  return (
    <div className={`sidebar_button ${mb}`}>
      {icon ? <div className="sidebar_button_icon">{icon}</div> : ""}
      <h5
        className={`sidebar_button_text px-14 ${textColor} ${textFontWeigth}`}
      >
        {title}
      </h5>
    </div>
  );
}

export default SidebarButton;
