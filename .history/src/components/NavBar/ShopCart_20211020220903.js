import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { CartCtxt } from '../Context/Context';


const ShopCart = () => {

    const { cart, setCart } = useContext(CartCtxt)
    const style = {
        "position": "fixed",
        "top": 0,
        "right": "10vw"
    }

    return (
        <>
            <div style={style} className="cart-items">
                <div className="cart-items-header">Éstos son los productos que agregaste al carrito:</div>

                {
                    (cart.length === 0) ? <div className="cart-items-empty"> No hay productos </div> :

                    cart.map(movie => {
                        return(
                            <div>{movie.id}, {movie.original_title}</div>
                        )
                    })
                }

                {cartItems.length === 0 && (
                    <div className="cart-items-empty"> No hay productos </div>
                )}

            </div>


        </>
    )

}

export default ShopCart;
