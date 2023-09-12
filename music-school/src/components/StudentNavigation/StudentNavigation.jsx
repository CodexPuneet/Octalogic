
import React from "react";
import { Link } from "react-router-dom";
import { Account } from "../Account";
import home from '../../assets/home.svg'
import course from '../../assets/courses.svg'
import logo from '../../assets/logo.svg'
import "./style.css";

export const StudentNavigation = () => {
  return (
    <div className="student-navigation">
      <img className="logo" alt="Logo" src={logo} />
      <div className="modules">
        <div className="div">
          <img className="img" alt="Mdi view dashboard" src={home} />
          <div className="text-wrapper-2">Home</div>
        </div>
        <Link className="frame-2" to="/adminstrator-u45-courses">
          <img className="img" alt="Ic outline queue" src={course} />
          <div className="text-wrapper-3">Courses</div>
        </Link>
      </div>
      <Account className="account-instance" />
    </div>
  );
};
