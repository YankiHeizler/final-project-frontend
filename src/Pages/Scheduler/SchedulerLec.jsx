

import PopupComponent from "../../Components/Calendar/BotomCalendar.jsx";
import './SchedulerLec.css'
import HeaderComp from '../../Components/Header/HeaderComp.jsx';
import axios from 'axios';
import { useState, useEffect } from 'react';
import CalendarLecc from '../../Components/Calendar/CalendarLec.jsx';

function ScheduleLec({ tokenID }) {
    const [currentScheduleLecStu, setCurrentScheduleLecStu] = useState({});
    const [connectionsScheduleLec,setConnectionsScheduleLec] = useState({})
    const [connectionsLec, setConnectionsLec] = useState(null);
    const [loginLecScheduleLe, setLoginLecScheduleLe] = useState(false);
    const [loginMyconection, setLoginMyconection] = useState(false);
    const [isLec, setIsLec] = useState(false);
    const [conecshenLec, setConecshenLec] = useState(null);
    const [date, setDate] = useState(new Date());
    const [connectionLecId, setConnectionLecId] = useState(null);
    const [specificConnection, setSpecificConnection] = useState(null);
    

    console.log(conecshenLec);
    console.log(tokenID);
    console.log("11111111111111111111111111");

    async function getConnectionScheduleLec(connectionLecId, date) {
        try {
            console.log(connectionLecId);
            const idOfConnection = connectionLecId
            const res = await axios.get(`http://localhost:3008/api/lecLessTimeTable/${connectionLecId}/${date.toISOString()}`, { withCredentials: true });
            // const res = await axios.get('http://localhost:3008/api/studentTimeTable',{headers:{'cookie':`${xtoken}`}});
            // const res = await axios.get('http://localhost:3008/api/studentTimeTable');

            return res.data
        } catch (error) {
            console.error(error)
        }
    }

    const fetchConnectionScheduleLec = async (connectionLecId, date) => {
        const data = await getConnectionScheduleLec(connectionLecId, date);
        if (data?.status === 'success') {
            // setConnectionsLec(data);
            setConnectionsScheduleLec(data);
            setCurrentScheduleLecStu(data);
            console.log(data);
        }
    }


    async function getConecshenLec() {
        try {
            const res = await axios.get('http://localhost:3008/api/connectionStudLec', { withCredentials: true });
            // const res = await axios.get('http://localhost:3008/api/studentTimeTable',{headers:{'cookie':`${xtoken}`}});
            // const res = await axios.get('http://localhost:3008/api/studentTimeTable');

            return res.data
        } catch (error) {
            console.error(error)
        }
    }

    const fetchConnectionsLec = async () => {
        const data = await getConecshenLec();
        if (data?.status === 'success') {
            setConecshenLec(data);
            console.log(data);
        }
    }

    async function getLecData(date) {
        try {
            const res = await axios.get(`http://localhost:3008/api/lecTimeTable/${date.toISOString()}`, { withCredentials: true });
            return res.data;
        } catch (error) {
            console.error("Error fetching lecturer data:", error);
        }
    }

    const fetchLecData = async (date = new Date()) => {
        setLoginLecScheduleLe(true);
        const data = await getLecData(date);
        console.log(data);
        setCurrentScheduleLecStu(data);
        setLoginLecScheduleLe(false);
    }

    const fetchAlll = async (connectionLecId, date) => {
        fetchLecData(date);
        fetchConnectionsLec()
        if (connectionLecId && date){
        fetchConnectionScheduleLec(connectionLecId, date)}
    }

    useEffect(() => {
        fetchAlll();
    }, [date]);

    const handleMyScheduleClickLec = async (date = new Date()) => {
        const data = await getLecData(date)
        console.log(date);
        console.log(data);
        setLoginLecScheduleLe(true);
        setCurrentScheduleLecStu(data);
        setIsLec(false);
        setLoginLecScheduleLe(false);
    };
    


    
    console.log(conecshenLec);
    const handleConnectionsLecClick = async (conecshenLec, selectedDate = new Date()) => {
        setLoginMyconection(true);
        setSpecificConnection(conecshenLec)
        const data = await getConecshenLec(conecshenLec._id, selectedDate); // Pass selectedDate here
        console.log(conecshenLec._id);
        console.log(conecshenLec);
        console.log(selectedDate);

        fetchConnectionScheduleLec(conecshenLec._id, selectedDate); // Pass selectedDate here
        setCurrentScheduleLecStu(connectionsScheduleLec);
        setIsLec(true);
        setConnectionLecId(conecshenLec._id);
        setLoginMyconection(false);
    };
    
    
    return (
        <div className='app'>
            <HeaderComp />
            <div className='main-content'>
                {loginLecScheduleLe || loginMyconection ? (
                    <div className="spinner"></div>
                ) : (
                    <>
                        <CalendarLecc scheduleLec={currentScheduleLecStu} isLec={isLec} connectionLecId={connectionLecId}specificConnection={specificConnection} />
                        {console.log(currentScheduleLecStu)}{console.log(isLec)}{console.log(connectionLecId)}
                        <div className="lecturers-list">
                            <PopupComponent
                                onDateChanged={(date) => setDate(date)}
                            />
                            <h2>My Conections</h2>
                            <h3 key={tokenID} className="button-like" onClick={() => handleMyScheduleClickLec(date)}>my schedule</h3>
                            {conecshenLec && conecshenLec.connectionStudLec && (
                                <ul>
                                    {conecshenLec?.connectionStudLec?.map((connection, index) => (
                                        <li key={index} onClick={() => handleConnectionsLecClick(connection, date)}>
                                            {connection?.studID?.studFName} {connection?.studID?.studLName} :{connection?.connLang}
                                        </li>
                                    ))}                                    
                                </ul>
                            )}
                        </div>

                    </>
                )}
            </div>
        </div>
    );
}

export default ScheduleLec;





