import { Link } from 'react-router-dom'
import logo_image from '../../assets/Images/logo/logo_image.png' // Assuming logo image
import './Header.css'

const HeaderComp = () => {
  return (
    <header className='header-container'>
      <nav>
        <button><Link to={'/'} className='link'>דף הבית</Link></button>
        <button><Link to={'/login'} className='link'>להתחברות/הרשמה</Link></button>
        <button><Link to={'/About'} className='link'> קצת על המערכת שלנו</Link></button>
      </nav>
      <p className='heading'>  מערכת לימודים מותאמת אישית </p>
      <img className='logo' src={logo_image} alt='Company Logo' />
    </header>
  )
}

export default HeaderComp
