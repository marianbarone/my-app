import { createContext, useState } from 'react'

export const CartCtxt = createContext()

const CartContext = ({children}) => {

    const [cart, setCart] = useState([])

//Aca van funciones addtocart, removeffromcart, deletecart, etc

    return (
        <CartCtxt.Provider value={{cart, setCart /* addtocart, remove, etc */}}>
            {children}
        </CartCtxt.Provider>
    )
}

export default CartContext