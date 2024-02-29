import React, { useState, useEffect } from "react";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "./CircularProgressBar.css"; // Import CSS file for styling

const CircularProgressBar = ({ progress }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    if (progress > 0 && progress <= 100) {
      setPercentage(progress);
    }
  }, [progress]);

  return (
    <div className="progress relative top-7 lg:ml-[30%] ml-[25%] md:ml-[70%]  " style={{ width: 200, height: 130 }}>
      <CircularProgressbar
        value={percentage}
        // text={`${percentage}%`}
        strokeWidth={23}
        styles={buildStyles({
          textSize: "16px",
          pathTransitionDuration: 0.5,
          pathColor: `rgba(174, 56, 54, ${percentage / 100})`,
          textColor: "#f88",
          trailColor: "#B58686",
          backgroundColor: "#3e98c7"
        })}
      />
    </div>
  );
};

export default CircularProgressBar;
