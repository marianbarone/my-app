import React from 'react'
import MovieListContainer from '../../MovieListContainer/MovieListContainer';
import { Route, Switch } from 'react-router-dom';
import Signup from '../Signup/Signup';

const Routes = ({movies}) => {
    return (
        <div>
            <Switch>
                <Route path="/" exact>
                    <MovieListContainer movies={movies}/>
                </Route>
                <Route path="/signup" exact>
                    <Signup />
                </Route>
            </Switch>
        </div>
    )
}

export default Routes;
