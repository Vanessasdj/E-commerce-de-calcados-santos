// src/components/ItemListContainer/index.jsx
import React, { useState, useEffect } from 'react'
import './style.css'
import ItemList from '../ItemList'
import 'bootstrap/dist/css/bootstrap.min.css'
import mockItems from '../../mockItems'

const ItemListContainer = ({ greeting }) => {
	const [items, setItems] = useState([]) // Initialize state as an empty array
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchItems = async () => {
			setTimeout(() => {
				setItems(mockItems)
				setLoading(false)
			}, 2000)
		}

		fetchItems()
	}, [])

	return (
		<div className="container mt-4">
			<h2 className="text-center mb-4">{greeting}</h2>
			{loading ? (
				<div className="text-center">
					<div className="spinner-border" role="status">
						<span className="visually-hidden">Carregando...</span>
					</div>
				</div>
			) : (
				<ItemList items={items} />
			)}
		</div>
	)
}

export default ItemListContainer
