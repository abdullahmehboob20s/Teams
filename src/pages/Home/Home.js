import Navbar from "layouts/Navbar/Navbar";
import "./Home.css";
import ProfileCard from "components/Cards/ProfileCard/ProfileCard";
import Tabs from "components/Tabs/Tabs";
import Tab from "components/Tabs/Tab";
import TabPan from "components/Tabs/TabPan";
import { ReactComponent as Collaboration } from "assets/images/collaboration.svg";
import { ReactComponent as Calendar } from "assets/images/calendar.svg";
import { ReactComponent as Grid } from "assets/images/Grid.svg";
import MyTeam from "layouts/MyTeams/MyTeam/MyTeam";
import UserActivity from "layouts/MyTeams/UserActivity/UserActivity";
import MySchedule from "layouts/MySchedule/MySchedule";

function Home() {
  return (
    <div className="bg-color pb-201 mb-inResponsive">
      <Navbar
        showForwardBtnInResponsive={true}
        responsiveTitle="Gareef Glashen"
      />
      <div className="bg-color pt-119">
        <Tabs defaultTab={2}>
          <ProfileCard />
          <UserActivity />

          <div className="wrapper-1131">
            <div className="tabs_wrapper">
              <Tab
                tabIndex={1}
                className="tab"
                activeClassName="tab-active"
                label={
                  <>
                    <Grid />
                    <h6 className="tab_text weight-normal ">POST</h6>
                  </>
                }
              />
              <Tab
                tabIndex={2}
                className="tab"
                activeClassName="tab-active"
                label={
                  <>
                    <Collaboration />
                    <h6 className="tab_text weight-normal ">MY TEAMS</h6>
                  </>
                }
              />
              <Tab
                tabIndex={3}
                className="tab"
                activeClassName="tab-active"
                label={
                  <>
                    <Calendar />
                    <h6 className="tab_text weight-normal ">MY SCHEDULE</h6>
                  </>
                }
              />
            </div>
          </div>

          <TabPan tabIndex={2}>
            <MyTeam />
          </TabPan>
          <TabPan tabIndex={3}>
            <MySchedule />
          </TabPan>
        </Tabs>
      </div>
    </div>
  );
}

export default Home;
