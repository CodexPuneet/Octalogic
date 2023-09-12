
import log from '../../assets/logout.svg'
import React from "react";
import "./style.css";

export const Account = ({ className }) => {
  return (
    <div className={`account ${className}`}>
      <div className="frame">
        <img className="mdi-logout" alt="Mdi logout" src={log} />
        <div className="text-wrapper">Logout</div>
      </div>
    </div>
  );
};
