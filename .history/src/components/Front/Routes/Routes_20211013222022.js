import React from 'react'
import MovieListContainer from '../../MovieListContainer/MovieListContainer';
import { Route, Switch } from 'react-router-dom';

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact>
                    <MovieListContainer />
                </Route>
            </Switch>
        </div>
    )
}

export default Routes;
