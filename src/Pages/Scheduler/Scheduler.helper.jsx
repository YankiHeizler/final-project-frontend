
// import { addLesson } from "../../Components/Calendar/Calendar.jsx"
import axios from "axios";
  export async function  getStudentData() {
  try {
    const res = await axios.get('http://localhost:3008/api/studentTimeTable',{withCredentials:true});
    // const res = await axios.get('http://localhost:3008/api/studentTimeTable',{headers:{'cookie':`${xtoken}`}});
    // const res = await axios.get('http://localhost:3008/api/studentTimeTable');

    return res.data
  } catch (error) {
    console.error("Error fetching student data:",error)
  }
}


  export async function  getConecshen() {
  try {
    const res = await axios.get('http://localhost:3008/api/connectionStudLec',{withCredentials:true});
    // const res = await axios.get('http://localhost:3008/api/studentTimeTable',{headers:{'cookie':`${xtoken}`}});
    // const res = await axios.get('http://localhost:3008/api/studentTimeTable');

    return res.data
  } catch (error) {
    console.error(error)
  }
}
export async function  getConnectionSchedule(id){
  try {
    const idOfConnection = id

    // const res = await axios({
    //   method:'get',
    //   url:'http://localhost:3008/api/studentLessTimeTable/'+id,
    //   data:{UserFirstDate:new Date()},
    //   headers:{withCredentials:true}
    // })
       const res = await axios.get('http://localhost:3008/api/studentLessTimeTable/'+id,{withCredentials:true});
    // const res = await axios.get('http://localhost:3008/api/studentTimeTable',{headers:{'cookie':`${xtoken}`}});
    // const res = await axios.get('http://localhost:3008/api/studentTimeTable');

    return res.data
  } catch (error) {
    console.error(error)
  }
}


// export async function  getLecData() {
//   try {
//     const res = await axios.get('http://localhost:3008/api/studentLessTimeTable',{withCredentials:true});
 
//     return res.data
//   } catch (error) {
//     console.error(error)
//   }
// }
//בקשת פוסט לקביעת שיעור

// export async function postSetLesson(hoer,date,messag,coonectionID) {
//   console.log(coonectionID);
//   const data ={hoer,date,messag}
//   try {
//     const res = await axios.post('http://localhost:3008/api/lecTimeTable/'+coonectionID, data, { withCredentials: true });

//     return res.data;
//   } catch (error) {
//     console.error("Error posting student data:", error);
//   }
// }


export const postSetLesson = async (hour, date, message, connectionID) => {
console.log(connectionID);
  try {
    const response = await axios.post(`http://localhost:3008/api/lessonsStudLec/${connectionID}`, {
      hour,
      date,
      message,
    });
    return response.data;
  } catch (error) {
    console.error('Error posting student data:', error);
    throw error;
  }
};



