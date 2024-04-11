import PropTypes from 'prop-types';
import './WatchedSummaryStyle.css';

const average = (arr) => {
  arr.reduce((acc, cur, i, array) => acc + cur / array.length, 0);
};

function WatchedSummary({ watched }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating?.toFixed(2)}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime?.toFixed(2)} min</span>
        </p>
      </div>
    </div>
  );
}

WatchedSummary.propTypes = {
  watched: PropTypes.array,
};

export default WatchedSummary;
