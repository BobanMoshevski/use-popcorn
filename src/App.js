import { useState } from 'react';
import { useMovies } from './util/useMovies/useMovies';
import { useLocalStorageState } from './util/useLocalStorage/useLocalStorageState';
import NavBar from './components/navBar/NavBar';
import Search from './components/search/Search';
import NumResults from './components/numResults/NumResults';
import Main from './components/main/Main';
import Box from './components/box/Box';
import Loader from './components/loader/Loader';
import MovieList from './components/moviesList/MoviesList';
import ErrorMessage from './components/errorMessage/ErrorMessage';
import MovieDetails from './components/movieDetails/MovieDetails';
import WatchedSummary from './components/watchedSummary/WatchedSummary';
import WatchedMoviesList from './components/watchedMoviesList/WatchedMoviesList';

function App() {
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState(null);

  const { movies, isLoading, error } = useMovies(query);
  const [watched, setWatched] = useLocalStorageState([], 'watched');
  const apiKey = process.env.REACT_APP_API_KEY;

  function handleSelecteMovie(id) {
    setSelectedId((prevState) => (id === prevState ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatched(movie) {
    setWatched((prevState) => [...prevState, movie]);
  }

  function handleDeleteWatched(id) {
    setWatched((prevState) => prevState.filter((movie) => movie.imdbID !== id));
  }

  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelecteMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
              apiKey={apiKey}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList
                watched={watched}
                onDeleteWathed={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}

export default App;
