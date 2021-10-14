import React from 'react'
import MovieListContainer from '../../MovieListContainer/MovieListContainer';
import { Route, Switch } from 'react-router-dom';
import Signup from '../Signup/Signup';
import ShopCart from '../../NavBar/ShopCart';


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
                    <ShopCart cartItems={cartItems}/>
                </Route>
            </Switch>
        </div>
    )
}

export default Routes;
