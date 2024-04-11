import PropTypes from 'prop-types';
import './ErrorMessageStyle.css';

function ErrorMessage({ message }) {
  return (
    <p className="error">
      <span>⛔</span> {message}
    </p>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

export default ErrorMessage;
