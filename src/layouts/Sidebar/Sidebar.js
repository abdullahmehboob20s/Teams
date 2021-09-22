import React from "react";
import "./Sidebar.css";
import arrowDown from "assets/images/arrow-down.png";
import SidebarButton from "components/Button/SidebarButton/SidebarButton";
import { ReactComponent as Calendar } from "assets/images/calendar-2.svg";
import { ReactComponent as Location } from "assets/images/location-2.svg";
import { ReactComponent as Trophy } from "assets/images/trophy.svg";
import plusIcon from "assets/images/plus-icon.png";
import Button from "components/Button/Button";
import pubgText from "assets/images/pubg-text.png";
import f from "assets/images/f.png";
import arrowRight from "assets/images/arrow-right.png";

function Sidebar() {
  const [show, setshow] = React.useState(true);
  return (
    <div className="sidebar bg-color">
      <div className="sidebar_dropdown">
        <div onClick={() => setshow(!show)} className="sidebar_dropdown_btn">
          <h4 className="color-white">PUBG Bali</h4>
          <img
            className={`down_arrow ${show ? "rotate-180" : ""}`}
            src={arrowDown}
            alt=""
          />
        </div>
        <div className={`sidebar_dropdown_body ${show ? "show" : ""}`}>
          <div className="sidebar_dropdown_body_wrapper ">
            <SidebarButton
              title="Browse tournaments"
              mb="mb-31"
              icon={<Calendar />}
            />
            <SidebarButton
              title="Host Tournament"
              mb="mb-31"
              icon={<Location />}
            />
            <SidebarButton
              title="Discover communities"
              mb="mb-31"
              icon={<Trophy />}
            />
          </div>
          <div className="mb-31">
            <Button
              style={{
                width: "100%",
                borderRadius: "5px",
                background: "#1380F0",
                padding: "13px",
              }}
              title={
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                  }}
                >
                  <img src={plusIcon} alt="" />
                  <p className="px-21 color-white">Create Community</p>
                </div>
              }
            />
          </div>

          <div className="sidebar_dropdown_body_wrapper ">
            <SidebarButton title="My communities" mb="mb-17" />
            <SidebarButton
              title="PUBG Bali"
              icon={<img src={pubgText} alt="" />}
              mb="mb-6"
              textColor="color-white"
              textFontWeigth="weight-500"
            />
            <div className="sidebar_forward_icon px-12">
              <p>Tournaments</p>
              <img src={arrowRight} alt="" />
            </div>
            <SidebarButton title="Joined communities" mb="mb-17" />
            <SidebarButton
              title="BEST OF FORTNITE"
              icon={<img src={f} alt="" />}
              mb="mb-6"
              textColor="color-white"
              textFontWeigth="weight-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
