import './ItemListContainer.css';
import Movie from '../Movie/Movie'

const ItemListContainer = () => {
  return (
    <>
      <h2 className='tituloPeliculas'>Peliculas</h2>
      <div className='moviesContainer'>
        <Movie/>
      </div>
    </>
  )

}

export default ItemListContainer;
