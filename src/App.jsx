import React, { useEffect } from 'react'
import NavBar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'
import CartProvider from './CartContext'
import Cart from './components/Cart'
import { addCollectionAndDocument } from './utils/firebase'
import { getCategoriesCollection } from './utils/firebase'

function App() {
	// useEffect(() => {
	// addCollectionAndDocument('categories', mockItems)
	// }, [])

	useEffect(() => {
		const fetchCategories = async () => {
			const categories = await getCategoriesCollection()
			console.log(categories)
		}
		fetchCategories()
	}, [])

	return (
		<CartProvider>
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
						element={<ItemListContainer greeting="Visite nossas categorias!" />}
					/>
					<Route path="/item/:id" element={<ItemDetailContainer />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</Router>
		</CartProvider>
	)
}

export default App
