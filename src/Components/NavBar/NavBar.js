import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';

const NavBar = () => {
  return (
    <nav className='nav'>
      <Logo />
      <div className='nav-cntnr'>
        <NavLink className='nav-link' to='/'>
          Home
        </NavLink>
        <NavLink className='nav-link' to='/experience'>
          Experience
        </NavLink>

        <NavLink className='nav-link' to='/projects'>
          Project
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
