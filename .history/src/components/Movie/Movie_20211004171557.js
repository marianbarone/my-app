import './Movie.css';
import ItemCount from '../ItemCount/ItemCount';
// import Movie from '../Movie/Movie';

const Movie = ({data}) => {
  return (
    <>
      {
        <div className="card">
          <img className="imgProducto" src={data.poster} alt={data.title}></img>
          <h4 className="nombreProducto">{data.title}</h4>
          <h6 className="year">YEAR: {data.year}</h6>
          <h6 className="IMDB">{data.rating} IMDB </h6>
          <h6 className="cantidad">Cantidad</h6>
          <ItemCount />
          <h5 className="precioProducto">$ {data.precio}</h5>
        </div>
      }
    </>
  )

}

export default Movie;