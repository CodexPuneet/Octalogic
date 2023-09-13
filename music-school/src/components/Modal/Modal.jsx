import React, { useState } from "react";
import "./style.css";
import data from '../../../data.json';
import { useNavigate } from 'react-router-dom';

export const Modal = () => {
  const navigate = useNavigate();
  const handleNavigation=()=>{
    navigate('/course')
  }
  const [courseData, setCourseData] = useState({
    name: "",
    description: "",
    instructor: "",
    instrument: "",
    dayOfWeek: "",
    price: "",
    numOfStudents: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleAddCourse = () => {
    const newCourse = {
      id: Date.now(), 
      ...courseData,
      status: "Active", 
    };
  
    fetch("http://localhost:8080/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCourse),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        alert("New Course Added successfully")
        navigate('/course');
        setCourseData({
          name: "",
          description: "",
          instructor: "",
          instrument: "",
          dayOfWeek: "",
          price: "",
          numOfStudents: "",
        });
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };
  
  return (
    <div className="frame">
      <div className="text-wrapper">Add Course</div>
      <div className="div">
     
          <div className="text-wrapper-2">Course Name</div>
            <input
            className="outline-input"
          type="text"
          name="name"
          placeholder="Course Name"
          value={courseData.name}
          onChange={handleInputChange}
        />
     
      
          <div className="text-wrapper-2">Description</div>
             <input
             className="outline-input"
          type="text"
          name="description"
          placeholder="Course description"
          value={courseData.description}
          onChange={handleInputChange}
        />
    
          <div className="text-wrapper-2">Instructor</div>
         
             <input
             className="outline-input"
          type="text"
          name="instructor"
          placeholder="Course instructor"
          value={courseData.instructor}
          onChange={handleInputChange}
        />

      
          <div className="text-wrapper-3">Instrument</div>
          <input
          className="outline-input"
          type="text"
          name="instrument"
          placeholder="Course instrument"
          value={courseData.instrument}
          onChange={handleInputChange}
        />
        
  

          <div className="text-wrapper-3">Day of the week</div>
          <input
          className="outline-input"
          type="number"
          name="dayOfWeek"
          placeholder="Day Of Week"
          value={courseData.dayOfWeek}
          onChange={handleInputChange}
        />
          <div className="text-wrapper-3"> Numbers Of Students</div>
          <input
          className="outline-input"
          type="number"
          name="numOfStudents"
          placeholder=" Numbers Of Students"
          value={courseData. numOfStudents}
          onChange={handleInputChange}
        />
      
       
          <div className="text-wrapper-2">Price</div>
          <input
          className="outline-input"
          type="number"
          name="price"
          placeholder="price"
          value={courseData.price}
          onChange={handleInputChange}
        />
        
      </div>
      <div className="div-2">
        <div className="div-wrapper">
          <button onClick={handleNavigation} className="text-wrapper-4">Cancel</button>
        </div>
        <div className="div-wrapper-2">
          <button className="text-wrapper-4" onClick={handleAddCourse}>
            Add Course
          </button>
        </div>
      </div>
    </div>
  );
};
