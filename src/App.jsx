import React from 'react'
import NavBar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'

function App() {
	return (
		<div>
			<NavBar />
			<ItemListContainer greeting="Bem vindo a nossa loja de calçados" />
		</div>
	)
}

export default App
