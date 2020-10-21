import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header';

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/checkout">
						<Header />
						<h1>Checkout</h1>
					</Route>
					<Route path="/login">
						<Header />
						<h1>Login</h1>
					</Route>
					<Route path="/">
						<Header />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
