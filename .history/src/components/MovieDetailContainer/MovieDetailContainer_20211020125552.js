import React from 'react';
import MovieDetail from './MovieDetailContainer';
import Movie from '../Movie/Movie';

const MovieDetailContainer = ({ movies, data }) => {
    return (
        <div>
            <MovieDetail movies={movies} key={data.id} data={data}/>
        </div>
    )
};

export default MovieDetailContainer
