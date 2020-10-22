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
					title="winter-jacket"
					price={49.99}
					rating={5}
					image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2020/journeys/OTNmN2UyY2Yt/OTNmN2UyY2Yt-ZDc2OGNjOTYt-w758._SY608_CB418717995_.jpg"
				/>
				<Products
					id="1234"
					title="winter-jacket"
					price={49.99}
					rating={5}
					image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2020/journeys/OTNmN2UyY2Yt/OTNmN2UyY2Yt-ZDc2OGNjOTYt-w758._SY608_CB418717995_.jpg"
				/>
				<Products
					id="1234"
					title="winter-jacket"
					price={49.99}
					rating={5}
					image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2020/journeys/OTNmN2UyY2Yt/OTNmN2UyY2Yt-ZDc2OGNjOTYt-w758._SY608_CB418717995_.jpg"
				/>
			</div>
		</div>
	);
}

export default Home;
