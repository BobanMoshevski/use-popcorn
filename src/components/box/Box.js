import { useState } from 'react';
import PropTypes from 'prop-types';
import './BoxStyle.css';

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? '–' : '+'}
      </button>
      {isOpen && children}
    </div>
  );
}

Box.propTypes = {
  children: PropTypes.any,
};

export default Box;
