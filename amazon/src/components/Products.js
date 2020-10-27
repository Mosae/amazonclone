import React from 'react';
import '../Product.css';
import { useStateValue } from './StateProvider';
function Products({ id, title, price, rating, image }) {
	const [{ basket }, dispatch] = useStateValue();
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
			<img className="product__image" src={image} alt="winter-jacket" />
			<button onClick={addToBasket}>Add to cart</button>
		</div>
	);
}

export default Products;
