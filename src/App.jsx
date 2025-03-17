import React from 'react'
import NavBar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'
import CartProvider from './CartContext'
import Cart from './components/Cart'

function App() {
	return (
		<CartProvider>
			<div>
				<Router>
					<NavBar />
					<Routes>
						<Route
							path="/"
							element={
								<ItemListContainer greeting="Bem vindo a nossa loja de calçados!" />
							}
						/>
						<Route
							path="/category/:id"
							element={
								<ItemListContainer greeting="Visite nossas categorias!" />
							}
						/>
						<Route path="/item/:id" element={<ItemDetailContainer />} />
						<Route path="/cart" element={<Cart />} />
					</Routes>
				</Router>
			</div>
		</CartProvider>
	)
}

export default App
