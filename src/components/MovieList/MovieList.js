import React from 'react'
import Movie from '../Movie/Movie'
import './MovieList.css'

const MovieList = ({movies}) => {

    return ( 
        <div id="movie-list">
            {movies.map(movie=>{
                return (
                    <Movie key={movie.id} movie={movie} stock={movie.stock} />
                )
            })}
        </div>
     );
}

export default MovieList;