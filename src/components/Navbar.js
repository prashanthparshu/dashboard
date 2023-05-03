import React from "react";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Navbar = () => {
  return (
    <div className="Navbar_main">
      <div>
        <select style={{ padding: "10px", border: "none" }}>
          <option>All</option>
        </select>
        <input
          className="Navbar_search"
          type="text"
          placeholder="search anything...."
        />
      </div>
      <div className="Navbar_Icons">
        <ChatIcon style={{ margin: "0px 5px" }} />
        <NotificationsIcon style={{ margin: "0px 5px" }} />
        <img
          className="Navbar_img"
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="man"
        />
      </div>
    </div>
  );
};

export default Navbar;
