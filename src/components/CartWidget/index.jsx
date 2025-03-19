import React, { useContext } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { CartContext } from '../../CartContext'
import './style.css'

const CartWidget = () => {
	const { cartCount } = useContext(CartContext)

	if (cartCount === 0) {
		return null
	}

	return (
		<div className="cart-widget">
			<FaShoppingCart className="cart-icon" />
			<span className="cart-count">{cartCount}</span>
		</div>
	)
}

export default CartWidget
