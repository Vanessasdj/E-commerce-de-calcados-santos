import React from 'react'
import './style.css'
import ItemCount from '../ItemCount'
import 'bootstrap/dist/css/bootstrap.min.css'

const ProductCard = ({ product, addToCart }) => {
	const handleAdd = (quantity) => {
		setCartItems([...cartItems, product])
		console.log(`Adicionado ${quantity} itens ao carrinho`)
	}

	return (
		<div className="card product-card">
			<img src={product.image} className="card-img-top" alt={product.name} />
			<div className="card-body">
				<h5 className="card-title">{product.name}</h5>
				<p className="card-text">{product.description}</p>
				<p className="card-text">R$ {product.price.toFixed(2)}</p>
				<ItemCount stock={5} initial={1} onAdd={handleAdd} />
			</div>
		</div>
	)
}

export default ProductCard
