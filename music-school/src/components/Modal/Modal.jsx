import React from "react";
import "./style.css";

export const Modal = () => {
  return (
    <div className="frame">
      <div className="text-wrapper">Add Course</div>
      <div className="div">
        <div className="outline-input">
          <div className="text-wrapper-2">Course Name</div>
        </div>
        <div className="outline-input">
          <div className="text-wrapper-2">Description</div>
        </div>
        <div className="outline-input">
          <div className="text-wrapper-2">Instructor</div>
        </div>
        <div className="outline-input">
          <div className="text-wrapper-3">Instrument</div>
          <img
            className="ic-baseline-keyboard"
            alt="Ic baseline keyboard"
            src="/img/ic-baseline-keyboard-arrow-down-1.svg"
          />
        </div>
        <div className="outline-input">
          <div className="text-wrapper-3">Day of the week</div>
          <img
            className="ic-baseline-keyboard"
            alt="Ic baseline keyboard"
            src="/img/ic-baseline-keyboard-arrow-down-1.svg"
          />
        </div>
        <div className="outline-input">
          <div className="text-wrapper-2">Price</div>
        </div>
      </div>
      <div className="div-2">
        <div className="div-wrapper">
          <div className="text-wrapper-4">Cancel</div>
        </div>
        <div className="div-wrapper-2">
          <div className="text-wrapper-4">Add Course</div>
        </div>
      </div>
    </div>
  );
};
