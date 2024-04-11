import PropTypes from 'prop-types';
import Logo from '../logo/Logo';
import './NavBarStyle.css';

function NavBar({ children }) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}

NavBar.propTypes = {
  children: PropTypes.any,
};

export default NavBar;
