// import './SchedulerLec.css'
// import HeaderComp from '../../Components/Header/HeaderComp.jsx';
// import axios from 'axios';
// import { useState, useEffect } from 'react';
// import CalendarLec from '../../Components/Calendar/CalendarLec.jsx'
// function ScheduleLec() {
//     const [currentScheduleLecStu, setCurrentScheduleLecStu] = useState({});
//     const [connectionsLec, setConnectionsLec] = useState(null);
//     const [loginLecScheduleLe, setLoginLecScheduleLe] = useState(false);
//     const [isLec,setIsLec] = useState(false);
//     const date = new Date()
//     console.log(date);
//     async function getSLecData(date) {
//         try {
//             const res = await axios.get(`http://localhost:3008/api/lecTimeTable/${date.toISOString()}`, { withCredentials: true });

//             return res.data
//         } catch (error) {
//             console.error("Error fetching lecturer data:", error)
//         }
//     }

//     const fetchLecData = async (date = new Date()) => {
//         setLoginLecScheduleLe(true);
//         const data = await getSLecData(date);
//         console.log(data);
//         setCurrentScheduleLecStu(data);
//         setLoginLecScheduleLe(false);

//         // setConnectionsLec(data)
//     }

//     const fetchLecConnection = async () => {
//         const data = await m();

//     }
//     const fetchAlll = async () => {
//         fetchLecData();
//     }
//     useEffect(() => {
//         fetchAlll();
//     }, [])
//     return (
//         <div className='app'>
//             <HeaderComp />
//             <div className='main-content'>
//                 {loginLecScheduleLe ? (
//                     <div className="spinner"></div>
//                 ) : (
//                     <>
//                         <CalendarLec scheduleLec={currentScheduleLecStu} isLec={isLec}/>
                        
//                      </>
//                 )}
//             </div>
//         </div>

//     );





// }
// export default ScheduleLec;


import './SchedulerLec.css'
import HeaderComp from '../../Components/Header/HeaderComp.jsx';
import axios from 'axios';
import { useState, useEffect } from 'react';
import CalendarLec from '../../Components/Calendar/CalendarLec.jsx';

function ScheduleLec({ tokenID }) {
    const [currentScheduleLecStu, setCurrentScheduleLecStu] = useState({});
    const [connectionsLec, setConnectionsLec] = useState(null);
    const [loginLecScheduleLe, setLoginLecScheduleLe] = useState(false);
    const [isLec,setIsLec] = useState(false);
    const date = new Date();
    console.log(date);

    async function getSLecData(date) {
        try {
            const res = await axios.get(`http://localhost:3008/api/lecTimeTable/${date.toISOString()}`, { withCredentials: true });
            return res.data;
        } catch (error) {
            console.error("Error fetching lecturer data:", error);
        }
    }

    const fetchLecData = async (date = new Date()) => {
        setLoginLecScheduleLe(true);
        const data = await getSLecData(date);
        console.log(data);
        setCurrentScheduleLecStu(data);
        setLoginLecScheduleLe(false);
    }

    const fetchAlll = async () => {
        fetchLecData();
    }

    useEffect(() => {
        fetchAlll();
    }, []);

    return (
        <div className='app'>
            <HeaderComp />
            <div className='main-content'>
                {loginLecScheduleLe ? (
                    <div className="spinner"></div>
                ) : (
                    <CalendarLec scheduleLec={currentScheduleLecStu} isLec={isLec} />
                )}
            </div>
        </div>
    );
}

export default ScheduleLec;
