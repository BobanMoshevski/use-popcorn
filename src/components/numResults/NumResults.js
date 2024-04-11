import PropTypes from 'prop-types';
import './NumResultsStyle.css';

function NumResults({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}

NumResults.propTypes = {
  movies: PropTypes.array,
};

export default NumResults;
