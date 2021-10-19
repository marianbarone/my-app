import './Movie.css';
import ItemCount from '../ItemCount/ItemCount';
import {LinkContainer} from 'react-router-bootstrap';


const Movie = ({ MovieList, handleAddProduct }) => {
  return (
    <>
      {
        <LinkContainer to={"../MovieDetail/MovieDetail:data.id"}>
          <div key={MovieList.id} className="card">
            <img className="imgProducto" src={MovieList.poster_path} alt={MovieList.original_title}></img>
            <h4 className="nombreProducto">{MovieList.original_title}</h4>
            <h6 className="year">Release Date: {MovieList.release_date}</h6>
            <h6 className="IMDB">{MovieList.vote_average} IMDB </h6>
            <h6 className="cantidad">Cantidad</h6>
            <ItemCount />
            <h5 className="precioProducto">$ {MovieList.vote_count}</h5>
            <button ClassName="add-product" onClick={() => handleAddProduct(MovieList)}> Agregar al carrito </button>
          </div>
        </LinkContainer>

      }
    </>
  )

}

export default Movie;