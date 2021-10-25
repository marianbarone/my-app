import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MiNavBar from './components/NavBar/MiNavBar';
import MovieListContainer from './components/MovieListContainer/MovieListContainer';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/Front/Routes/Routes';
import CartContext from './components/Context/Context';

function App() => {

  return (
    <CartContext>
      <Router>
        <MiNavBar />
        <Routes MovieListContainer={MovieListContainer} MovieDetailContainer={MovieDetailContainer}/* cartItems={cartItems} handleAddProduct={handleAddProduct} *//>
      </Router>
    </CartContext>

  )
}

export default App;