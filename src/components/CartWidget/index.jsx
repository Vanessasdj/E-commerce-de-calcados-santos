import React from 'react'
import { FaShoppingCart } from 'react-icons/fa' // Importa ícone de carrinho
import './style.css'

const CartWidget = () => {
	return (
		<div className="cart-widget">
			<FaShoppingCart className="cart-icon" />
			<span className="cart-count">3</span> {/* Simula 3 itens no carrinho */}
		</div>
	)
}

export default CartWidget
