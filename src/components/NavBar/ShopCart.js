import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { CartCtxt } from '../Context/Context';
import './ShopCart.css'


const ShopCart = () => {

    const { cart, removeItem } = useContext(CartCtxt)

    return (
        <>
            <div className="cart-items">
                <div className="cart-items-header">Éstos son los productos que agregaste al carrito:</div>

                {
                    (cart.length === 0) ? <div className="cart-items-empty"> No hay productos </div> :

                    cart.map(movie => {
                        return(
                            <div className='items' key={movie.id}>
                                <p className='movieTitle'>{movie.title} x {movie.stock} - $ {movie.price * movie.stock}</p>
                                <button className='button-4' onClick={() => removeItem(movie)}>Eliminar</button>
                            </div>
                        )
                    })
                }

            </div>


        </>
    )

}

export default ShopCart;
