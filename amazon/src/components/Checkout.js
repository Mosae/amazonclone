import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../Checkout.css';
import { useStateValue } from './StateProvider';
import Products from './Products';
import CheckoutProduct from './CheckoutProduct';

import Subtotal from './Subtotal';

function Checkout() {
	const [{ basket }] = useStateValue();
	return (
		<div className="checkout">
			<div className="checkout__left">
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
						<Link to="/" className="return__to__shop">
							<button>Return to Shopping</button>
						</Link>
					</div>
				) : (
					<div>
						<h2 className="checkout__title">Your Shopping Basket </h2>
						{basket.map((item) => (
							<CheckoutProduct
								id={item.id}
								title={item.title}
								image={item.image}
								price={item.price}
								rating={item.rating}
							/>
						))}
					</div>
				)}
			</div>
			{basket.length > 0 && (
				<div className="checkout__right">
					<Subtotal />
				</div>
			)}
		</div>
	);
}

export default Checkout;
