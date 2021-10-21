import './MovieListContainer.css';
import MovieList from '../MovieList/MovieList'

const MovieListContainer = () => {
  return (
    <>
      <h2 className='tituloPeliculas'>Peliculas</h2>
      <div className='moviesContainer'>
        <MovieList/>
      </div>
    </>
  )

}

export default MovieListContainer;
