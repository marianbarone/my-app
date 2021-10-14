import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MiNavBar from './components/NavBar/MiNavBar';
import MovieListContainer from './components/MovieListContainer/MovieListContainer';
import { BrowserRouter as Router } from 'react-router-dom';
import MovieList from './components/MovieList/MovieList';
import Routes from './components/Front/Routes/Routes';

function App() {

  const {movie} = MovieList;
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <MiNavBar />
      <Routes movie={movie} cartItems={cartItems}/>

    </Router>
  )
}
export default App;
