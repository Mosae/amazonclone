import React from 'react';
import '../Product.css';
import { useStateValue } from './StateProvider';
import { useHistory } from 'react-router-dom';
function Products({ id, title, price, rating, image }) {
	const [{ basket, user }, dispatch] = useStateValue();
	const history = useHistory();
	const addToBasket = () => {
		//Add item to basket
		dispatch({
			type: 'ADD_TO_BASKET',
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating,
			},
		});
	};
	const routeChange = () => {
		let path = '/login';
		history.push(path);
	};
	return (
		<div className="product">
			<div className="product__info">
				<p className="product__title">{title}</p>
				<p className="product__">
					<small>$</small>
					<strong className="product__price">{price}</strong>
				</p>

				<div className="product__rating">
					{Array(rating)
						.fill()
						.map((_) => (
							<p>⭐️</p>
						))}
				</div>
			</div>
			<img className="product__image" src={image} alt="product" />
			<button onClick={user ? addToBasket : routeChange}>Add to cart</button>
		</div>
	);
}

export default Products;
