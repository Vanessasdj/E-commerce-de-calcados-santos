import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import './style.css'

const Item = ({ item }) => {
	return (
		<div className="card">
			<Link to={`/item/${item.id}`} className="link-no-underline">
				<img
					src={item.pictureUrl}
					className="card-img-top cropped"
					alt={item.title}
				/>
				<div className="card-body">
					<h5 className="card-title">{item.title}</h5>
					<p className="card-text">{item.description}</p>
					<p className="card-text">R$ {item.price.toFixed(2)}</p>
				</div>
			</Link>
		</div>
	)
}

export default Item
