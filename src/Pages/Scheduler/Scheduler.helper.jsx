
// import { addLesson } from "../../Components/Calendar/Calendar.jsx"
// import { format } from 'date-fns';
// import axios from "axios";
// export async function getStudentData(date) {
//   try {
//     const res = await axios.get(`http://localhost:3008/api/studentTimeTable/${date.toISOString()}`, { withCredentials: true });
//     // const res = await axios.get('http://localhost:3008/api/studentTimeTable',{headers:{'cookie':`${xtoken}`}});
//     // const res = await axios.get('http://localhost:3008/api/studentTimeTable');

//     return res.data
//   } catch (error) {
//     console.error("Error fetching student data:", error)
//   }
// }


// export async function getConecshen() {
//   try {
//     const res = await axios.get('http://localhost:3008/api/connectionStudLec', { withCredentials: true });
//     // const res = await axios.get('http://localhost:3008/api/studentTimeTable',{headers:{'cookie':`${xtoken}`}});
//     // const res = await axios.get('http://localhost:3008/api/studentTimeTable');

//     return res.data
//   } catch (error) {
//     console.error(error)
//   }
// }
// export async function getConnectionSchedule(id, date) {
//   try {
//     const idOfConnection = id

//     // const res = await axios({
//     //   method:'get',
//     //   url:'http://localhost:3008/api/studentLessTimeTable/'+id,
//     //   data:{UserFirstDate:new Date()},
//     //   headers:{withCredentials:true}
//     // })

//     const res = await axios.get(`http://localhost:3008/api/studentLessTimeTable/${id}/${date.toISOString()}`, { withCredentials: true });
//     // const res = await axios.get('http://localhost:3008/api/studentTimeTable',{headers:{'cookie':`${xtoken}`}});
//     // const res = await axios.get('http://localhost:3008/api/studentTimeTable');

//     return res.data
//   } catch (error) {
//     console.error(error)
//   }
// }

// export async function  createConnectionSchedule(id,langId){
//   // try {
//     const dataToServer = {
//       "userDetails":{
//           "lecID": id,
//           "connLang": langId,
//           "connLessons": [],
//           "connBooks": [""]
//       }
//     };

//     let res = await axios.post('http://localhost:3008/api/connectionStudLec',JSON.stringify(dataToServer),{withCredentials:true});

//     return res?.data;
//   // } catch (error) {
//   //   console.error(error)
//   // }
// }


// // export async function  getLecData() {
// //   try {
// //     const res = await axios.get('http://localhost:3008/api/studentLessTimeTable',{withCredentials:true});

// //     return res.data
// //   } catch (error) {
// //     console.error(error)
// //   }
// // }
// //בקשת פוסט לקביעת שיעור

// // export async function postSetLesson(hoer,date,messag,coonectionID) {
// //   console.log(coonectionID);
// //   const data ={hoer,date,messag}
// //   try {
// //     const res = await axios.post('http://localhost:3008/api/lecTimeTable/'+coonectionID, data, { withCredentials: true });

// //     return res.data;
// //   } catch (error) {
// //     console.error("Error posting student data:", error);
// //   }
// // }


// // export const postSetLesson = async (hour, datee, message, connectionID) => {
// // console.log(datee);
// // const date = format(datee, 'yyyy-MM-dd'); // המרת התאריך לפורמט YYYY-MM-DD


// // console.log(connectionID);

// // console.log(date);

// //   try {
// //     const response = await axios.post(`http://localhost:3008/api/lessonsStudLec/${connectionID}`, {
// //       hour,
// //       date,
// //       message,

// //     });
// //     return response.data;
// //   } catch (error) {
// //     console.error('Error posting student data:', error);
// //     throw error;
// //   }
// // };

// // Utility function
// const myFormat = (dateString) => {
//   const date = new Date();
//   const sep = dateString.split('.');

//   date.setDate(sep[0]);
//   date.setMonth(parseInt(sep[1]) - 1);
//   date.setFullYear(sep[2]);

//   return date;
// }


// export const postSetLesson = async (hour, datee, message, connectionID) => {
//   const date = format(myFormat(datee), 'yyyy-MM-dd'); // המרת התאריך לפורמט YYYY-MM-DD

//   try {
//     const response = await axios.post(`http://localhost:3008/api/lessonsStudLec/${connectionID}`, {
//       lessTime: hour,
//       lessDate: date,
//       lessMessage: message,

//     }, { withCredentials: true });
//     return response.data;
//   } catch (error) {
//     console.error('Error posting student data:', error);
//     throw error;
//   }
// };





// Scheduler.helper.jsx

import axios from "axios";
import { format } from 'date-fns';

export async function getStudentData(date) {
  try {
    const res = await axios.get(`http://localhost:3008/api/studentTimeTable/${date.toISOString()}`, { withCredentials: true });
    return res.data;
  } catch (error) {
    console.error("Error fetching student data:", error);
    throw error;
  }
}

export async function getConecshen() {
  try {
    const res = await axios.get('http://localhost:3008/api/connectionStudLec', { withCredentials: true });
    return res.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getConnectionSchedule(id, date) {
  try {
    const res = await axios.get(`http://localhost:3008/api/studentLessTimeTable/${id}/${date.toISOString()}`, { withCredentials: true });
    return res.data;
  } catch (error) {
    console.error(error);
  }
}

export async function createConnectionSchedule(id, langId) {
  const dataToServer = {
    "userDetails": {
      "lecID": id,
      "connLang": langId,
      "connLessons": [],
      "connBooks": [""]
    }
  };

  try {
    let res = await axios.post('http://localhost:3008/api/connectionStudLec', JSON.stringify(dataToServer), { withCredentials: true });
    return res?.data;
  } catch (error) {
    console.error(error);
  }
}

const myFormat = (dateString) => {
  const date = new Date();
  const sep = dateString.split('.');

  date.setDate(sep[0]);
  date.setMonth(parseInt(sep[1]) - 1);
  date.setFullYear(sep[2]);

  return date;
}

export const postSetLesson = async (hour, datee, message, connectionID) => {
  const date = format(myFormat(datee), 'yyyy-MM-dd');

  try {
    const response = await axios.post(`http://localhost:3008/api/lessonsStudLec/${connectionID}`, {
      lessTime: hour,
      lessDate: date,
      lessMessage: message,
    }, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error('Error posting student data:', error);
    throw error;
  }
};
