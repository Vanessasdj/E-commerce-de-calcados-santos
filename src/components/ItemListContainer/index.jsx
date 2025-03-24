import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './style.css'
import ItemList from '../ItemList'
import 'bootstrap/dist/css/bootstrap.min.css'
import { getCategoriesCollection } from '../../utils/firebase'

const ItemListContainer = ({ greeting }) => {
	const { id } = useParams()
	const [items, setItems] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchItems = async () => {
			const categories = await getCategoriesCollection()
			setTimeout(() => {
				if (id) {
					const categoryItems = categories[id]
					if (categoryItems) {
						setItems(categoryItems)
					} else {
						setItems([])
					}
				} else {
					const allItems = Object.values(categories).flat()
					setItems(allItems)
				}
				setLoading(false)
			}, 2000)
		}

		fetchItems()
	}, [id])

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
