import React from 'react';

function CheckoutProduct({ id, title, price, rating, image }) {
	return (
		<div className="checkoutProduct">
			<img src={image} alt="" />

			<div className="checkoutDetails">
				{title}
				{price}
				{rating}
			</div>
		</div>
	);
}

export default CheckoutProduct;
