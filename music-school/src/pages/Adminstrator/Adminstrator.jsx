import React from "react";
import { Frame } from "../../components/Frame";
import user from '../../assets/user.svg'
import { StudentNavigation } from "../../components/StudentNavigation";
import "./style.css";

export const Adminstrator = () => {
  return (
    <div className="adminstrator">
      <StudentNavigation />
      <div className="frame-4">
        <div className="div-wrapper">
          <div className="text-wrapper-5">Overview</div>
        </div>
        <div className="div-6">
          <Frame className="frame-20" icBaselinePeople={user} />
          <Frame
            className="frame-20"
            icBaselinePeople={user}
            text="12"
            text1="total number of courses"
          />
          <Frame
            className="frame-20"
            icBaselinePeople={user}
            text="$2000"
            text1="total amount earned"
          />
          <Frame
            className="frame-20"
            icBaselinePeople={user}
            text="Guitar"
            text1="best performing course"
          />
          <Frame
            className="frame-20"
            icBaselinePeople={user}
            text="Flute"
            text1="worst performing course"
          />
        </div>
        <div className="frame-5">
          <div className="div-6">
            <div className="text-wrapper-6">LATEST ENROLMENTS</div>
            <div className="text-wrapper-7">View All Courses</div>
          </div>
          <div className="table">
            <div className="table-2">
              <div className="header">
                <div className="text-wrapper-8">Enr. No</div>
                <div className="text-wrapper-8">S. Name</div>
                <div className="text-wrapper-8">C. Name</div>
                <div className="text-wrapper-8">Fees</div>
                <div className="text-wrapper-8">Enr. Date</div>
              </div>
              <div className="body">
                <div className="row">
                  <div className="text-wrapper-9">1563124</div>
                  <div className="text-wrapper-9">John Doe</div>
                  <div className="text-wrapper-9">Percussion</div>
                  <div className="text-wrapper-9">$120</div>
                  <div className="text-wrapper-9">12-08-223</div>
                </div>
                <div className="row">
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                </div>
                <div className="row">
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                </div>
                <div className="row">
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                </div>
                <div className="row">
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-5">
          <div className="div-6">
            <div className="text-wrapper-6">BEST STUDENTS</div>
            <div className="text-wrapper-7">View All Students</div>
          </div>
          <div className="table">
            <div className="table-2">
              <div className="header">
                <div className="text-wrapper-8">Reg. No</div>
                <div className="text-wrapper-8">F. Name</div>
                <div className="text-wrapper-8">L. Name</div>
                <div className="text-wrapper-8">Course #</div>
                <div className="text-wrapper-8">Total Fees</div>
                <div className="text-wrapper-8">Reg. Date</div>
              </div>
              <div className="body">
                <div className="row">
                  <div className="text-wrapper-9">43422</div>
                  <div className="text-wrapper-9">John</div>
                  <div className="text-wrapper-9">Doe</div>
                  <div className="text-wrapper-9">3</div>
                  <div className="text-wrapper-9">$300</div>
                  <div className="text-wrapper-9">01-6-2023</div>
                </div>
                <div className="row">
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                </div>
                <div className="row">
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                </div>
                <div className="row">
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                </div>
                <div className="row">
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                  <div className="text-wrapper-9">column</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
