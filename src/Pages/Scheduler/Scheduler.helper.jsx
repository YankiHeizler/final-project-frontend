
// מה שהתלמיד מקבל ללא קונקשן
// export const studentScheduleActive = {
//   dates: ["1.1.24", "2.1.24", "3.1.24", "4.1.24", "5.1.2024"],
//   lessons: [
//     [
//       {hour: '6:00', lecname: 'Ben Lulu Gyora',coonLeng:'English lesson', color: 'orange' },
//       { time: '7:00', lecname: 'Ben Lulu Gyora',coonLeng:'Russian lesson', color: 'orange' },
//       { time: '8:00', lecname: 'Ben Lulu Gyora',coonLeng:'French lesson', color: 'orange' },
//       { time: '9:00', lecname: 'Ben Lulu Gyora',coonLeng:'Russian lesson', color: 'orange' },
//       { time: '10:00', lecname: 'Ben Lulu Gyora',coonLeng:'Russian lesson', color: 'orange' },
//       { time: '11:00', lecname: 'Ben Lulu Gyora',coonLeng:'French lesson', color: 'orange' },
//       { time: '12:00', lecname: 'Ben Lulu Gyora',coonLeng:'French lesson', color: 'orange' },
//       { time: '13:00', lecname: 'Ben Lulu Gyora',coonLeng:'French lesson', color: 'orange' },
//       { time: '14:00', lecname: 'Ben Lulu Gyora',coonLeng:'Russian lesson', color: 'orange' },
//       { time: '15:00', lecname: 'Ben Lulu Gyora',coonLeng:'Russian lesson', color: 'orange' }
//     ],
//     [
//       { time: '6:00', lecname: 'Ben Lulu Gyora',coonLeng:'Russian lesson', color: 'orange' },
//       { time: '7:00', lecname: '',coonLeng:'', color: '' },
//       { time: '8:00', lecname: '',coonLeng:'', color: '' },
//       { time: '9:00', lecname: '',coonLeng:'', color: '' },
//       { time: '10:00', lecname: '',coonLeng:'', color: '' },
//       { time: '11:00', lecname: 'Ben Lulu Gyora',coonLeng:'English lesson', color: 'orange' },
//       { time: '12:00', lecname: 'Ben Lulu Gyora',coonLeng:'French lesson', color: 'orange' },
//       { time: '13:00', lecname: '',coonLeng:'', color: '' },
//       { time: '14:00', lecname: '',coonLeng:'', color: '' },
//       { time: '15:00', lecname: '',coonLeng:'', color: '' }
//     ],
//     [
//       { time: '6:00', lecname: '',coonLeng:'', color: '' },
//       { time: '7:00', lecname: '',coonLeng:'', color: '' },
//       { time: '8:00', lecname: '',coonLeng:'', color: '' },
//       { time: '9:00', lecname: '',coonLeng:'', color: '' },
//       { time: '10:00', lecname: '',coonLeng:'', color: '' },
//       { time: '11:00', lecname: '',coonLeng:'', color: '' },
//       { time: '12:00', lecname: 'Ben Lulu Gyora',coonLeng:'', color: 'orange' },
//       { time: '13:00', lecname: 'Ben Lulu Gyora',coonLeng:'', color: 'orange' },
//       { time: '14:00', lecname: 'Ben Lulu Gyora',coonLeng:'', color: 'orange' },
//       { time: '15:00', lecname: 'Ben Lulu Gyora',coonLeng:'', color: 'orange' }
//     ],
//     [
//       { time: '6:00', lecname: '',coonLeng:'', color: '' },
//       { time: '7:00', lecname: '',coonLeng:'', color: '' },
//       { time: '8:00', lecname: '',coonLeng:'', color: '' },
//       { time: '9:00', lecname: '',coonLeng:'', color: '' },
//       { time: '10:00', lecname: '',coonLeng:'', color: '' },
//       { time: '11:00', lecname: '',coonLeng:'', color: '' },
//       { time: '12:00', lecname: '',coonLeng:'', color: '' },
//       { time: '13:00', lecname: '',coonLeng:'', color: '' },
//       { time: '14:00', lecname: '',coonLeng:'', color: '' },
//       { time: '15:00', lecname: '',coonLeng:'', color: '' }
//     ],
//     [
//       { time: '6:00', lecname: '',coonLeng:'', color: '' },
//       { time: '7:00', lecname: '',coonLeng:'', color: '' },
//       { time: '8:00', lecname: '',coonLeng:'', color: '' },
//       { time: '9:00', lecname: '',coonLeng:'', color: '' },
//       { time: '10:00', lecname: '',coonLeng:'', color: '' },
//       { time: '11:00', lecname: '',coonLeng:'', color: '' },
//       { time: '12:00', lecname: '',coonLeng:'', color: '' },
//       { time: '13:00', lecname: '',coonLeng:'', color: '' },
//       { time: '14:00', lecname: '',coonLeng:'', color: '' },
//       { time: '15:00', lecname: '',coonLeng:'', color: '' }
//     ],
//   ]
// };

