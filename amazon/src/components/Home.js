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
					title="Sony WHXB900N Noise Cancelling Headphones, Wireless Bluetooth Over the Ear Headset - Blue (Amazon Exclusive)"
					price={49.99}
					rating={5}
					image="https://images-na.ssl-images-amazon.com/images/G/01/omaha/images/merch/2020/WFM/Monthly/October/AMZ/SingleCategoryCard/WFM_20OctPizza__gw_flexible_desktop_cat_card_2x._SY608_CB403135279_.jpg"
				/>
				<Products
					id="12345"
					title="Sony WHXB900N Noise Cancelling Headphones, Wireless Bluetooth Over the Ear Headset - Blue (Amazon Exclusive)"
					price={248.0}
					rating={5}
					image="https://m.media-amazon.com/images/I/816QIo27ASL._AC_SY400_.jpg"
				/>
				<Products
					id="12346"
					title="winter-jacket"
					price={49.99}
					rating={5}
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
					title="winter-jacket"
					price={49.99}
					rating={5}
					image="https://m.media-amazon.com/images/I/5171iSlU5+L._AC_SY200_.jpg"
				/>
			</div>
			<div className="home__row">
				<Products
					id="12349"
					title="winter-jacket"
					price={49.99}
					rating={5}
					image="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Beauty_Luxury_/XCM_CUTTLE_1270467_1388218_US_GH20_3400207_758x608_2X_en_US._SY608_CB402658713_.jpg"
				/>
			</div>
		</div>
	);
}

export default Home;
