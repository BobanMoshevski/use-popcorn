import PropTypes from 'prop-types';
import WatchedMovie from '../watchedMovie/WatchedMovie';

function WatchedMoviesList({ watched, onDeleteWathed }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          key={movie.imdbID}
          movie={movie}
          onDeleteWathed={onDeleteWathed}
        />
      ))}
    </ul>
  );
}

WatchedMoviesList.propTypes = {
  watched: PropTypes.array,
  onDeleteWathed: PropTypes.func,
};

export default WatchedMoviesList;
