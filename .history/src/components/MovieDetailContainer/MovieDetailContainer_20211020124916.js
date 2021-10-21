import React from 'react';
import MovieDetail from './MovieDetailContainer';

const MovieDetailContainer = (movies) => {
    return (
        <div>
            <MovieDetail movies={movies}/>
        </div>
    )
}

export default MovieDetailContainer
