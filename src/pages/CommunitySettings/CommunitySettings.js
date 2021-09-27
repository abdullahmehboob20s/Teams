import Navbar from "layouts/Navbar/Navbar";
import React from "react";
import homeIcon from "assets/images/home-icon.png";
import bellIcon from "assets/images/bell-icon.png";
import rocketIcon from "assets/images/rocket-icon.png";
import chartIcon from "assets/images/chart-icon.png";
import Sidebar from "layouts/Sidebar/Sidebar";
import pubgImg from "assets/images/pubg.png";
import { Link } from "react-router-dom";
import trash from "assets/images/trash.png";

function CommunitySettings() {
  const navbarLinks = [
    { title: "Home", icon: homeIcon, to: "/" },
    { title: "Accelerator", icon: rocketIcon, to: "/" },
    { title: "Leaderboard", icon: chartIcon, to: "/" },
    { title: "Notifications", icon: bellIcon, to: "/" },
  ];
  return (
    <>
      <Navbar
        navbarLinks={navbarLinks}
        responsiveTitle="SETTINGS"
        showBottomBar={false}
      />
      <div className="bg-color community_settings ">
        <Sidebar />
        <div className="community_settings_right_side">
          <img className="community_settings_img" src={pubgImg} alt="" />
          <Link className="community_settings_link">
            Change Profile Picture
          </Link>

          <form className="community_settings_form">
            <div className="community_settings_input">
              <label htmlFor="communityName">Community name</label>
              <input type="text" id="communityName" />
            </div>
            <div className="community_settings_input">
              <label htmlFor="communityName">BIO</label>
              <input type="text" id="communityName" />
            </div>

            <div className="community_settings_btns">
              <button className="formBtn">
                <p>DELETE</p> <img src={trash} alt="" />
              </button>

              <button className="btnFormSaveChanges">
                <h5 className="color-white">Save Changes</h5>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CommunitySettings;
