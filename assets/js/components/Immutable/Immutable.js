import React, { Component } from 'react';
import update from 'immutability-helper';

export default class Immutable extends Component {
	constructor() {
		super();
		this.state = {
			background: 'Black',
			names: ['Cindy', 'billy', 'lisa3000', 'john'],
			teachers: ['cam', 'brad', 'jennefer'],
			both: [],
			user: {
				name: 'joe',
				age: 11,
				location: 'nyc',
				grades: {
					math: 'b',
					gym: 'c',
					english: 'd'
				}
			}
		};
	}
	clickedbtn = () => {
		console.log(this.state);
		const newGrades = update(this.state.user.grades, {
			$merge: {
				art: 'B-',
				biology: 'D'
			}
		});
		const newState = update(this.state, {
			user: {
				grades: { $set: newGrades }
			}
		});

		this.setState(newState, () => {
			console.log(this.state);
		});
		console.log('Clicked BTN');
	};
	changeToActive = () => {
		if (this.state.user.grades.biology == 'D') {
			return 'active';
		} else {
			return '';
		}
	};

	render() {
		return (
			<div id="Immutable-comp">
				<div className={`box ${this.changeToActive()}`} />
				<div className="button" onClick={this.clickedbtn}>
					Press Me
				</div>
			</div>
		);
	}
}
