import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './components/Home';
import Login from './components/Login';
import Footer from './components/Footer';
import Checkout from './components/Checkout';
import { useStateValue } from './components/StateProvider';
import { auth } from './components/firebase';
function App() {
	//data layer
	const [{ user }, dispatch] = useStateValue();
	//UseEffect
	//condition based code
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				dispatch({
					type: 'SET_USER',
					user: authUser,
				});
			} else {
				dispatch({
					type: 'SET_USER',
					user: null,
				});
			}
		});
		return () => {
			//Any Cleanup operations go in here
			unsubscribe();
		};
	}, []);
	console.log('This is the user', user);
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/checkout">
						<Header />
						<Checkout />
					</Route>
					<Route path="/login">
						<Header />
						<Login />
					</Route>
					<Route path="/">
						<Header />
						<Home />
						<Footer />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
