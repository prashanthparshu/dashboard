import React from "react";
import SingleTransaction from "./SingleTransaction";
import Data from "../jsonData/Data.json";
import ActivePlans from "./ActivePlans";
// import Notification from "./Notification";

const RecentTranaction = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "80%", boxShadow: "2px 2px gray" }}>
        <SingleTransaction Data={Data} />
      </div>
      <div
        style={{
          width: "20% ",
          boxShadow: "2px 2px gray",
        }}
      >
        <ActivePlans />
      </div>
    </div>
  );
};

export default RecentTranaction;
