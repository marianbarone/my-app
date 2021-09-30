import './ItemListContainer.css';
import Item from '../Item/Item'

const ItemListContainer = () => {
  return (
    <>
      <h2 className='tituloPeliculas'>Peliculas</h2>
      <div className='moviesContainer'>
        <Item/>
        <Item/>
      </div>
    </>
  )

}

export default ItemListContainer;
