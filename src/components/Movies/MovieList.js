import React from 'react'

function MovieList () {
    const moviesdb = [
        {id: 0, title:"Batman Begins",poster:"https://pics.filmaffinity.com/Batman_Begins-413277928-large.jpg", year:"2008", rating:"8.4", precio: 950},
        {id: 1, title:"The Dark Knight",poster:"https://m.media-amazon.com/images/I/91KkWf50SoL._SL1500_.jpg", year:"2010", rating:"8.4", precio:1450},
        {id: 2, title:"The Dark Knight Rises",poster:"https://images-na.ssl-images-amazon.com/images/S/pv-target-images/8e6252ba952578d207d2613179aede06a515dfc8c61e346fcfb44fef45a92840._RI_V_TTW_.jpg", year:"2012", rating:"8.4", precio:400},
        {id: 3, title:"Matrix", poster:"https://static.wikia.nocookie.net/doblaje/images/7/7a/Matrix.jpg/revision/latest?cb=20210703005220&path-prefix=es", year:"2012", rating:"8.4", precio:420},
        {id: 4, title:"Matrix Reloaded",poster:"https://www.ecartelera.com/carteles/5200/5270/001_m.jpg", year:"2012", rating:"8.4", precio:750},
        {id: 5, title:"Matrix Revolutions",poster:"https://pics.filmaffinity.com/Matrix_Revolutions-289564524-large.jpg", year:"2012", rating:"8.4", precio:750},
    ];

    // const moviesTitle = data.map(movie => <Movies movie={movie.title}/>)
    // console.log(moviesTitle);
  
    return (
        <ul>
            {
                // moviesdb.map(data => <Movie data={data} />)
                moviesdb.map(data => console.log(data));
                console.log(data);
            }
        </ul>
    );
}

export default MovieList;