import React, {useState, useEffect} from 'react'
import Movie from '../Movie/Movie'
import './MovieList.css'

function MovieList () {
    const [movies, setMovies] = useState ([])

    useEffect (() => {
        async function fetchMovies() {
            const url = 'https://api.themoviedb.org/3/movie/popular?api_key=cab5bdeb651360393b69a33b4e91eeb2&language=en-US&page=1';
            const response = await fetch(url);
            const data = await response.json();
            const movies = data.results;
            console.log(data);
            console.log(data.results);
            setMovies(movies);
        }
        fetchMovies();
    },[]);

    return (
        <ul>
            {
                movies.map(data => <Movie key={data.id} data={data} />)
            }
        </ul>
    );
}

export default MovieList;