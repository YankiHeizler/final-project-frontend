import React from 'react'
import StudentLoginComp from '../../Components/Login/StudentLoginConp/StudentLoginComp'

const TestPage = () => {
  return (
   <>
   <div>ffxgdxgfh</div>
   {/* <StudentLoginComp/> */}
   <form id="selectionForm">
        <label for="options">בחר אפשרויות:</label>
        <select id="options" name="options" multiple>
            <option value="option1">אפשרות 1</option>
            <option value="option2">אפשרות 2</option>
            <option value="option3">אפשרות 3</option>
        </select>
        <input type="submit" value="שלח" />
    </form>
    <p id="selectedValue">בחרת: </p>

   </>
  )
}

export default TestPage