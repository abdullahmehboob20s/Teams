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

function Navbar(props) {
  const {
    navbarLinks = [
      { title: "Home", icon: homeIcon, to: "/" },
      { title: "Create", icon: plusIcon, to: "/" },
      { title: "Discover", icon: locationIcon, to: "/" },
      { title: "Communities", icon: peopleIcon, to: "/community-settings" },
      { title: "Notifications", icon: bellIcon, to: "/" },
    ],
  } = props;
  return (
    <div className="navbar">
      <div className="nav_left gap-10">
        <img className="navbar_logo" src={logo} alt="" />
        <Input placeholder="Search" />
      </div>
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
        <NavLink icon={hamburger} to="/" />
      </div>
    </div>
  );
}

export default Navbar;
