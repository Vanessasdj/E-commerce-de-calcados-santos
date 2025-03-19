import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail'
import mockItems from '../../mockItems'

const ItemDetailContainer = () => {
	const { id } = useParams()
	const [item, setItem] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchItem = new Promise((resolve) => {
			setTimeout(() => {
				const foundItem = mockItems.find((item) => item.id === parseInt(id, 10))
				resolve(foundItem)
			}, 2000)
		})

		fetchItem.then((data) => {
			setItem(data)
			setLoading(false)
		})
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
