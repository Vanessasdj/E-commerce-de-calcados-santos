import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemCount from '../ItemCount'
import { Link } from 'react-router-dom'
import './style.css'

const Item = ({ item }) => {
	const handleAdd = (quantity) => {
		setCartItems([...cartItems, product])
		console.log(`Adicionado ${quantity} itens ao carrinho`)
	}

	return (
		<div className="card">
			<Link to={`/item/${item.id}`} className="link-no-underline">
				<img src={item.pictureUrl} className="card-img-top" alt={item.title} />
				<div className="card-body">
					<h5 className="card-title">{item.title}</h5>
					<p className="card-text">{item.description}</p>
					<p className="card-text">R$ {item.price.toFixed(2)}</p>
				</div>
			</Link>
			<div className="card-footer">
				<ItemCount stock={5} initial={1} onAdd={handleAdd} />
			</div>
		</div>
	)
}

export default Item
