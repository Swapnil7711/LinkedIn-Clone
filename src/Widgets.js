import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import "./Widgets.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
function Widgets() {
  const newsArticle = (heading, subheading) => (
    <div className="widgets_article">
      <div className="widgets_articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets_articleRight">
        <h4>{heading}</h4>
        <p>{subheading}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("react is lit", "Top in the world")}
      {newsArticle("flutter is on top", "Flutter is dominating")}
      {newsArticle("Elon Musk", "delay in tesla delivery")}
      {newsArticle("Bitcoin", "Bitcon flying high")}
    </div>
  );
}

export default Widgets;
