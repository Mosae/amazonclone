import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

function Header() {
	return (
		<nav className="header">
			{/* logo left - img */}
			<Link to="/">
				<img
					className="header__logo"
					src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
					alt="Amazon Logo"
				/>
			</Link>

			{/* search bar */}
			<div className="header__search">
				<input className="header__searchInput" type="text" />

				<SearchIcon className="header__searchIcon" />
			</div>
			{/* 3 clickable links */}
			<div className="header__nav">
				<Link className="header__signIn">
					<div className="header__option">
						<span>Hello, Mosae</span>
						<span>Sign In</span>
					</div>
				</Link>
				<Link className="header__returnsOrders">Returns & Orders</Link>
				<Link className="header__prime">Prime</Link>
				<AddShoppingCartIcon className="header__cartIcon" />
			</div>
			{/* cart icon with number */}
		</nav>
	);
}

export default Header;
