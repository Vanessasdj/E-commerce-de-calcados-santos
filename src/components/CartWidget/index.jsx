import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import './style.css'

const CartWidget = ({ cartCount }) => {
	return (
		<div className="cart-widget">
			<FaShoppingCart className="cart-icon" />
			<span className="cart-count">{cartCount}</span>
		</div>
	)
}

export default CartWidget
