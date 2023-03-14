import React, { createContext, useState } from 'react';


export const CartContext = createContext()

const CartContextProvider = ({children}) => {
    const [ cart, setCart ] = useState([])

    const isInCart = (id) => {
        return cart.some(x => x.id === id)
    }

    const addItem = (item, quantity) => {
        if(isInCart(item.id)){
            let pos = cart.findIndex(x => x.id === item.id)
            cart[ pos ].quantity += quantity
            setCart([...cart])
        }else {
            setCart([...cart, {...item, quantity:quantity}])
        }
    }

    const removeItem = (id) => {
        const products = cart.filter(x => x.id !== id)
        setCart([...products])
    }

    const clearCart = () => {
        setCart([])
    }

    const cartTotal = () => {
        return cart.reduce((total, item) => total += item.quantity, 0)
    }

    const priceTotal = () => {
        return cart.reduce((total, item) => total += item.quantity * item.price , 0)
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, cartTotal, priceTotal, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider


