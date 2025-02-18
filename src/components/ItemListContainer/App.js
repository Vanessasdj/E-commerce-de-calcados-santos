import React from 'react'
import NavBar from './components/NavBar/index.jsx'
import ItemListContainer from './components/ItemListContainer/index.jsx'

function App() {
	return (
		<div>
			<NavBar />
			<ItemListContainer greeting="Bem-vindo à nossa loja!" />
		</div>
	)
}

export default App
