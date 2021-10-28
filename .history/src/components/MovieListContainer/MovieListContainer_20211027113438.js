import './MovieListContainer.css';
import MovieList from '../MovieList/MovieList';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../Firebase/firebase";

const MovieListContainer = (movies) => {

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemCollection = db.collection("Movies");
    itemCollection.get().then((querySnapshot) => {
      if(querySnapshot.size===0) {
        console.log('No hay resultados');
      }
      setMovies(querySnapshot.docs.map(doc => doc.data()));
    }).catch((error) => {
      console.log("error", error);
    }).finally(() => {
      setLoading(false);
    });

  },[]);

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
