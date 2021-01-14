import React, { Component } from 'react';
import Header from './Header';

export default class BillsApp extends Component {
	constructor() {
		super();
		this.state = {
			business_name: '',
			price: 0
		};
	}
	inputChange = () => {
		// makes the state update according to the input
		const name = event.target.name;
		const value =
			event.target.type === 'checkbox'
				? event.target.checked
				: event.target.value;
		// setting the state
		this.setState({
			[name]: value
		});
	};
	handleSubmit = () => {
		event.preventDefault();
		this.props.saveBill(this.state);
		console.log(this.state);
	};

	render() {
		return (
			<section
				id="AddBill"
				className={`${this.props.addBillOpen === true ? 'active' : ''}`}
			>
				<div className="container">
					<h2>Add Bill</h2>
					<form onSubmit={this.handleSubmit}>
						<div className="form-group">
							<label htmlFor="business_name">Business Name</label>
							<input
								name="business_name"
								type="text"
								id="business_name"
								onChange={this.inputChange}
								value={this.state.business_name}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="price">Price</label>
							<input
								type="text"
								id="price"
								name="price"
								onChange={this.inputChange}
								value={this.state.price}
							/>
						</div>
						<button type="submit">Save</button>
					</form>
				</div>
			</section>
		);
	}
}
