import React from 'react';

function FetchMovieList {
    state = {
        loading: true,
        movie: null,
    };

    async componentDidMount () {
        const url = 'https://api.themoviedb.org/3/movie/popular?api_key=cab5bdeb651360393b69a33b4e91eeb2&language=en-US&page=1';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({movie: data.results, loading: false })
        console.log(data.results);
    }
    
    return (
        <div>
            {this.state.loading ? <div>loading...</div> :         
                <ul>
                    {
                        moviesdb.map(data => <Movie data={data} />)
                    }
                </ul>}
        </div>
    )
}