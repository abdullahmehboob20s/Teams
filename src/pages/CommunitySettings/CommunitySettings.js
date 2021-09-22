import Navbar from "layouts/Navbar/Navbar";
import React from "react";
import "./CommunitySettings.css";
import homeIcon from "assets/images/home-icon.png";
import bellIcon from "assets/images/bell-icon.png";
import rocketIcon from "assets/images/rocket-icon.png";
import chartIcon from "assets/images/chart-icon.png";
import Sidebar from "layouts/Sidebar/Sidebar";

function CommunitySettings() {
  const navbarLinks = [
    { title: "Home", icon: homeIcon, to: "/" },
    { title: "Accelerator", icon: rocketIcon, to: "/" },
    { title: "Leaderboard", icon: chartIcon, to: "/" },
    { title: "Notifications", icon: bellIcon, to: "/" },
  ];
  return (
    <div className="bg-color community_settings">
      <Navbar navbarLinks={navbarLinks} />
      <div>
        <Sidebar />
      </div>
    </div>
  );
}

export default CommunitySettings;
