import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import CartWidget from '../CartWidget'

function NavBar({ cartCount }) {
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
			<CartWidget cartCount={cartCount} />
		</nav>
	)
}

export default NavBar
