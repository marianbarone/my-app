import React from 'react'
import MovieListContainer from '../../MovieListContainer/MovieListContainer';
import { Route, Switch } from 'react-router-dom';
import Signup from '../Signup/Signup';
import ShopCart from '../../NavBar/ShopCart';
import MovieDetail from '../../MovieDetail/MovieDetail';
import MovieDetailContainer from '../../MovieDetailContainer/MovieDetailContainer';


const Routes = ({ movies }) => {
    return (
        <div>
            <Switch>
                <Route path="/" exact>
                    <MovieListContainer movies={movies} />
                </Route>
                <Route path="/signup" exact>
                    <Signup />
                </Route>
                <Route path="/Cart" exact>
                    <ShopCart />
                </Route>
                {/* Esto me rompe todo*/}
                <Route exact path="/MovieDetail/:id">
                    <MovieDetailContainer movies={movies}/>
                </Route>
            </Switch>
        </div>
    )
}

export default Routes;
