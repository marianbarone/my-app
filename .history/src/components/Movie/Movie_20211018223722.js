import './Movie.css';
import ItemCount from '../ItemCount/ItemCount';
import {LinkContainer} from 'react-router-bootstrap';


const Movie = ({ movies, handleAddProduct }) => {
  return (
    <>
      {
        <LinkContainer to={"../MovieDetail/MovieDetail:data.id"}>
          <div key={movies.id} className="card">
            <img className="imgProducto" src={movies.poster_path} alt={movies.original_title}></img>
            <h4 className="nombreProducto">{movies.original_title}</h4>
            <h6 className="year">Release Date: {movies.release_date}</h6>
            <h6 className="IMDB">{movies.vote_average} IMDB </h6>
            <h6 className="cantidad">Cantidad</h6>
            <ItemCount />
            <h5 className="precioProducto">$ {movies.vote_count}</h5>
            <button ClassName="add-product" onClick={() => handleAddProduct(movies)}> Agregar al carrito </button>
          </div>
        </LinkContainer>

      }
    </>
  )

}

export default Movie;