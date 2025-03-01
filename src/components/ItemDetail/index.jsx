import React from 'react'
import './style.css'

const ItemDetail = ({ name, description, imageUrl, price }) => {
	return (
		<div className="item-detail">
			<h2>{name}</h2>
			<img src={imageUrl} alt={name} className="item-image" />
			<p>{description}</p>
			<p>Preço: ${price}</p>
		</div>
	)
}

export default ItemDetail
