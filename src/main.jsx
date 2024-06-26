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
import StudentLoginComp from './Components/Login/StudentLoginConp/StudentLoginComp.jsx'
import EnrollmentStudent from './Components/Login/EnrollmentStudent/EnrollmentStudent.jsx'
import TestPage from './Pages/TestPage/TestPage.jsx'
import Scheduler from './Pages/Scheduler/Scheduler.jsx'
import RegistrationPageLect from './Components/Login/Registration pageLect/Registration pageLect.jsx'
import Show from './Components/Langugase/Langugase.jsx'
import LecturersByLanguage from './Pages/LecturersPage/LectureresPage.jsx'
import LecturerDetails from './Pages/LecturerePage/LecturerePage.jsx'
import LecturerDetailsPage from './Pages/LecturerePage/LecturerePage.jsx'
import AboutPage  from './Components/About/About.jsx'
import PersonalStudentPage from './Pages/PersonalStudentPage/PersonalStudentPage.jsx'
import ScheduleLec from './Pages/Scheduler/SchedulerLec.jsx'


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
  {path: '/product/:language',
    element: <LecturersByLanguage /> ,
    },
  {path: '/product/lectors/:lecturerId',
    element: <LecturerDetailsPage />
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
  {
    path: '/studentarea',
    element: <Scheduler/>   },
  {
    path: '/login',
    element: <StudentLoginComp /> 
    
  },
  {
    path: '/About',
    element: <AboutPage />,
  },
  {
    path: '/student-enrollment',
    element: <EnrollmentStudent /> 
  },

  { path: '/scheduler',
  element: <Scheduler/> 
  },
  { path: '/schedulerlec',
    element: <ScheduleLec/> 
    },
  {
    path: '/lecturer-enrollment',
    element: <RegistrationPageLect /> 
  },



  
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
