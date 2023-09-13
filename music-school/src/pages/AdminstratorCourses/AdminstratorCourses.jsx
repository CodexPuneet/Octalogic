import React, {useState, useEffect } from 'react';
import search from '../../assets/search.svg'
import plus from '../../assets/plus.svg'
import more from '../../assets/more.svg'
import { StudentNavigation } from "../../components/StudentNavigation";
import { useNavigate } from 'react-router-dom';
import "./style.css";
import data from '../../../data.json';

export const AdminstratorCourses = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCourses, setFilteredCourses] = useState([]);
  useEffect(() => {
    
    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/');
    }
  }, []);
  const handleChange=()=>{
    navigate('/add');
  }
  const courses = data.courses || [];
  useEffect(() => {
    // Filter courses based on search query
    const filtered = courses.filter((course) =>
      Object.values(course)
        .join(' ')
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );
    setFilteredCourses(filtered);
  }, [searchQuery, courses]);

  return (
    <div className="adminstrator-courses">
      <div className="overlap-group-wrapper">

    
        <div className="overlap-group">
          <button onClick={()=>handleChange()}  className="extended-FAB" >
            <div className="state-layer">
              <img alt="Mdi plus" src={plus} />
              <div className="label-text" >Add Course</div>
            </div>
          </button>
          <div className="frame-3">
            <StudentNavigation />
            <div className="body">
              <div className="frame-4">
                <div className="div-wrapper">
                  <div className="text-wrapper-4" >Courses</div>
                </div>
                <div className="frame-5">
                  <div className="frame-6">
                    <div className="course-list">COURSE LIST</div>
                    <div className="outline-input">
                      <img className="mdi-magnify" alt="Mdi magnify" src={search} />
                      <input
                        type="text"
                        className="outline-input"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                     
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
                          <div className="text-wrapper-6">No. of Students</div>
                          <div className="text-wrapper-6">Price</div>
                          <div className="text-wrapper-6">Status</div>
                        </div>
                        <div className="text-wrapper-7">Actions</div>
                      </header>
                      <div className="body-2">
            {filteredCourses.map((course) => (
  <div className="row" key={course.id}>
  <div className="div-2">
    <div className="text-wrapper-6">{course.name}</div>
    <div className="text-wrapper-6">{course.description}</div>
    <div className="text-wrapper-6">{course.instructor}</div>
    <div className="text-wrapper-6">{course.instrument}</div>
    <div className="text-wrapper-6">{course.dayOfWeek}</div>
    <div className="text-wrapper-6">{course.numOfStudents}</div>
    <div className="text-wrapper-6">${course.price}</div>
    <div className="chip-wrapper">
      <div className={`chip-${course.status === 'Active' ? '1' : '2'}`}>
        <div className="text-wrapper-8">{course.status}</div>
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
))}
                     
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
