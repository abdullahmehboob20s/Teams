import React from "react";
import "./ProfileCard.css";
import profileImg from "assets/images/profile-img.png";
import Button from "components/Button/Button";
import TitleBar from "components/TitleBars/TitleBar/TitleBar";
import diamond from "assets/images/diamond.png";
import { Link } from "react-router-dom";
import settings from "assets/images/settings.png";
import gift2 from "assets/images/gift-2.png";

function ProfileCard() {
  return (
    <div className="profile_card_wrapper">
      <div className="wrapper-1131">
        <div className="profile_card">
          <div className="profile_card_left">
            <img className="profile_image" src={profileImg} alt="" />
          </div>
          <div className="profile_card_right">
            <div className="profile_card_title mb-17">
              <div>
                <h3 className="color-white weight-normal mb-17">Brucereef</h3>
                <TitleBar
                  leading={<img src={diamond} alt="" />}
                  text={<h4 className="color-white weight-normal">1,023</h4>}
                  gap="gap-16"
                />
              </div>

              <div className="profileBtns">
                <button className="edit_profile_btn">
                  <img src={settings} alt="" /> <span>Edit profile</span>
                </button>
                <button className="edit_profile_btn">
                  <img src={gift2} alt="" /> <span>Invite friends</span>
                </button>
              </div>
            </div>
            <div className="profileCardCountry mb-31">
              <TitleBar
                text={
                  <h6 className="color-white weight-normal">Bali, Indonesia</h6>
                }
              />
            </div>
            <div className="mb-31 user_media_details">
              <TitleBar
                leading={<h4 className="weight-600 color-white ">15</h4>}
                text={<h5 className=" weight-normal color-grey">Posts</h5>}
                gap="gap-10"
              />
              <TitleBar
                leading={<h4 className="weight-600 color-white ">1,254</h4>}
                text={<h5 className=" weight-normal color-grey">Followers</h5>}
                gap="gap-10"
              />
              <TitleBar
                leading={<h4 className="weight-600 color-white ">3,875</h4>}
                text={<h5 className=" weight-normal color-grey">Following</h5>}
                gap="gap-10"
              />
            </div>
            <div>
              <h5 className="detailTitle color-white mb-6">Gareef Glashen</h5>
              <p className="px-14 color-grey mb-6">
                adipiscing elit. Sed nisi leo, euismod enim tristique.
                Vestibulum egestas nec, diam ut iaculis ultricies leo nec
                gravida. In sollicitudin maecenas habitant pretium ut diam.
              </p>
              <Link className="decoration-none color-blue px-14">
                www.samplewebsite.com
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-31 user_media_details_2">
        <TitleBar
          leading={<h4 className="weight-600 color-white ">15</h4>}
          text={<h5 className=" weight-normal color-grey">Posts</h5>}
          gap="gap-10"
        />
        <TitleBar
          leading={<h4 className="weight-600 color-white ">1,254</h4>}
          text={<h5 className=" weight-normal color-grey">Followers</h5>}
          gap="gap-10"
        />
        <TitleBar
          leading={<h4 className="weight-600 color-white ">3,875</h4>}
          text={<h5 className=" weight-normal color-grey">Following</h5>}
          gap="gap-10"
        />
      </div>
    </div>
  );
}

export default ProfileCard;
