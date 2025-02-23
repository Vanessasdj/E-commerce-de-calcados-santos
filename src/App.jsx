import { React } from 'react'
import NavBar from './components/Navbar'
import ItemCount from './components/ItemCount'

function App() {
	const handleAdd = (quantity) => {
		console.log(`Adicionado ${quantity} itens ao carrinho`)
	}

	return (
		<div>
			<NavBar />
			<h1>Bem-vindo à Loja de Calçados!</h1>
			<ItemCount stock={5} initial={1} onAdd={handleAdd} />
		</div>
	)
}

export default App
