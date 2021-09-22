import React from "react";
import "./MySchedule.css";
import Tabs from "components/Tabs/Tabs";
import Tab from "components/Tabs/Tab";
import TabPan from "components/Tabs/TabPan";
import Table from "components/Tables/Table/Table";
import img from "assets/images/img.png";
import star2 from "assets/images/star-2.png";

function MySchedule() {
  return (
    <div>
      <Tabs defaultTab={1}>
        <div className="container-wrapper">
          <div className="my_schedule_tabs">
            <Tab
              tabIndex={1}
              className="my_schedule_tab"
              activeClassName="my_schedule_tab_active"
              label={<h3 className="weight-normal ">Joined Tournaments</h3>}
            />
            <Tab
              tabIndex={2}
              className="my_schedule_tab"
              activeClassName="my_schedule_tab_active"
              label={<h3 className="weight-normal ">Token Receipt</h3>}
            />
          </div>
          <TabPan tabIndex={1}>
            <Table
              tableHead={["Tournament", "Token", "Amount", "Date"]}
              tableBodyData={[
                {
                  tournament: { img, title: "PUBG tournament" },
                  token: { img: star2, title: "300" },
                  amount: "$ 20",
                  date: "08/09/2021",
                },
              ]}
            />
          </TabPan>
          <TabPan tabIndex={2}>
            <Table
              tableHead={["Token", "Amount", "Date"]}
              tournament={false}
              tableBodyData={[
                {
                  tournament: { img, title: "PUBG tournament" },
                  token: { img: star2, title: "300" },
                  amount: "$ 20",
                  date: "08/09/2021",
                },
              ]}
            />
          </TabPan>
        </div>
      </Tabs>
    </div>
  );
}

export default MySchedule;
