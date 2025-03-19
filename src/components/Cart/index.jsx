import React, { useContext } from 'react'
import { CartContext } from '../../CartContext'
import { Link } from 'react-router-dom'
import ProductCard from '../ProductCard'
import './style.css'

const Cart = () => {
	const { cart, removeItem } = useContext(CartContext)

	const totalPrice = cart.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	)

	if (cart.length === 0) {
		return (
			<div className="empty-cart">
				<h2>Seu carrinho está vazio</h2>
				<Link to="/" className="back-btn">
					Voltar à loja
				</Link>
			</div>
		)
	}

	return (
		<div className="cart">
			<h2>Seu Carrinho</h2>
			<div className="cart-grid">
				{cart.map((item) => (
					<ProductCard product={item} removeItem={removeItem} />
				))}
			</div>
			<h3>Total: R$ {totalPrice.toFixed(2)}</h3>
		</div>
	)
}

export default Cart
