import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage.jsx'
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx'
import LectureresPage from './Pages/LecturersPage/LectureresPage.jsx'
import LecturerePage from './Pages/LecturerePage/LecturerePage.jsx'
import SchedulePage from './Pages/SchedulePage/SchedulePage.jsx'
import LecturerPersonalAreaPage from './Pages/LecturerPersonalAreaPage/LecturerPersonalAreaPage.jsx'
import StudentPersonalAreaPage from './Pages/StudentPersonalAreaPage/StudentPersonalAreaPage.jsx'
import StudentCoursPage from './StudentCoursPage/StudentCoursPage.jsx'
import StudentLoginComp from './Components/Login/StudentLoginConp/StudentLoginComp.jsx'
import EnrollmentStudent from './Components/Login/EnrollmentStudent/EnrollmentStudent.jsx'
import TestPage from './Pages/TestPage/TestPage.jsx'
import Show from './Components/Langugase/Langugase.jsx'




const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/test',
    element: <TestPage /> 
  },
  {path: '/langugase',
    element: <Show/>
  },
  {
    path: '/lecturers',
    element: <LectureresPage /> 
  },
  {
    path: '/lecturer',
    element: <LecturerePage /> 
  },
  {
    path: '/schedule',
    element: <SchedulePage /> 
  },
  {
    path: '/lecturer-personal',
    element: <LecturerPersonalAreaPage /> 
  },
  {
    path: '/student-personal',
    element: <StudentPersonalAreaPage /> 
  },
  // {
  //   path: '/student-cours',
  //   element: <StudentCoursPage /> 
  // },
  {
    path: '/login',
    element: <StudentLoginComp /> 
  },
  {
    path: '/student-enrollment',
    element: <EnrollmentStudent /> 
  },

  
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