//  export async function  getStudentData() {
  // return await fetch('http://localhost:3008/api/studentTimeTable',{
  //   method:'GET'
  // } )
  //   .then(response => response.json())
  //   .then(json => json)
  //   .catch(error => console.error(error));
  // const xtoken = localStorage.getItem('Token')
  import axios from "axios";
  export async function  getStudentData() {
  try {
    const res = await axios.get('http://localhost:3008/api/studentTimeTable',{withCredentials:true});
    // const res = await axios.get('http://localhost:3008/api/studentTimeTable',{headers:{'cookie':`${xtoken}`}});
    // const res = await axios.get('http://localhost:3008/api/studentTimeTable');

    return res.data
  } catch (error) {
    console.error(error)
  }
}

    // כשקיים שיעור מתןך קונקשן מסוים 
// export const lecturerSchedule = {
//     dates: ['1.1.24', '2.1.24', '3.1.24', '4.1.24', '5.1.24'],
    
//   lessons: [
//     [
//       { time: "6:00", status: "available", color: "green" },
//       { time: "7:00", status: "English lesson", color: "orange" },
//       { time: "8:00", status: "not working", color: "green" },
//       { time: "9:00", status: "not working", color: "green" },
//       { time: "10:00", status: "not working", color: "green" },
//       { time: "11:00", status: "not working", color: "green" },
//       { time: "12:00", status: "not working", color: "green" },
//       { time: "13:00", status: "not working", color: "green" },
//       { time: "14:00", status: "not working", color: "green" },
//       { time: "15:00", status: "not working", color: "green" },
//     ],
//     [
//       { time: "6:00", status: "available", color: "green" },
//       { time: "7:00", status: "not working", color: "green" },
//       { time: "8:00", status: "not working", color: "green" },
//       { time: "9:00", status: "not working", color: "grey" },
//       { time: "10:00", status: "not working", color: "grey" },
//       { time: "11:00", status: "not working", color: "grey" },
//       { time: "12:00", status: "not working", color: "grey" },
//       { time: "13:00", status: "not working", color: "grey" },
//       { time: "14:00", status: "not working", color: "grey" },
//       { time: "15:00", status: "not working", color: "grey" },
//     ],
//     [
//       { time: "6:00", status: "available", color: "green" },
//       { time: "7:00", status: "not working", color: "grey" },
//       { time: "8:00", status: "not working", color: "grey" },
//       { time: "9:00", status: "not working", color: "grey" },
//       { time: "10:00", status: "not working", color: "grey" },
//       { time: "11:00", status: "not working", color: "grey" },
//       { time: "12:00", status: "not working", color: "grey" },
//       { time: "13:00", status: "not working", color: "grey" },
//       { time: "14:00", status: "not working", color: "grey" },
//       { time: "15:00", status: "not working", color: "grey" },
//     ],
//     [
//       { time: "6:00", status: "available", color: "green" },
//       { time: "7:00", status: "not working", color: "grey" },
//       { time: "8:00", status: "not working", color: "grey" },
//       { time: "9:00", status: "not working", color: "grey" },
//       { time: "10:00", status: "not working", color: "grey" },
//       { time: "11:00", status: "not working", color: "grey" },
//       { time: "12:00", status: "not working", color: "grey" },
//       { time: "13:00", status: "not working", color: "grey" },
//       { time: "14:00", status: "not working", color: "grey" },
//       { time: "15:00", status: "not working", color: "grey" },
//     ],
//     [
//       { time: "6:00", status: "available", color: "green" },
//       { time: "7:00", status: "not working", color: "grey" },
//       { time: "8:00", status: "not working", color: "grey" },
//       { time: "9:00", status: "not working", color: "grey" },
//       { time: "10:00", status: "not working", color: "grey" },
//       { time: "11:00", status: "not working", color: "grey" },
//       { time: "12:00", status: "not working", color: "grey" },
//       { time: "13:00", status: "not working", color: "grey" },
//       { time: "14:00", status: "not working", color: "grey" },
//       { time: "15:00", status: "not working", color: "grey" },
//     ],
//   ],
// };
