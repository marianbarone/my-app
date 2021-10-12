import './MovieDetail.css';
import ItemCount from '../ItemCount/ItemCount';
// import Movie from '../Movie/Movie';

const MovieDetail = ({data}) => {
  return (
    <>
      {
        <div key={data.id} className="movieDetail">
          <div className="seccionImg">
            <img img className="imgProducto" src={data.poster} alt={data.title}></img>
          </div>
          <div className='seccionData'>
            <h4 className="nombreProducto">{data.title}</h4>
            <h6 className="year">YEAR: {data.year}</h6>
            <h6 className="IMDB">{data.rating} IMDB </h6>
            <h6 className="cantidad">Cantidad</h6>
            <ItemCount />
            <h5 className="precioProducto">$ {data.precio}</h5>
          </div>
        </div>
      }
    </>
  )

}

export default MovieDetail;