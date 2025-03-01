import React from 'react'
import NavBar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ItemList from './components/ItemList'
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {
	return (
		<div>
			<Router>
				<NavBar />

				<Routes>
					<Route
						path="/"
						element={
							<ItemListContainer greeting="Bem vindo a nossa loja de calçados" />
						}
					/>
					<Route path="/item/:id" element={<ItemDetailContainer />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
