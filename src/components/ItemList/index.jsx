import React from 'react'
import Item from '../Item'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

const ItemList = ({ items }) => {
	if (!items) {
		return <div>No items available</div>
	}

	return (
		<div className="row">
			{items.map((item) => (
				<div key={item.id} className="col-md-4 mb-4">
					<Item item={item} />
				</div>
			))}
		</div>
	)
}

export default ItemList
