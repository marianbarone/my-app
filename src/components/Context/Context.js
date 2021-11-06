import { createContext, useState, useEffect } from 'react'

export const CartCtxt = createContext()

const CartContext = ({children}) => {

    const [cart, setCart] = useState([])

    // const addToCart = (movie, count) => {
    //     setCart([...cart,movie,count])
    // }

    const addCart = item_to_add => {
    // se fija si esta el item en el carrito
        const found = cart.find(element => element.id === item_to_add.id);
        if (found) {
            // vamos a recorrer mi array del carro en busca de el item para aumentarle la cantidad en el carro 
            const carrito = cart.map(element => {
            // si el ID del elemento del array (lo que ya esta en el carro) es igual al ID del elemento que quiero agregar al carro
                if (element.id === item_to_add.id) {
            // devolveme el item con la cantidad que se agregue    
                return { ...item_to_add, contador: item_to_add.contador + element.contador }
                } 
            // aca se re arma el array del carro
            return element
            })
            setCart(carrito)
            window.sessionStorage.setItem("cart", JSON.stringify(carrito))
            console.log(found)
            // si if ya estaba en el carrito, entra aca, y por ahora no hace nada . 
        } else{
            // si no estaba el item, se agrega al array carro 
            const cart = [...cart, item_to_add];
            /*  console.log("array" + carro); */
            setCart(cart);
            window.sessionStorage.setItem("cart", JSON.stringify(cart))
        }
    }

    const removeItem = (movie) => {
        let hardCopy = [...cart];
        hardCopy = hardCopy.filter((cartItem) => cartItem.id !== movie.id);
        setCart(hardCopy);
    }

    // const [cartTotal, setCartTotal] = useState(0);

    // useEffect(() => {
    //     total();
    // }, [cart]);

    // const total = () => {
    //     let totalVal = 0;
    //     for (let i = 0; i < cart.length; i++) {
    //     totalVal += cart[i].price;
    //     }
    //     setCartTotal(totalVal);
    // };

    // console.log(cartTotal);


    return (
        <CartCtxt.Provider value={{cart, setCart, addCart, removeItem}}>
            {children}
        </CartCtxt.Provider>
    )
}

export default CartContext