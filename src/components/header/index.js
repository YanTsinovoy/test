import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
	<header className="header">
		<nav className="header__nav">
			<ul className="header__list">
				<li className="header__item">
					<Link className="header__link" to="/">
						Home
					</Link>
				</li>
				<li className="header__item">
					<Link className="header__link" to="/auth">
						Auth
					</Link>
				</li>
			</ul>
		</nav>
	</header>
);

export default Header;
