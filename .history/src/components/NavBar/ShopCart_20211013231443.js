import 'bootstrap/dist/css/bootstrap.min.css';


const ShopCart = ({ cartItems }) => {
    return (
        <>
            <div className="cart-items">
                <div className="cart-items-header">Éstos son los productos que agregaste al carrito:</div>

                {cartItems.length === 0 && (
                    <div className="cart-items-empty"> No hay productos </div>
                )}

                <div>
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-items-list">
                            <img></img>
                        </div>
                    ))}
                </div>
            </div>


        </>
    )

}

export default ShopCart;
