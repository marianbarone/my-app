import React from 'react'
import MovieListContainer from '../../MovieListContainer/MovieListContainer';
import { Route, Switch } from 'react-router-dom';

const Routes = ({movies}) => {
    return (
        <div>
            <Switch>
                <Route path="/" exact>
                    <MovieListContainer movies={movies}/>
                </Route>
            </Switch>
        </div>
    )
}

export default Routes;
