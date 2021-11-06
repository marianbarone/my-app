import './MovieListContainer.css';
import MovieList from '../MovieList/MovieList';
import { useEffect, useState } from "react";
import { getFirestore } from "../../Firebase/firebase";
import ItemCount from '../ItemCount/ItemCount';

const MovieListContainer = () => {

  const [movies, setMovies] = useState ([])

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("Movies");
    itemCollection.get().then((querySnapshot) => {
      if(querySnapshot.size===0) {
        console.log('No hay resultados');
      }
      setMovies(querySnapshot.docs.map(doc => doc.data()));
    })

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
