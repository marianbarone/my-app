import React from 'react';
import MovieDetail from './MovieDetailContainer';
import Movie from '../Movie/Movie';

const MovieDetailContainer = ({ data }) => {
    return (
        <div>
            <MovieDetail data={data}/>
        </div>
    )
};

export default MovieDetailContainer
