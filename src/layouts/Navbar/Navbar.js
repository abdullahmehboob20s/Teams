import "./Navbar.css";
import logo from "assets/images/logo.png";
import NavLink from "components/Navbar/NavLink/NavLink";
import homeIcon from "assets/images/home-icon.png";
import plusIcon from "assets/images/plus-icon.png";
import locationIcon from "assets/images/location-icon.png";
import peopleIcon from "assets/images/people-icon.png";
import bellIcon from "assets/images/bell-icon.png";
import star from "assets/images/star.png";
import user from "assets/images/user.png";
import hamburger from "assets/images/hamburger.png";
import Input from "components/Input/Input";
import leftArrow from "assets/images/left-arrow.png";
import { Link } from "react-router-dom";
import forwardicon from "assets/images/forward.png";
import trophy2 from "assets/images/trophy-2.png";
import postIcon from "assets/images/add-2.png";

function Navbar(props) {
  const {
    showForwardBtnInResponsive = false,
    responsiveTitle,
    navbarLinks = [
      { title: "Home", icon: homeIcon, to: "/" },
      { title: "Create", icon: plusIcon, to: "/" },
      { title: "Discover", icon: locationIcon, to: "/" },
      { title: "Communities", icon: peopleIcon, to: "/community-settings" },
      { title: "Notifications", icon: bellIcon, to: "/" },
    ],
  } = props;

  const bottomBarLinks = [
    { title: "Home", icon: homeIcon, to: "/" },
    { title: "Communities", icon: peopleIcon, to: "/community-settings" },
    { title: "Post", icon: postIcon, to: "/" },
    { title: "Notifications", icon: bellIcon, to: "/" },
    { title: "Tournaments", icon: trophy2, to: "/" },
  ];
  return (
    <div className="navbar">
      <div className="bottom_bar">
        {bottomBarLinks.map((navLink, index) => (
          <NavLink
            gap="gap-3"
            title={navLink.title}
            icon={navLink.icon}
            to={navLink.to}
          />
        ))}
      </div>

      <div className="nav_left gap-10">
        <img className="navbar_logo" src={logo} alt="" />
        <Input placeholder="Search" />
      </div>
      <Link to="/" className="nav_left_2">
        <img src={leftArrow} alt="" />
      </Link>
      <p className="nav_center_2">{responsiveTitle}</p>

      <div className="nav_center">
        {navbarLinks.map((navLink, index) => (
          <NavLink
            gap="gap-3"
            title={navLink.title}
            icon={navLink.icon}
            to={navLink.to}
          />
        ))}
      </div>
      <div className="nav_right">
        <span className="nav_right_links">
          <NavLink
            gap="gap-7"
            fontSize="px-18"
            title="12,200"
            icon={star}
            row={true}
            to="/"
            fontWeight="600"
          />
          <NavLink icon={user} to="/" />
        </span>
        <span
          className={
            showForwardBtnInResponsive
              ? "hamburger_icon showForwardBtnInResponsive"
              : "hamburger_icon"
          }
        >
          <img className="forwardIcon" src={forwardicon} alt="" />
          <NavLink icon={hamburger} to="/" />
        </span>
      </div>
    </div>
  );
}

export default Navbar;
