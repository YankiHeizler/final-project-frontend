import React from 'react'

const TestPage = () => {
  return (
    <form>
  <label>בחר משהו:</label>
  <select id="selection">
    <option > לא נבחר</option>
    <option >אופציה 1</option>
    <option value="option2">אופציה 2</option>
    <option value="option3">אופציה 3</option>
  </select>
</form>
  )
}

export default TestPage