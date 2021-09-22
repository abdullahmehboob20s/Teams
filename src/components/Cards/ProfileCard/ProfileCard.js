import React from "react";
import "./ProfileCard.css";
import profileImg from "assets/images/profile-img.png";
import Button from "components/Button/Button";
import TitleBar from "components/TitleBars/TitleBar/TitleBar";
import diamond from "assets/images/diamond.png";
import { Link } from "react-router-dom";

function ProfileCard() {
  return (
    <div className="profile_card">
      <div className="profile_card_left">
        <img className="profile_image" src={profileImg} alt="" />
      </div>
      <div className="profile_card_right">
        <div className="profile_card_title mb-17">
          <h3 className="color-white weight-normal">Brucereef</h3>
          <Button
            title="Edit profile"
            fontSize="px-14"
            style={{
              padding: "8px 19px",
              background: "transparent",
              borderRadius: " 2px",
              border: " 1px solid #FFFFFF",
              color: "white",
            }}
          />
        </div>
        <div className="mb-15">
          <TitleBar
            leading={<img src={diamond} alt="" />}
            text={<h4 className="color-white weight-normal">1,023</h4>}
            gap="gap-16"
          />
        </div>
        <div className="mb-31">
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
          <h5 className="color-white mb-6">Gareef Glashen</h5>
          <p className="px-14 color-grey mb-6">
            adipiscing elit. Sed nisi leo, euismod enim tristique.
            <br /> Vestibulum egestas nec, diam ut iaculis ultricies leo nec
            gravida.
            <br /> In sollicitudin maecenas habitant pretium ut diam.
          </p>
          <Link className="decoration-none color-blue px-14">
            www.samplewebsite.com
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
