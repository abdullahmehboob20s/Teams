import React from "react";
import { Link } from "react-router-dom";
import "./NavLink.css";

function NavLink(props) {
  const {
    title,
    icon,
    to = "/",
    row = false,
    fontSize = "px-16",
    gap = "gap-7",
    fontWeight = "normal",
  } = props;
  return (
    <Link
      to={to}
      className={` decoration-none color-white ${gap}  ${
        row ? "nav_link flex" : "nav_link"
      }`}
    >
      <div className="navLink_img">
        {title === "Notifications" ? <div className="badge">12</div> : ""}
        <img src={icon} alt="img" />
      </div>
      {title ? (
        <p style={{ fontWeight }} className={`weight-normal ${fontSize}`}>
          {title}
        </p>
      ) : (
        ""
      )}
    </Link>
  );
}

export default NavLink;
