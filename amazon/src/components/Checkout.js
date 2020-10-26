import React from 'react';
import '../Checkout.css';
import { useStateValue } from './StateProvider';
import Products from './Products';
import CheckoutProduct from './CheckoutProduct';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function Checkout() {
	const [{ basket }] = useStateValue();
	return (
		<div className="checkout">
			<img
				className="checkout__ad"
				src="https://images-na.ssl-images-amazon.com/images/G/01/PillPack/L_2xDesktop_650x45._CB421946505_.jpg"
				alt=""
			/>
			{/* <h1>Checkout Page</h1> */}
			{basket?.length === 0 ? (
				<div>
					{' '}
					<h2>Your Amazon Cart is empty</h2>
					<button onClick={<Products />} className="return__to__shop">
						Return to Shopping
					</button>
				</div>
			) : (
				<div>
					<h2 className="checkout__title">Your Shopping Basket</h2>
					{basket.map((item) => (
						<CheckoutProduct
							item={item.id}
							title={item.title}
							image={item.image}
							price={item.price}
							rating={item.rating}
						/>
					))}
				</div>
			)}
		</div>
	);
}

export default Checkout;
