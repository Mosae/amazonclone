import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useStateValue } from './components/StateProvider';

function Header() {
	const [{ basket }] = useStateValue();
	console.log(basket);
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
				<Link to="/login" className="header__link">
					<div className="header__option">
						<span className="header__optionOne">Hello, Mosae</span>
						<span className="header__optionTwo">Sign In</span>
					</div>
				</Link>
				<Link to="/login" className="header__link">
					<div className="header__option">
						<span className="header__optionOne">Returns</span>
						<span className="header__optionTwo">& Orders</span>
					</div>
				</Link>
				<Link to="/login" className="header__link">
					<div className="header__option">
						<span className="header__optionOne">Your</span>
						<span className="header__optionTwo">Prime</span>
					</div>
				</Link>
				<Link to="/checkout">
					<div className="header__optionBasket">
						<AddShoppingCartIcon className="header__cartIcon" />
						<span className="header__optionTwo header__basketCount">
							{basket?.length}
						</span>
					</div>
				</Link>
			</div>
			{/* cart icon with number */}
		</nav>
	);
}

export default Header;
