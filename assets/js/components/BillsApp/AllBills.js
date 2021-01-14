import React, { Component } from 'react';
import Header from './Header';

export default class BillsApp extends Component {
	constructor() {
		super();
		this.state = {};
	}
	showAllBills = () => {
		const bills = this.props.allBills;
		if (bills.length > 0) {
			return bills.map(bill => {
				return (
					<li className="Bill" key={bill}>
						<div className="company">
							<div className="logo">
								<img src="/img/billsAppImg/coffeeblue.png" alt="" />
							</div>
							<div className="title">{bill.business_name}</div>
						</div>
						<div className="price">-${bill.price}</div>
					</li>
				);
			});
		} else {
			return (
				<li className="Bill">
					<div className="noBills">No Bills Please Add a Bill</div>
				</li>
			);
		}
	};
	billsTotalAmount = () => {
		const bills = this.props.allBills;
		let total = 0;

		for (var i = 0; i < bills.length; i++) {
			total += parseInt(bills[i].price);
		}
		if (bills.length > 0) {
			return total;
		} else {
			return 0;
		}
	};
	render() {
		return (
			<section id="AllBills">
				<div className="container">
					<div className="total-bills">
						<div className="text"> Total Amount :</div>
						<div className="number">${this.billsTotalAmount()}</div>
					</div>
					<ul className="billsList">{this.showAllBills()}</ul>
				</div>
			</section>
		);
	}
}
