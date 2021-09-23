import "./MyTeam.css";
import TitleBar from "components/TitleBars/TitleBar/TitleBar";
import Button from "components/Button/Button";
import teamImage from "assets/images/team-image.png";
import teamImage2 from "assets/images/team-image-2.png";
import teamImage3 from "assets/images/team-image-3.png";

function MyTeam() {
  return (
    <div className="my_teams_wrapper">
      <div className="container-wrapper">
        <div className="my_teams mb-201">
          <div className="mb-119">
            <TitleBar
              leading={
                <h2 className="my_team_title weight-500 color-white">
                  My Teams
                </h2>
              }
              justifySpace="space-between"
              text={
                <Button
                  title={<h4 className="weight-normal"> Create New Team</h4>}
                  style={{
                    background: "#EC5312",
                    borderRadius: "4px",
                    padding: "1.125rem 2.5rem",
                    color: "white",
                  }}
                />
              }
            />
          </div>

          <div className="my_teams_cards">
            <TitleBar
              leading={<img className="team_card_img" src={teamImage} alt="" />}
              text={<h5 className="weight-normal color-white"> Team XDE</h5>}
              gap="0"
            />
            <TitleBar
              leading={<img className="team_card_img" src={teamImage} alt="" />}
              text={<h5 className="weight-normal color-white"> Team XDE</h5>}
              gap="0"
            />
            <TitleBar
              leading={
                <img className="team_card_img" src={teamImage2} alt="" />
              }
              text={<h5 className="weight-normal color-white"> Team XDE</h5>}
              gap="0"
            />
            <TitleBar
              leading={
                <img className="team_card_img" src={teamImage3} alt="" />
              }
              text={<h5 className="weight-normal color-white"> Team XDE</h5>}
              gap="0"
            />
          </div>
        </div>
      </div>
      <div className="container-wrapper">
        <div className="my_teams ">
          <div className="mb-100">
            <TitleBar
              leading={
                <h2 className="my_team_title weight-500 color-white">
                  STATISTICS
                </h2>
              }
            />
          </div>

          <div className="my_teams_cards_stats">
            <div className="myTeam_stat_card">
              <TitleBar
                leading={<h2 className="color-white weight-500 ">WINS</h2>}
                text={<h1 className="weight-bold color-blue"> 6</h1>}
                direction="column"
                gap="gap-106"
              />
            </div>
            <div className="myTeam_stat_card">
              <TitleBar
                leading={<h2 className="color-white weight-500 ">LOSES</h2>}
                text={<h1 className="weight-bold color-red">2</h1>}
                direction="column"
                gap="gap-106"
              />
            </div>
            <div className="myTeam_stat_card">
              <TitleBar
                leading={<h2 className="color-white weight-500 ">MATCHES</h2>}
                text={<h1 className="weight-bold color-blue">8</h1>}
                direction="column"
                gap="gap-106"
              />
            </div>
            <div className="myTeam_stat_card">
              <TitleBar
                leading={<h2 className="color-white weight-500 ">WIN RATE</h2>}
                text={<h1 className="weight-bold color-blue">80%</h1>}
                direction="column"
                gap="gap-106"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyTeam;
