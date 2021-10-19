import './Movie.css';
import ItemCount from '../ItemCount/ItemCount';
import {LinkContainer} from 'react-router-bootstrap';


const Movie = ({ movieList, handleAddProduct }) => {
  return (
    <>
      {
        <LinkContainer to={"../MovieDetail/MovieDetail:data.id"}>
          <div key={movieList.id} className="card">
            <img className="imgProducto" src={movieList.poster_path} alt={movieList.original_title}></img>
            <h4 className="nombreProducto">{movieList.original_title}</h4>
            <h6 className="year">Release Date: {movieList.release_date}</h6>
            <h6 className="IMDB">{movieList.vote_average} IMDB </h6>
            <h6 className="cantidad">Cantidad</h6>
            <ItemCount />
            <h5 className="precioProducto">$ {movieList.vote_count}</h5>
            <button ClassName="add-product" onClick={() => handleAddProduct(movieList)}> Agregar al carrito </button>
          </div>
        </LinkContainer>

      }
    </>
  )

}

export default Movie;