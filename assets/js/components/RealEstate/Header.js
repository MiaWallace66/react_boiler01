import React, { Component } from 'react';

export default class Header extends Component {
	constructor() {
		super();
		this.state = {
			name: 'inklow'
		};
	}

	render() {
		return (
			<header>
				<div>Logo</div>
				<nav>
					<a href="#">create ad </a>
					<a href="#">about us</a>
					<a href="#">log in</a>
					<a href="#">log in</a>
					<a href="#" className="register-btn">
						Register
					</a>
				</nav>
			</header>
		);
	}
}
