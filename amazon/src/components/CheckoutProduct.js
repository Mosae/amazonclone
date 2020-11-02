import React from 'react';
import '../CheckoutProduct.css';
import { useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider';
function CheckoutProduct({ id, title, price, rating, image }) {
	const [{ basket, user }, dispatch] = useStateValue();
	const history = useHistory();
	const RemoveFromBasket = () => {
		//Add item to basket
		dispatch({
			type: 'REMOVE_FROM_BASKET',

			id: id,
		});
	};
	const routeChange = () => {
		let path = '/login';
		history.push(path);
	};
	return (
		<div className="checkoutProduct">
			<img className="checkoutProduct__image" src={image} alt="" />

			<div className="checkoutProduct__info">
				<p className="checkoutProduct__title">{title}</p>
				<p className="product__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="product__rating">
					{Array(rating)
						.fill()
						.map((_) => (
							<p>⭐️</p>
						))}
				</div>
				<button onClick={user ? RemoveFromBasket : routeChange}>
					Remove from cart
				</button>
			</div>
		</div>
	);
}

export default CheckoutProduct;
