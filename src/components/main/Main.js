import PropTypes from 'prop-types';
import './MainStyle.css';

function Main({ children }) {
  return <main className="main">{children}</main>;
}

Main.propTypes = {
  children: PropTypes.any,
};

export default Main;
