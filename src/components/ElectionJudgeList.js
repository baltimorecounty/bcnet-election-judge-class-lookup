import React, { Component } from 'react';

class ElectionJudgeList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			results: [],
		};
		
		this.displayList = this.displayList.bind(this);
		this.tableSort = this.tableSort.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ results: nextProps.results });
	}

	displayList() {
		if (!this.state.results.length) {
			return (
				<tr>
					<td colSpan="5"><p>There are no results to display.</p></td>
				</tr>
			);
		}

		return this.state.results.map((result, index) => {
			return (
				<tr key={`${result.PhoneNumber}--${index}`}>
					<td>{ result.FirstName }</td>
					<td>{ result.LastName }</td>
					<td>{ result.PhoneNumber }</td>
					<td>{ result.Email }</td>					
					<td>{ result.FormName }</td>
				</tr>
			);
		});
	}

	tableSort(fieldName) {
		const results = Array.prototype.slice.call(this.state.results);

		results.sort((left, right) => this.resultsComparer(left, right, fieldName));

		this.setState({ results });
	}

	resultsComparer(left, right, fieldName) {
		const leftField = left[fieldName].toLowerCase();
		const rightField = right[fieldName].toLowerCase();

		if (leftField > rightField) {
			return 1;
		}

		if (leftField < rightField) {
			return -1;
		}

		return 0;
	}

	render() {
		return (
			<table id="BACO_table">
				<thead>
					<tr>
						<th className="BACOTableHeader" onClick={() => this.tableSort('FirstName')}>First Name</th>
						<th className="BACOTableHeader" onClick={() => this.tableSort('LastName')}>Last Name</th>				
						<th className="BACOTableHeader" onClick={() => this.tableSort('PhoneNumber')}>Phone</th>				
						<th className="BACOTableHeader" onClick={() => this.tableSort('Email')}>Email</th>				
						<th className="BACOTableHeader" onClick={() => this.tableSort('FormName')}>Class</th>
					</tr>
				</thead>
				<tbody>
					{this.displayList()}
				</tbody>
			</table>
		);
	}
}

export { ElectionJudgeList };
