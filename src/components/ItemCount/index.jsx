import React, { useState } from 'react'
import './style.css'

const ItemCount = ({ stock, initial, onAdd }) => {
	const [count, setCount] = useState(initial || 1)
	const [message, setMessage] = useState('')

	const increaseCount = () => {
		if (count < stock) {
			setCount((prevCount) => prevCount + 1)
		}
	}

	const decreaseCount = () => {
		if (count > 1) {
			setCount((prevCount) => prevCount - 1)
		}
	}

	const handleAddToCart = () => {
		if (stock > 0) {
			onAdd(count)
			setMessage(`Você adicionou ${count} item(s) ao carrinho!`)
			setTimeout(() => setMessage(''), 3000)
		}
	}

	return (
		<div className="counter-container">
			<div className="counter-controls">
				<button
					className="counter-btn"
					onClick={decreaseCount}
					disabled={count === 1}
				>
					-
				</button>
				<span className="counter-value">{count}</span>
				<button
					className="counter-btn"
					onClick={increaseCount}
					disabled={count >= stock}
				>
					+
				</button>
			</div>
			<button
				className="add-to-cart-btn"
				onClick={handleAddToCart}
				disabled={stock === 0}
			>
				Adicionar {count} ao carrinho
			</button>
			{message && <p className="cart-message">{message}</p>}
			{stock === 0 && <p className="out-of-stock">Produto esgotado</p>}
		</div>
	)
}

export default ItemCount
