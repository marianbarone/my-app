import './MovieDetail.css';
import { useContext, useState } from 'react';
import { CartCtxt } from '../Context/Context';
import ItemCount from '../ItemCount/ItemCount';

const MovieDetail = ({ movie }) => {

  const { cart, setCart } = useContext(CartCtxt)

    console.log(cart);

  // const [count, setCount] = useState(ItemCount)

  const addToCart = (movie) => {

    console.log(data);
      
    setCart([
      ...cart,
      movie
    ])
  }


  return (
    <>
      {
        <div className="movieDetail">
          <div className="seccionImg">
            <img className="imgProducto" src={movie.img} alt={movie.title}></img>
          </div>
          <div className='seccionData'>
            <h4 className="nombreProducto">{movie.title}</h4>
            <h6 className="year">Release Date: {movie.year}</h6>
            <h6 className="IMDB">{movie.rating} IMDB </h6>
            <h6 className="cantidad">Cantidad</h6>
            <ItemCount stock={movie.stock}/>
            <h5 className="precioProductoDetail">$ {movie.price}</h5>
            <button className="add-product" onClick={() => addToCart(movie)}> Agregar al carrito </button>

          </div>

        </div>
      }
    </>
  )

}

export default MovieDetail;