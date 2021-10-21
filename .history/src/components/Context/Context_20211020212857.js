import { createContext } from 'react'

export const CartCtxt = createContext()

const CartContext = ({children}) => {
    return (
        <CartCtxt.Provider>
            {children}
        </CartCtxt.Provider>
    )
}

export default CartContext