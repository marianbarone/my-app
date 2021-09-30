import React from 'react'

function Movies () {
    const data = [
        {id: 0, title:"Batman Begins",poster:"url", year:"2012", rating:"8.4", precio: 950},
        {id: 1, title:"The Dark Knight",poster:"url", year:"2012", rating:"8.4", precio:1450},
        {id: 2, title:"The Dark Knight Rises",poster:"url", year:"2012", rating:"8.4", precio:400},
        {id: 3, title:"Matrix", poster:"url", year:"2012", rating:"8.4", precio:420},
        {id: 4, title:"Matrix Reloaded",poster:"url", year:"2012", rating:"8.4", precio:750},
        {id: 4, title:"Matrix Revolutions",poster:"url", year:"2012", rating:"8.4", precio:750},
    ];

    const moviesTitle = data.map(movie => <Movies movie={movie.title}/>)
    console.log(moviesTitle);
  
    return (
        <div>
            {moviesTitle}
        </div>
    );
}

export default Movies;