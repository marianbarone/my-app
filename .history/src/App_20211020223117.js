import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MiNavBar from './components/NavBar/MiNavBar';
import MovieListContainer from './components/MovieListContainer/MovieListContainer';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/Front/Routes/Routes';
import CartContext from './components/Context/Context';

function App() {

  // const { MovieList } = MovieListContainer;
  // console.log(MovieListContainer);
  // const [cartItems, setCartItems] = useState([]);
  // const handleAddProduct = (movie) => {
  //   const ProductExist = cartItems.find((item) => item.id === movie.id);
  //   if (ProductExist) {
  //     setCartItems(
  //       cartItems.map((item) =>
  //        item.id === movie.id 
  //         ? {...ProductExist, quantity: ProductExist.quantity +1}
  //         : item
  //       )
  //     );
  //   }
  //   else {
  //     setCartItems ([...cartItems, { ...movie, quantity: 1 }]);
  //   }
  // }

  return (
    <CartContext>
      <Router>
        <MiNavBar />
        <Routes MovieListContainer={MovieListContainer} /* cartItems={cartItems} handleAddProduct={handleAddProduct} *//>
      </Router>
    </CartContext>

  )
}

export default App;
