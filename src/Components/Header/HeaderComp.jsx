import logo_image from '../../assets/Images/logo/logo_image.png' // Assuming logo image
import './Header.css'
import { useNavigate } from "react-router-dom";
// const token = localStorage.getItem('token');
import { Grid } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

// console.log(token);
localStorage.clear();
const HeaderComp = () => {
  let navigate = useNavigate(); 

  const routeChange = (path) =>{ 
    navigate(path);
  };

  return (
    <header className='header-container'>
      <>
      <p className='heading'>  מערכת לימודים מותאמת אישית </p>
      <img className='logo' src={logo_image} alt='Company Logo' />

      <Stack spacing={2} direction="row" sx={{
         width: '100%' ,borderBottom: 1, borderColor: 'divider' ,color:"#2e2e55",fontSize:"20px",justifyContent:"center"}}>
        <Grid sx={{minWidth:"300px",fontStyle:"bold",borderBottom:"2px #2886ab solid",':hover':{borderBottom:"2px purple solid"}}} columns={3}><Button sx={{fontSize:"22px",fontWeight:"bold"}} onClick={()=>{routeChange('/scheduler')}} variant="איזור אישי תלמיד">איזור אישי תלמיד</Button></Grid>
        <Grid sx={{minWidth:"300px",fontStyle:"bold",borderBottom:"2px #2886ab solid",':hover':{borderBottom:"2px purple solid"}}} columns={3}><Button sx={{fontSize:"22px",fontWeight:"bold"}} onClick={()=>{routeChange('/login')}} variant="להתחברות/הרשמה">להתחברות/הרשמה</Button></Grid>
        <Grid sx={{minWidth:"300px",fontStyle:"bold",borderBottom:"2px #2886ab solid",':hover':{borderBottom:"2px purple solid"}}} columns={3}><Button sx={{fontSize:"22px",fontWeight:"bold"}} onClick={()=>{routeChange('/About')}} variant="קצת על המערכת שלנו">קצת על המערכת שלנו</Button></Grid>
        <Grid sx={{minWidth:"300px",fontStyle:"bold",borderBottom:"2px #2886ab solid",':hover':{borderBottom:"2px purple solid"}}} columns={3}><Button sx={{fontSize:"22px",fontWeight:"bold"}} onClick={()=>{routeChange('/')}} variant="דף הבית">דף הבית</Button></Grid>
      </Stack>
      </>
    </header>
  )
}

export default HeaderComp
