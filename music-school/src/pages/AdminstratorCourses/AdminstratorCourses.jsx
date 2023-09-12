import React from "react";
import search from '../../assets/search.svg'
import plus from '../../assets/plus.svg'
import more from '../../assets/more.svg'
import { StudentNavigation } from "../../components/StudentNavigation";
import "./style.css";

export const AdminstratorCourses = () => {
  return (
    <div className="adminstrator-courses">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="extended-FAB">
            <div className="state-layer">
              <img className="mdi-plus" alt="Mdi plus" src={plus} />
              <div className="label-text">Add Course</div>
            </div>
          </div>
          <div className="frame-3">
            <StudentNavigation />
            <div className="body">
              <div className="frame-4">
                <div className="div-wrapper">
                  <div className="text-wrapper-4">Courses</div>
                </div>
                <div className="frame-5">
                  <div className="frame-6">
                    <div className="course-list">COURSE LIST</div>
                    <div className="outline-input">
                      <img className="mdi-magnify" alt="Mdi magnify" src={search} />
                      <div className="text-wrapper-5">Search</div>
                    </div>
                  </div>
                  <div className="table">
                    <div className="table-2">
                      <header className="header">
                        <div className="div-2">
                          <div className="text-wrapper-6">Name</div>
                          <div className="text-wrapper-6">Description</div>
                          <div className="text-wrapper-6">Instructor</div>
                          <div className="text-wrapper-6">Instrument</div>
                          <div className="text-wrapper-6">Day of Week</div>
                          <div className="text-wrapper-6"># of Students</div>
                          <div className="text-wrapper-6">Price</div>
                          <div className="text-wrapper-6">Status</div>
                        </div>
                        <div className="text-wrapper-7">Actions</div>
                      </header>
                      <div className="body-2">
                        <div className="row">
                          <div className="div-2">
                            <div className="text-wrapper-6">Classical Guitar</div>
                            <div className="text-wrapper-6">Guitar classes for...</div>
                            <div className="text-wrapper-6">Ms. Jane Doe</div>
                            <div className="text-wrapper-6">Guitar</div>
                            <div className="text-wrapper-6">Wednesday</div>
                            <div className="text-wrapper-6">26</div>
                            <div className="text-wrapper-6">$60</div>
                            <div className="chip-wrapper">
                              <div className="chip">
                                <div className="text-wrapper-8">Active</div>
                              </div>
                            </div>
                          </div>
                          <div className="action">
                            <img
                              className="mdi-dots-vertical"
                              alt="Mdi dots vertical"
                              src={more}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="div-2">
                            <div className="text-wrapper-6">column</div>
                            <div className="text-wrapper-6">column</div>
                            <div className="text-wrapper-6">column</div>
                            <div className="text-wrapper-6">column</div>
                            <div className="text-wrapper-6">column</div>
                            <div className="text-wrapper-6">column</div>
                            <div className="text-wrapper-6">column</div>
                            <div className="chip-wrapper">
                              <div className="chip">
                                <div className="text-wrapper-8">Active</div>
                              </div>
                            </div>
                          </div>
                          <div className="action">
                            <img
                              className="mdi-dots-vertical"
                              alt="Mdi dots vertical"
                              src={more}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="div-2">
                            <div className="text-wrapper-6">column</div>
                            <div className="text-wrapper-6">column</div>
                            <div className="text-wrapper-6">column</div>
                            <div className="text-wrapper-6">column</div>
                            <div className="text-wrapper-6">column</div>
                            <div className="text-wrapper-6">column</div>
                            <div className="text-wrapper-6">column</div>
                            <div className="chip-wrapper">
                              <div className="chip-2">
                                <div className="text-wrapper-8">Closed</div>
                              </div>
                            </div>
                          </div>
                          <div className="action">
                            <img
                              className="mdi-dots-vertical"
                              alt="Mdi dots vertical"
                              src={more}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="div-2">
                            <div className="text-wrapper-6">column</div>
                            <div className="text-wrapper-6">column</div>
                            <div className="text-wrapper-6">column</div>
                            <div className="text-wrapper-6">column</div>
                            <div className="text-wrapper-6">column</div>
                            <div className="text-wrapper-6">column</div>
                            <div className="text-wrapper-6">column</div>
                            <div className="chip-wrapper">
                              <div className="chip-2">
                                <div className="text-wrapper-8">Closed</div>
                              </div>
                            </div>
                          </div>
                          <div className="action">
                            <img
                              className="mdi-dots-vertical"
                              alt="Mdi dots vertical"
                              src={more}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="div-2">
                            <div className="text-wrapper-6">column</div>
                            <div className="text-wrapper-6">column</div>
                            <div className="text-wrapper-6">column</div>
                            <div className="text-wrapper-6">column</div>
                            <div className="text-wrapper-6">column</div>
                            <div className="text-wrapper-6">column</div>
                            <div className="text-wrapper-6">column</div>
                            <div className="chip-wrapper">
                              <div className="chip-3">
                                <div className="text-wrapper-8">Archived</div>
                              </div>
                            </div>
                          </div>
                          <div className="action">
                            <img
                              className="mdi-dots-vertical"
                              alt="Mdi dots vertical"
                              src={more}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="div-2">
                            <div className="text-wrapper-6">column</div>
                            <div className="text-wrapper-6">column</div>
                            <div className="text-wrapper-6">column</div>
                            <div className="text-wrapper-6">column</div>
                            <div className="text-wrapper-6">column</div>
                            <div className="text-wrapper-6">column</div>
                            <div className="text-wrapper-6">column</div>
                            <div className="chip-wrapper">
                              <div className="chip-3">
                                <div className="text-wrapper-8">Archived</div>
                              </div>
                            </div>
                          </div>
                          <div className="action">
                            <img
                              className="mdi-dots-vertical"
                              alt="Mdi dots vertical"
                              src={more}
                            />
                          </div>
                        </div>
                        <div className="row-2">
                          <div className="div-2">
                            <div className="text-wrapper-6">column</div>
                            <div className="text-wrapper-6">column</div>
                            <div className="text-wrapper-6">column</div>
                            <div className="text-wrapper-6">column</div>
                            <div className="text-wrapper-6">column</div>
                            <div className="text-wrapper-6">column</div>
                            <div className="text-wrapper-6">column</div>
                            <div className="chip-wrapper">
                              <div className="chip-3">
                                <div className="text-wrapper-8">Archived</div>
                              </div>
                            </div>
                          </div>
                          <div className="action">
                            <img
                              className="mdi-dots-vertical"
                              alt="Mdi dots vertical"
                              src={more}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
