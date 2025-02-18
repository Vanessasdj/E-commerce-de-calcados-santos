import React from 'react'
import './style.css'
import CartWidget from '../CartWidget'

function NavBar() {
	return (
		<nav className="navbar">
			<h2 className="logo">SNKRS</h2>
			<ul className="menu">
				<li className="dropdown">
					<a href="#">Inicio</a>
					<ul className="submenu">
						<li>
							<a href="/Inicio/Inicio">Inicio</a>
						</li>
					</ul>
				</li>
				<li className="dropdown">
					<a href="#">Homem</a>
					<ul className="submenu">
						<li>
							<a href="/homem/esportes">Esportes</a>
						</li>
						<li>
							<a href="/homem/casual">Casual</a>
						</li>
						<li>
							<a href="/homem/snkrs">Snkrs</a>
						</li>
						<li>
							<a href="/homem/tecnologia">Tecnologia</a>
						</li>
					</ul>
				</li>

				<li className="dropdown">
					<a href="#">Mulher</a>
					<ul className="submenu">
						<li>
							<a href="/mulher/esportes">Esportes</a>
						</li>
						<li>
							<a href="/mulher/casual">Casual</a>
						</li>
						<li>
							<a href="/mulher/snkrs">Snkrs</a>
						</li>
						<li>
							<a href="/mulher/tecnologia">Tecnologia</a>
						</li>
					</ul>
				</li>

				<li className="dropdown">
					<a href="#">Infantil</a>
					<ul className="submenu">
						<li>
							<a href="/infantil/esportes">Esportes</a>
						</li>
						<li>
							<a href="/infantil/casual">Casual</a>
						</li>
						<li>
							<a href="/infantil/snkrs">Snkrs</a>
						</li>
						<li>
							<a href="/infantil/tecnologia">Tecnologia</a>
						</li>
					</ul>
				</li>
			</ul>
			<CartWidget />
		</nav>
	)
}

export default NavBar
