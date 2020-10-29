import React from 'react';
import '../CheckoutProduct.css';
import { useStateValue } from './StateProvider';
function CheckoutProduct({ id, title, price, rating, image }) {
	const [{ basket }, dispatch] = useStateValue();
	const RemoveFromBasket = () => {
		//Add item to basket
		dispatch({
			type: 'REMOVE_FROM_BASKET',

			id: id,
		});
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
				<button onClick={RemoveFromBasket}>Remove from cart</button>
			</div>
		</div>
	);
}

export default CheckoutProduct;
