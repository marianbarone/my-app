import "./Movie.css"
import ItemCount from '../ItemCount/ItemCount';
import { LinkContainer } from 'react-router-bootstrap';
import { useContext, useState } from 'react';
import { CartCtxt } from '../Context/Context';


const Movie = ({ movie }) => {

  const { cart, setCart } = useContext(CartCtxt)

  console.log(cart);

  const [count, setCount] = useState(ItemCount)

  const addToCart = (data) => {

    console.log(data);
      
    // setCart([
    //   ...cart,
    //   data
    // ])
  }


  return (
    <>
      {
          <div key={movie.id} className="card">
            <img className="imgProducto" src={movie.img} alt={movie.title}></img>
            <h4 className="nombreProducto">{movie.title}</h4>
            <h6 className="year">Release Date: {movie.year}</h6>
            <h6 className="IMDB">{movie.rating} IMDB </h6>
            <h6 className="cantidad">Cantidad</h6>
            <ItemCount />
            <h5 className="precioProducto">$ {movie.price}</h5>
            <LinkContainer to={`/Movie/${movie.id}`}>
              <button className="verDetalle">Ver detalles</button>        
            </LinkContainer>
            <button className="add-product" onClick={() => addToCart(movie)}> Agregar al carrito </button>
          </div>
      }
    </>
  )

}

export default Movie;