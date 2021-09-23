import React from "react";
import "./UserActivity.css";
import store from "assets/images/store.png";
import gift from "assets/images/gift.png";
import chat from "assets/images/chat.png";

function UserActivity() {
  return (
    <div className="profile_activities_wrapper_parent">
      <div className="wrapper-1131">
        <div className="profile_activities_wrapper">
          <div className="profile_activity gap-7">
            <img src={store} alt="" />
            <h6 className="weight-normal color-white">Store</h6>
          </div>
          <div className="profile_activity gap-7 divider-center">
            <div style={{ position: "relative" }}>
              <div className="badge">12</div>
              <img src={chat} alt="" />
            </div>
            <h6 className="weight-normal color-white">My Messages</h6>
          </div>
          <div className="profile_activity gap-7">
            <img src={gift} alt="" />
            <h6 className="weight-normal color-white">Invite Friends</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserActivity;
