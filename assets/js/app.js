import React, { Component } from 'react';
import ReactDom from 'react-dom';
// import Counter from './components/Counter/Counter';
// import Immutable from './components/Immutable/Immutable';
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
				{/* <LandingPage /> */}
				<BillsApp />

				{/*<Counter status="manual" />*/}
			</div>
		);
	}
}
ReactDom.render(<App />, document.getElementById('app'));
