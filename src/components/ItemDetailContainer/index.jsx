import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail'
import { getCategoriesCollection } from '../../utils/firebase'

const ItemDetailContainer = () => {
	const { id } = useParams()
	const [item, setItem] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchItem = async () => {
			const categories = await getCategoriesCollection()
			setTimeout(() => {
				const allItems = Object.values(categories).flat()
				const foundItem = allItems.find((item) => item.id === parseInt(id, 10))
				setItem(foundItem)
				setLoading(false)
			}, 2000)
		}

		fetchItem()
	}, [id])

	if (loading) {
		return <div>Loading...</div>
	}

	return (
		<div>
			<h1>Visão detalhada</h1>
			{item ? (
				<ItemDetail
					id={item.id}
					name={item.title}
					description={item.description}
					imageUrl={item.pictureUrl}
					price={item.price}
				/>
			) : (
				<p>Item não encontrado</p>
			)}
		</div>
	)
}

export default ItemDetailContainer
