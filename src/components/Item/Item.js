import './Item.css';
import ItemCount from '../ItemCount/ItemCount';
import TheDarkKnightRises from './TheDarkKnightRises.jpg'
// import Movies from '../Movies/Movies'
import moviesTitle from '../Movies/Movies'


const Item = () => {
  return (
    <>
      <div className="card">
        <img className="imgProducto" src={TheDarkKnightRises} alt="The Dark Knight Rises"></img>
        <h4 className="nombreProducto">{moviesTitle}</h4>
        <h6 className="year">YEAR: 2012</h6>
        <h6 className="IMDB">8.4 IMDB | 8.6 Rotten Tomatoes</h6>
        <h6 className="cantidad">Cantidad</h6>
        <ItemCount />
        <h5 className="precioProducto">$ 20</h5>
      </div>
    </>
  )

}

export default Item;