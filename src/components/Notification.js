import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Notification = () => {
  return (
    <div className="Notification_main">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 20px",
          alignItems: "center",
        }}
      >
        <h6>Recent Notification</h6>
        <a
          href="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            fontSize: "10px",
          }}
        >
          View All <ArrowForwardIcon />
        </a>
      </div>
      <div>
        <div className="Notification_content">
          <a href="/" className="Notification_a">
            Support
          </a>
          <h6>12 Aug 2022</h6>
          <span>Inquiry recevied from Mr. Gautam Rai</span>
        </div>
        <div className="Notification_content">
          <a href="/" className="Notification_a">
            Support
          </a>
          <h6>12 Aug 2022</h6>
          <span>Inquiry recevied from Mr. Gautam Rai</span>
        </div>
        <div className="Notification_content">
          <a href="/" className="Notification_a">
            Support
          </a>
          <h6>12 Aug 2022</h6>
          <span>Inquiry recevied from Mr. Gautam Rai</span>
        </div>
        <div className="Notification_content">
          <a href="/" className="Notification_a">
            Support
          </a>
          <h6>12 Aug 2022</h6>
          <span>Inquiry recevied from Mr. Gautam Rai</span>
        </div>
        <div className="Notification_content">
          <a href="/" className="Notification_a">
            Support
          </a>
          <h6>12 Aug 2022</h6>
          <span>Inquiry recevied from Mr. Gautam Rai</span>
        </div>
      </div>
    </div>
  );
};

export default Notification;
