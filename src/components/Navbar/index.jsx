import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import CartWidget from '../CartWidget'
import { CartContext } from '../../CartContext'

function NavBar() {
	const { cartCount } = useContext(CartContext)

	return (
		<nav className="navbar">
			<h2 className="logo">SNKRS</h2>
			<ul className="menu">
				<li>
					<Link to="/">Inicio</Link>
				</li>
				<li>
					<Link to="/category/esportes">Esportes</Link>
				</li>
				<li>
					<Link to="/category/casual">Casual</Link>
				</li>
				<li>
					<Link to="/category/snkrs">SNKRS</Link>
				</li>
				<li>
					<Link to="/category/tecnologia">Tecnologia</Link>
				</li>
			</ul>
			<Link className="cartw" to="/cart">
				<CartWidget cartCount={cartCount} />
			</Link>
		</nav>
	)
}

export default NavBar
