import React, { useState } from 'react'
import NavBar from './components/Navbar'
import ProductCard from './components/ProductCard'
import tenis from './assets/tenisesportivo.png'
import ItemListContainer from './components/ItemListContainer'

function App() {
	const products = [
		{
			name: 'Tênis Esportivo',
			description: 'Confortável e estiloso.',
			price: 199.99,
			image: tenis
		}
	]

	return (
		<div>
			<NavBar />
			<ItemListContainer greeting="Bem vindo a nossa loja de calçados" />
			<div className="row">
				{products.map((product, index) => (
					<div key={index} className="col-md-4">
						<ProductCard product={product} />
					</div>
				))}
			</div>
		</div>
	)
}

export default App
