import React from "react";
import "./Work.css";
import pattern from "../../Assets/theme_underline2.png";
import arrow from "../../Assets//right-arrow_white.png"
import { assets, workData } from "../../Assets/Assets";
const Work = () => {
  return (
    <div className="mywork" id="work">
      <div className="mywork-title">
        <h1>My Work</h1>
        <img src={pattern} alt="pattern" style={{ width: "65%" }} />
      </div>
      <div className="my-work-container">
        {workData.map((work, index) => {
          return (
            <a href={work.link} key={index} target="_blank" rel="noopener noreferrer" className="work-item-link">
            <img src={work.bg_image} alt="" className="work-image" />
          </a>
          );
        })}
      </div>
      <div className="my-work-showmore">
<p>Show more</p>
<img src={arrow} alt="" />
      </div>
    </div>
  );
};

export default Work;
