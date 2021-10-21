import { createContext, useState } from 'react'

export const CartCtxt = createContext()

const CartContext = ({children}) => {

    const [cart, setCart] = useState([])

//Aca van funciones addtocart, removeffromcart, deletecart, etc
//addToCart ... serCart() - en el caso de hacer esto hay que poner addToCart en movie.js dentro de los params de useContext y sacar la formula addToCart 

    return (
        <CartCtxt.Provider value={{cart, setCart /* addtocart, remove, etc */}}>
            {children}
        </CartCtxt.Provider>
    )
}

export default CartContext