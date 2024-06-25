

import PopupComponent from "../../Components/Calendar/BotomCalendar.jsx";
import './SchedulerLec.css'
import HeaderComp from '../../Components/Header/HeaderComp.jsx';
import axios from 'axios';
import { useState, useEffect } from 'react';
import CalendarLecc from '../../Components/Calendar/CalendarLec.jsx';

function ScheduleLec({ tokenID }) {
    const [currentScheduleLecStu, setCurrentScheduleLecStu] = useState({});
    const [connectionsScheduleLec, setConnectionsScheduleLec] = useState({})
    const [connectionsLec, setConnectionsLec] = useState(null);
    const [loginLecScheduleLe, setLoginLecScheduleLe] = useState(false);
    const [loginMyconection, setLoginMyconection] = useState(false);
    const [isLec, setIsLec] = useState(false);
    const [conecshenLec, setConecshenLec] = useState(null);
    const [date, setDate] = useState(new Date());
    const [connectionLecId, setConnectionLecId] = useState(null);
    const [specificConnection, setSpecificConnection] = useState({});
    const [Change_color_for_connect_button, set_Change_color_for_connect_button] = useState(null);

    async function getConnectionScheduleLec(connectionLecId, date) {
        try {
            const res = await axios.get(`http://localhost:3008/api/lecLessTimeTable/${connectionLecId}/${date.toISOString()}`, { withCredentials: true });
            return res.data;
        } catch (error) {
            console.error(error);
        }
    }

    const fetchConnectionScheduleLec = async (connectionLecId, date) => {
        const data = await getConnectionScheduleLec(connectionLecId, date);
        if (data?.status === 'success') {
            setConnectionsScheduleLec(data);
            setCurrentScheduleLecStu(data);
            console.log(data);
        }
    }

    async function getConecshenLec() {
        try {
            const res = await axios.get('http://localhost:3008/api/connectionStudLec', { withCredentials: true });
            return res.data;
        } catch (error) {
            console.error(error);
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
        setCurrentScheduleLecStu(data);
        setLoginLecScheduleLe(false);
    }

    const fetchAlll = async (connectionLecId, date) => {
        fetchLecData(date);
        fetchConnectionsLec();
        if (connectionLecId && date) {
            fetchConnectionScheduleLec(connectionLecId, date);
        }
    }

    useEffect(() => {
        fetchAlll();
    }, [date]);

    const handleMyScheduleClickLec = async (date = new Date()) => {
        const data = await getLecData(date);
        setLoginLecScheduleLe(true);
        setCurrentScheduleLecStu(data);
        console.log(data);
        setIsLec(false);
        setLoginLecScheduleLe(false);
    };

    const handleConnectionsLecClick = async (connection, date = new Date()) => {
        setLoginMyconection(true);
        setSpecificConnection(connection);
        set_Change_color_for_connect_button(connection);
        await fetchConnectionScheduleLec(connection._id, date);
        setIsLec(true);
        setConnectionLecId(connection._id);
        setLoginMyconection(false);
    };
// console.log(conecshenLec.connectionStudLec);
    return (
        <div className='appL'>
            <HeaderComp />
            <div className='main-contentL'>
                {loginLecScheduleLe || loginMyconection ? (
                    <div className="spinnerL"></div>
                ) : (
                    <>
                        <div className='calendar-containerL'>
                            <CalendarLecc scheduleLec={currentScheduleLecStu} isLec={isLec} connectionLecId={connectionLecId} specificConnection={specificConnection} />
                        </div>
                        <div className="lecturers-listL">
                            <PopupComponent onDateChanged={(date) => setDate(date)} />
                            <h2>My Connections</h2>
                            <h3 key={tokenID} className="button-likeL" onClick={() => handleMyScheduleClickLec(date)}>My Schedule</h3>
                            {conecshenLec && conecshenLec.connectionStudLec && (
                                <ul>{console.log(conecshenLec.connectionStudLec)}
                                    {conecshenLec.connectionStudLec.map((connection, index) => (
                                        <li key={index}>
                                            <div className="flex-itL">
                                                <div className="Emoji-buttonsL">
                                                <div className="button-redL" onClick={() => alert('Book')}>📗</div>
                                                <div className="button-redL" onClick={() => alert('Chat')}>🗨️</div>
                                                </div>
                                                <div 
                                                    className={`connectionButtonL ${Change_color_for_connect_button === connection ? 'selectedL' : ''}`}
                                                    onClick={() => handleConnectionsLecClick(connection, date)}
                                                >
                                                    {connection.studID.studFName} {connection.studID.studLName} : {connection.connLang}
                                                </div>
                                            </div>
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
