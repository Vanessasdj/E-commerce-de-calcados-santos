import React, { useState, useEffect } from 'react'
import './style.css'
import ItemList from '../ItemList'
import 'bootstrap/dist/css/bootstrap.min.css'
import tenis from '../../assets/tenisesportivo.png'
import tenis2 from '../../assets/teniscasual.png'
import tenis3 from '../../assets/tenisdecorrida.png'

const ItemListContainer = ({ greeting }) => {
	const [items, setItems] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchItems = async () => {
			setTimeout(() => {
				const mockItems = [
					{
						id: 1,
						title: 'Tênis Esportivo',
						description: 'Confortável e estiloso.',
						price: 199.99,
						pictureUrl: tenis
					},
					{
						id: 2,
						title: 'Tênis Casual',
						description: 'Perfeito para o dia a dia.',
						price: 149.99,
						pictureUrl: tenis2
					},
					{
						id: 3,
						title: 'Tênis de Corrida',
						description: 'Leve e resistente.',
						price: 249.99,
						pictureUrl: tenis3
					}
				]
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
