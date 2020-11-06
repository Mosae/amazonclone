import React from 'react';
import '../Footer.css';
import github from '../images/GitHub-Mark-32px.png';
function Footer() {
	return (
		<div className="footer__container">
			<h2>Amazon Clone By: Mosae Litsoane</h2>
			<a href="https://github.com/Mosae/amazonclone" target="_blank">
				<img src={github} alt="github logo" />
			</a>
		</div>
	);
}

export default Footer;
