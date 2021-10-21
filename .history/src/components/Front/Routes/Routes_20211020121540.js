import React from 'react'
import MovieListContainer from '../../MovieListContainer/MovieListContainer';
import Movie from '../../Movie/Movie';
import MovieList from '../../MovieList/MovieList';
import { Route, Switch } from 'react-router-dom';
import Signup from '../Signup/Signup';
import ShopCart from '../../NavBar/ShopCart';
import MovieDetail from '../../MovieDetail/MovieDetail';
import MovieDetailContainer from '../../MovieDetailContainer/MovieDetailContainer';


const Routes = ({ movies, cartItems, handleAddProduct }) => {
    return (
        <div>
            <Switch>
                <Route path="/" exact>
                    <MovieListContainer movies={movies} handleAddProduct={handleAddProduct}/>
                </Route>
                <Route path="/signup" exact>
                    <Signup />
                </Route>
                <Route path="/Cart" exact>
                    <ShopCart cartItems={cartItems} handleAddProduct={handleAddProduct}/>
                </Route>
                {/* Esto me rompe todo*/}
                <Route exact path="/Movie/:id">
                    <MovieDetailContainer movies={movies}/>
                </Route>
            </Switch>
        </div>
    )
}

export default Routes;
