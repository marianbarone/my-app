import React from 'react'
import MovieListContainer from '../../MovieListContainer/MovieListContainer';
import Movie from '../../Movie/Movie';
import { Route, Switch } from 'react-router-dom';
import Signup from '../Signup/Signup';
import ShopCart from '../../NavBar/ShopCart';


const Routes = ({ movieList, cartItems, handleAddProduct }) => {
    return (
        <div>
            <Switch>
                <Route path="/" exact>
                    <MovieListContainer movieList={movieList} handleAddProduct={handleAddProduct}/>
                </Route>
                <Route path="/signup" exact>
                    <Signup />
                </Route>
                <Route path="/Cart" exact>
                    <ShopCart cartItems={cartItems} handleAddProduct={handleAddProduct}/>
                </Route>
            </Switch>
        </div>
    )
}

export default Routes;
