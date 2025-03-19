import React, { useContext } from 'react'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const ProductCard = ({ product, removeItem }) => {
	return (
		<div className="card product-card">
			<img
				src={product.imageUrl}
				className="card-img-top cropped"
				alt={product.name}
			/>
			<div className="card-body">
				<h5 className="card-title">{product.name}</h5>
				<p className="card-text">{product.description}</p>
				<p className="card-text">R$ {product.price.toFixed(2)}</p>
				<button
					className="rmv-from-cart-btn"
					onClick={() => removeItem(product.id)}
				>
					Remover
				</button>
			</div>
		</div>
	)
}

export default ProductCard
