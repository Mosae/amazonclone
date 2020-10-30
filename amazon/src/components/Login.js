import React from 'react';
import { Link } from 'react-router-dom';
import '../Login.css';
function Login() {
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
					<input type="email" />
					<h5>Password</h5>
					<input type="password" />
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
