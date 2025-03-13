import React, { useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../../CartContext'
import ItemCount from '../ItemCount'
import './style.css'

const ItemDetail = ({ name, description, imageUrl, price }) => {
	const { id } = useParams()
	const { addItemToCart } = useContext(CartContext)
	const [quantity, setQuantity] = useState(0)

	const handleAdd = (quantity) => {
		setQuantity(quantity)
		addItemToCart(quantity)
	}

	return (
		<div className="item-detail">
			<h2>{name}</h2>
			<img src={imageUrl} alt={name} className="item-image" />
			<p>{description}</p>
			<p>Preço: ${price}</p>
			{quantity === 0 ? (
				<ItemCount stock={5} initial={1} onAdd={handleAdd} />
			) : (
				<button
					className="add-to-cart-btn"
					onClick={() => (window.location.href = '/cart')}
				>
					Finalizar Compra
				</button>
			)}
		</div>
	)
}

export default ItemDetail
