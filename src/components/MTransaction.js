import React from "react";
import GroupIcon from "@mui/icons-material/Group";

const MTransaction = () => {
  return (
    <div className="Month_tran_main">
      <div className="Month_tran_span">
        <h4>
          <span className="Month_tran_span_green">24%</span>than last month
        </h4>
        <h4>
          <span className="Month_tran_span_red">13%</span>than last month
        </h4>
        <h4>
          <span
            style={{ marginLeft: "-100px" }}
            className="Month_tran_span_green"
          >
            17%
          </span>
        </h4>
      </div>
      <div className="Month_tran_content">
        <div style={{ display: "flex" }}>
          <div>
            <GroupIcon />
          </div>
          <div>
            <h2>12.58K</h2>
            <span>Totle Users</span>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div>
            <GroupIcon />
          </div>
          <div>
            <h2>8.32K</h2>
            <span>Total Transation</span>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div>
            <GroupIcon />
          </div>
          <div>
            <h2>83.02K</h2>
            <span>Total Posts</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MTransaction;
