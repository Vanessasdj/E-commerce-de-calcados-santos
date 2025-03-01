// src/components/Navbar/index.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import CartWidget from '../CartWidget'

function NavBar() {
	return (
		<nav className="navbar">
			<h2 className="logo">SNKRS</h2>
			<ul className="menu">
				<li className="dropdown">
					<Link to="/">Inicio</Link>
					<ul className="submenu">
						<li>
							<Link to="/">Inicio</Link>
						</li>
					</ul>
				</li>
				<li className="dropdown">
					<Link to="#">Homem</Link>
					<ul className="submenu">
						<li>
							<Link to="/homem/esportes">Esportes</Link>
						</li>
						<li>
							<Link to="/homem/casual">Casual</Link>
						</li>
						<li>
							<Link to="/homem/snkrs">Snkrs</Link>
						</li>
						<li>
							<Link to="/homem/tecnologia">Tecnologia</Link>
						</li>
					</ul>
				</li>
				<li className="dropdown">
					<Link to="#">Mulher</Link>
					<ul className="submenu">
						<li>
							<Link to="/mulher/esportes">Esportes</Link>
						</li>
						<li>
							<Link to="/mulher/casual">Casual</Link>
						</li>
						<li>
							<Link to="/mulher/snkrs">Snkrs</Link>
						</li>
						<li>
							<Link to="/mulher/tecnologia">Tecnologia</Link>
						</li>
					</ul>
				</li>
				<li className="dropdown">
					<Link to="#">Infantil</Link>
					<ul className="submenu">
						<li>
							<Link to="/infantil/esportes">Esportes</Link>
						</li>
						<li>
							<Link to="/infantil/casual">Casual</Link>
						</li>
						<li>
							<Link to="/infantil/snkrs">Snkrs</Link>
						</li>
						<li>
							<Link to="/infantil/tecnologia">Tecnologia</Link>
						</li>
					</ul>
				</li>
			</ul>
			<CartWidget />
		</nav>
	)
}

export default NavBar
