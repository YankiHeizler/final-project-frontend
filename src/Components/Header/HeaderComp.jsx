import logo_image from '../../assets/Images/logo/logo_image.png'; // Assuming logo image
import './Header.css';
import { useNavigate } from "react-router-dom";
import { Grid } from '@mui/material';
import Stack from '@mui/material/Stack';

localStorage.clear();

const HeaderComp = () => {
  let navigate = useNavigate(); 

  const routeChange = (path) => { 
    navigate(path);
  };

  return (
    <header className='header-container'>
      <>
        <h1 className='heading'>מערכת לימודים מותאמת אישית</h1>
        <div className="logo-container">
          <img className='logo' src={logo_image} alt='Company Logo'  style={{ display: 'block', margin: 'auto' }} />
        </div>
        <Stack spacing={2} direction="row" sx={{
          width: '100%',
          borderBottom: 1,
          borderColor: 'divider',
          color: "#2e2e55",
          fontSize: "200px",
          justifyContent: "center",
          marginTop: "2px"
        }}>
          <Grid sx={{ display: "flex", justifyContent: "center", minWidth: "300px", fontStyle: "bold", borderBottom: "2px #2886ab solid", ':hover': { borderBottom: "2px purple solid" }}} columns={3}>
            <div className="link" onClick={() => { routeChange('/scheduler') }}>
            <span role="img" aria-label="login">👨‍🎓</span> 
              איזור אישי
            </div>
          </Grid>
          <Grid sx={{ display: "flex", justifyContent: "center", minWidth: "300px", fontStyle: "bold", borderBottom: "2px #2886ab solid", ':hover': { borderBottom: "2px purple solid" }}} columns={3}>
            <div className="link" onClick={() => { routeChange('/login') }}>
              <span role="img" aria-label="login">🔑</span> להתחברות/הרשמה
            </div>
          </Grid>
          <Grid sx={{ display: "flex", justifyContent: "center", minWidth: "300px", fontStyle: "bold", borderBottom: "2px #2886ab solid", ':hover': { borderBottom: "2px purple solid" }}} columns={3}>
            <div className="link" onClick={() => { routeChange('/About') }}>
              <img src={logo_image} alt="Company Logo" style={{ width: "32px", height: "32px", marginRight: "10px" }} />
              קצת על המערכת שלנו
            </div>
          </Grid>
          <Grid sx={{ display: "flex", justifyContent: "center", minWidth: "300px", fontStyle: "bold", borderBottom: "2px #2886ab solid", ':hover': { borderBottom: "2px purple solid" }}} columns={3}>
            <div className="link" onClick={() => { routeChange('/') }}>
              <span role="img" aria-label="home">🏠</span> דף הבית
            </div>
          </Grid>
        </Stack>
      </>
    </header>
  );
}

export default HeaderComp;
