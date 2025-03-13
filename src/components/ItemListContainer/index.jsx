import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './style.css'
import ItemList from '../ItemList'
import 'bootstrap/dist/css/bootstrap.min.css'
import mockItems from '../../mockItems'
import { CartContext } from '../../CartContext'

const ItemListContainer = ({ greeting }) => {
	const { id } = useParams()
	const { addItemToCart, stock } = useContext(CartContext)
	const [items, setItems] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchItems = async () => {
			setTimeout(() => {
				if (id) {
					const filteredItems = mockItems.filter((item) => item.category === id)
					setItems(filteredItems)
				} else {
					setItems(mockItems)
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
				<ItemList items={items} addItemToCart={addItemToCart} stock={stock} />
			)}
		</div>
	)
}

export default ItemListContainer
