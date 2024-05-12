import { Link } from 'react-router-dom'
import logo_image from '../../assets/Images/logo/logo_image.png' // Assuming logo image
import './Header.css'

const HeaderComp = () => {
  return (
    <header className='header-container'>
      <nav>
        <button><Link to={'/'} className='link'>Home Page</Link></button>
        <button><Link to={'/login'} className='link'>Login</Link></button>
      </nav>
      <p className='heading'>Best place to study</p>
      <img className='logo' src={logo_image} alt='Company Logo' />
    </header>
  )
}

export default HeaderComp

