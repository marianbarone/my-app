import './MovieListContainer.css';
import MovieList from '../MovieList/MovieList';
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import { firestore } from "../firebase";

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
