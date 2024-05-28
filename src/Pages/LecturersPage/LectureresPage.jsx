import React, { useEffect, useState } from 'react'

const LectureresPage = () => {
  const [lecturer, setLecturers] = useState([]);

  function handleClick() {

  }

  useEffect(() => {
    setLecturers(['Moishe', 'Ezra', 'Havatzlets']);
    // TODO: fetch lectureres list and display to the user.

  }, []);

  return (
    <div>LectureresPage</div>
  )
}

export default LectureresPage