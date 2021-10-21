import './MovieListContainer.css';
import MovieList from '../MovieList/MovieList'

const MovieListContainer = (movies) => {
  return (
    <>
      <h2 className='tituloPeliculas'>Peliculas</h2>
      <div className='moviesContainer'>
        <MovieList movies={movies}/>
      </div>
    </>
  )

}

export default MovieListContainer;
