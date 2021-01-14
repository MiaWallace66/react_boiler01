import React, { Component } from 'react';
import ReactDom from 'react-dom';

import BillsApp from './components/BillsApp/BillsApp';
import LandingPage from './components/LandingPage/LandingPage';

class App extends Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		return (
			<div className={'container'}>
				<h1>this is a working project</h1>
				<BillsApp />

				
			</div>
		);
	}
}
ReactDom.render(<App />, document.getElementById('app'));
