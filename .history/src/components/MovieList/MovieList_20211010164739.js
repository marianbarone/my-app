import React, {useState, useEffect} from 'react'
import Movie from '../Movie/Movie'
import './MovieList.css'

function MovieList () {
    const [movies, setMovies] = useState (null)
    // const moviesdb = [
    //     {id: 0, title:"Batman Begins",poster:"https://cartelesmix.es/images/CartelesB/batmanbegins/poster026.jpg", year:"2008", rating:"8.4", precio: 950},
    //     {id: 1, title:"The Dark Knight",poster:"https://m.media-amazon.com/images/I/91KkWf50SoL._SL1500_.jpg", year:"2010", rating:"8.4", precio:1450},
    //     {id: 2, title:"The Dark Knight Rises",poster:"https://images-na.ssl-images-amazon.com/images/S/pv-target-images/8e6252ba952578d207d2613179aede06a515dfc8c61e346fcfb44fef45a92840._RI_V_TTW_.jpg", year:"2012", rating:"8.4", precio:400},
    //     {id: 3, title:"Matrix", poster:"https://www.cartelera.com.uy/imagenes_espectaculos/moviedetail13/29638.jpg", year:"2012", rating:"8.4", precio:420},
    //     {id: 4, title:"Matrix Reloaded",poster:"https://www.ecartelera.com/carteles/5200/5270/001_m.jpg", year:"2012", rating:"8.4", precio:750},
    //     {id: 5, title:"Matrix Revolutions",poster:"https://images-na.ssl-images-amazon.com/images/S/pv-target-images/1d6602f3f461dd2ed960545899b128c4e5c2c9e0e3f898a2594d4fb96699f155._RI_V_TTW_.jpg", year:"2012", rating:"8.4", precio:750},
    // ];


    useEffect (() => {
        async function fetchMovies() {
            const url = 'https://api.themoviedb.org/3/movie/popular?api_key=cab5bdeb651360393b69a33b4e91eeb2&language=en-US&page=1';
            const response = await fetch(url);
            const data = await response.json();
            const [movie] = data.results;
            console.log(data.results);
            setMovies(movie);
        }
        fetchMovies();
    },[]);

    // useEffect(() => {
    //     const GetMovies = () => {
    //         return new Promise((resolve, reject) => {
    //             setTimeout (()=>{
    //                 resolve (MovieList);
    //             },2000)
    //         })
    //     }
    
    //     async function fetchMovies (){
    //         const moviesFetched = await GetMovies();
    //         return moviesFetched;
    //     }
    
    //     fetchMovies(setMovies);
    // }, [movies])
    
    // const GetMovies = () => {
    //     return new Promise((resolve, reject) => {
    //         setTimeout (()=>{
    //             resolve (MovieList);
    //         },2000)
    //     })
    // }

    // async function fetchMovies (){
    //     const moviesFetched = await GetMovies();
    //     return moviesFetched;
    // }

    // fetchMovies();

    return (
        <ul>
            {
                movies.map(data => <Movie data={data} />)
            }
        </ul>
    );
}

export default MovieList;