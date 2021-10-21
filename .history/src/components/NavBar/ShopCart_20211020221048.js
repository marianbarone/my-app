import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { CartCtxt } from '../Context/Context';


const ShopCart = (data) => {

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

                    cart.map(data => {
                        return(
                            <div>{data.id}, {data.original_title}</div>
                        )
                    })
                }

            </div>


        </>
    )

}

export default ShopCart;
