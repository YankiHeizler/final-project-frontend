

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
export async function  getConnectionSchedule(id) {
  try {
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