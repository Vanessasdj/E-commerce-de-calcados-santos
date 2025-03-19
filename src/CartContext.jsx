import React, { createContext, useState } from 'react'

export const CartContext = createContext()

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([])

	const addItem = (item, quantity) => {
		const existingItem = cart.find((cartItem) => cartItem.id === item.id)
		if (existingItem) {
			setCart(
				cart.map((cartItem) =>
					cartItem.id === item.id
						? { ...cartItem, quantity: cartItem.quantity + quantity }
						: cartItem
				)
			)
		} else {
			setCart([...cart, { ...item, quantity }])
		}
	}

	const removeItem = (itemId) => {
		setCart(cart.filter((item) => item.id !== itemId))
	}

	const clear = () => {
		setCart([])
	}

	const isInCart = (id) => {
		return cart.some((item) => item.id === id)
	}

	const cartCount = cart.reduce((total, item) => total + item.quantity, 0)

	return (
		<CartContext.Provider
			value={{ cart, addItem, removeItem, clear, isInCart, cartCount }}
		>
			{children}
		</CartContext.Provider>
	)
}

export default CartProvider
