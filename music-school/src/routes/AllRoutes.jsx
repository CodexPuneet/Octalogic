import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AdminstratorCourses } from "../pages/AdminstratorCourses"
import { Adminstrator } from "../pages/Adminstrator"
import {Login} from '../pages/Login'
import {Modal} from '../components/Modal'



const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/overview" element={<Adminstrator/>}/>
        <Route path='/course' element={<AdminstratorCourses/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/add" element={<Modal/>}/>
    </Routes>
  )
}

export default AllRoutes