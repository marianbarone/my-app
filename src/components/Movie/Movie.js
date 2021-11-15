import "./Movie.css"
import ItemCount from '../ItemCount/ItemCount';
import { LinkContainer } from 'react-router-bootstrap';
import { useContext } from 'react';
import { CartCtxt } from '../Context/Context';


const Movie = ({ movie }) => {

  const { addMovie } = useContext(CartCtxt)

  // const [count, setCount] = useState(ItemCount)

  const onAdd = (cantidad) => {
      
    const item_para_agregar = {
      item : movie ,
      quantity : cantidad
    }

    addMovie(item_para_agregar)
  
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
            <ItemCount stock={movie.stock} onAdd={onAdd}/>
            <h5 className="precioProducto">$ {movie.price}</h5>
            <LinkContainer to={`/MovieDetailContainer/${movie.id}`}>
              <button className="button-59">Ver detalle</button>        
            </LinkContainer>
            <button className="css-button-shadow--blue" onClick={() => addMovie(movie)}> Agregar al carrito </button>
          </div>
      }
    </>
  )

}

export default Movie;