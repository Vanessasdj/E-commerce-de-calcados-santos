import React, { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([])
	const [stock, setStock] = useState(15)

	const addItemToCart = (quantity) => {
		if (quantity <= stock) {
			setCartItems([...cartItems, quantity])
			setStock(stock - quantity)
			console.log(`Adicionado ${quantity} itens ao carrinho`)
		}
	}

	const cartCount = cartItems.reduce((a, cV) => a + cV, 0)

	return (
		<CartContext.Provider
			value={{ cartItems, stock, addItemToCart, cartCount }}
		>
			{children}
		</CartContext.Provider>
	)
}
