import React from 'react';
import '../Home.css';
import Products from './Products';

function Home() {
	return (
		<div className="home">
			<img
				className="home__image"
				src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/Yzk3OWQ3NDUt/Yzk3OWQ3NDUt-ZWY0YzBhZjAt-w1500._CB418661556_.jpg"
				alt=""
			/>
			<div className="home__row">
				<Products
					id="1234"
					title="50% off pizza"
					price={15.99}
					rating={5}
					image="https://images-na.ssl-images-amazon.com/images/G/01/omaha/images/merch/2020/WFM/Monthly/October/AMZ/SingleCategoryCard/WFM_20OctPizza__gw_flexible_desktop_cat_card_2x._SY608_CB403135279_.jpg"
				/>
				<Products
					id="12345"
					title="Sony WHXB900N Noise Cancelling Headphones, Wireless Bluetooth Over the Ear Headset - Blue (Amazon Exclusive)"
					price={248.0}
					rating={4}
					image="https://m.media-amazon.com/images/I/816QIo27ASL._AC_SY400_.jpg"
				/>
				<Products
					id="12346"
					title="Work-out bench"
					price={49.99}
					rating={3}
					image="https://images-na.ssl-images-amazon.com/images/I/41reZWgo4AL._AC_SY400_.jpg"
				/>
			</div>
			<div className="home__row">
				<Products
					id="12347"
					title="Carhartt Boys' Active Jac Quilt Lined Jacket Coat"
					price={54.99}
					rating={4}
					image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2020/journeys/OTNmN2UyY2Yt/OTNmN2UyY2Yt-ZDc2OGNjOTYt-w758._SY608_CB418717995_.jpg"
				/>
				<Products
					id="12348"
					title="Greenlights Audible Audiobook – Unabridged"
					price={24.5}
					rating={4}
					image="https://m.media-amazon.com/images/I/5171iSlU5+L._AC_SY200_.jpg"
				/>
			</div>
			<div className="home__row">
				<Products
					id="12349"
					title="Garmin fēnix 5s, Premium and Rugged Smaller-Sized Multisport GPS Smartwatch, Silver/Black"
					price={249.99}
					rating={3}
					image="https://m.media-amazon.com/images/I/412bWTV7ezL._AC_SY480_.jpg"
				/>
			</div>
		</div>
	);
}

export default Home;
