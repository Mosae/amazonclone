import React from 'react';
import '../Product.css';
function Products({ id, title, price, rating, image }) {
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
			<button>Add to cart</button>
		</div>
	);
}

export default Products;
