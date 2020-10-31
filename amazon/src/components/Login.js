import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import '../Login.css';
function Login() {
	const history = useHistory();
	//state for email and password
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const login = (e) => {
		e.preventDefault();
		auth
			.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				//logged in success, redirect to home page
				history.push('/');
			})
			.catch((e) => alert(e.message));
	};
	const register = (e) => {
		e.preventDefault();
		auth
			.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				//registered redirect to homepage
				history.push('/');
			})
			.catch((e) => alert(e.message));
	};
	return (
		<div className="login">
			<Link to="/">
				<img
					className="login__logo"
					src="http://pngimg.com/uploads/amazon/amazon_PNG16.png"
					alt="amazon logo"
				/>
			</Link>
			<div className="login__container">
				<h1>Sign In</h1>
				<form>
					<h5>E-mail</h5>
					<input
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						type="email"
					/>
					<h5>Password</h5>
					<input
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						type="password"
					/>
					<button onClick={login} type="submit" className="login__signInButton">
						Sign in
					</button>
					<p>
						By continuing, you agree to Amazon's Conditions of Use and Privacy
						Notice.
					</p>
				</form>
				New to Amazon?
				<button onClick={register} className="login__registerButton">
					Create your Amazon account
				</button>
			</div>
		</div>
	);
}

export default Login;
