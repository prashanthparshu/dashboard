import React from "react";
import MTransaction from "../components/MTransaction";

import RecentTranaction from "../components/RecentTranaction";
import Notification from "../components/Notification";
const MainSinglePage = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ border: "1px solid black", width: "80%" }}>
        <MTransaction />
        <RecentTranaction />
      </div>
      <div style={{ border: "1px solid black", width: "20%" }}>
        <Notification />
      </div>
    </div>
  );
};

export default MainSinglePage;
