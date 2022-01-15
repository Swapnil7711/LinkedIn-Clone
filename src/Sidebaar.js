import React from "react";
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
function Sidebaar() {
  const user = useSelector(selectUser);

  const recentItems = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img src="https://cdn.eso.org/images/thumb300y/eso1907a.jpg" alt="" />
        <Avatar src={user?.photoUrl} className="sidebar_avatar">
          {user?.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who Viewe you</p>
          <p className="sidebar_statNumber">2555</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on Post</p>
          <p className="sidebar_statNumber">2533</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItems("javascript")}
        {recentItems("ReactJs")}
        {recentItems("Flutter")}
        {recentItems("React Native")}
      </div>
    </div>
  );
}

export default Sidebaar;
