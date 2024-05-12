
const LoginFormComp = () => {
  return (
    <form >
    <label for="fname"> שם משתמש :</label><br/>
    <input type="text" id="fname" name="fname"  / ><br/>
    <label for="lname"> סיסמה :</label><br/>
    <input type="text" id="lname" name="lname"  / ><br/><br/>
    <input type="submit" value="Submit" / >
    </form>
  )
}

export default LoginFormComp