/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Frame = ({
  className,
  icBaselinePeople = "/img/ic-baseline-people.svg",
  text = "164",
  text1 = "total number of students",
}) => {
  return (
    <div className={`frame ${className}`}>
      <div className="frame-wrapper">
        <div className="div-2">
          <div className="div-3">
            <img className="ic-baseline-people" alt="Ic baseline people" src={icBaselinePeople} />
            <div className="div-4">
              <div className="element">{text}</div>
              <div className="from-last-month">{text1}</div>
            </div>
          </div>
          <div className="div-5">
            <div className="text-wrapper-4">View</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Frame.propTypes = {
  icBaselinePeople: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
};
