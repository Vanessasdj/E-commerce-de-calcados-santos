import React from 'react'
import Item from '../Item'
import 'bootstrap/dist/css/bootstrap.min.css'

const ItemList = ({ items }) => {
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
