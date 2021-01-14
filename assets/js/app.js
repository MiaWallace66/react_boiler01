import React, { Component } from 'react';
import ReactDom from 'react-dom';
import BillsApp from './components/BillsApp/BillsApp';
import RealEstate from './components/RealEstate/RealEstate';
class App extends Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		return (
			<div className={'container'}>
				{/* <BillsApp /> */}
				<RealEstate />
			</div>
		);
	}
}
ReactDom.render(<App />, document.getElementById('app'));
