import React from 'react';

function FetchMovieList {
    state = {
        loading: true
    };

    async componentDidMount () {
        const url = 'https://api.themoviedb.org/3/movie/popular?api_key=cab5bdeb651360393b69a33b4e91eeb2&language=en-US&page=1';
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    }
    
    return (
        <div>
            {this.state.loading ? <div>loading...</div> :}
        </div>
    )
}