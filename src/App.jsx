import React, { useState } from 'react'
import NavBar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {
	const [cartItems, setCartItems] = useState([])
	const [stock, setStock] = useState(15)

	const addItemToCart = (quantity) => {
		if (quantity <= stock) {
			setCartItems([...cartItems, quantity])
			setStock(stock - quantity)
			console.log(`Adicionado ${quantity} itens ao carrinho`)
		}
	}

	const cartCount = cartItems.reduce((a, cV) => a + cV, 0)

	return (
		<div>
			<Router>
				<NavBar cartCount={cartCount} />

				<Routes>
					<Route
						path="/"
						element={
							<ItemListContainer
								greeting="Bem vindo a nossa loja de calçados!"
								addItemToCart={addItemToCart}
								stock={stock}
							/>
						}
					/>
					<Route
						path="/category/:id"
						element={
							<ItemListContainer
								greeting="Visite nossas categorias!"
								addItemToCart={addItemToCart}
								stock={stock}
							/>
						}
					/>
					<Route path="/item/:id" element={<ItemDetailContainer />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
