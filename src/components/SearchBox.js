import React, { Component } from 'react';
import Urls from '../constants/Urls';

class SearchBox extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchTerm: '',
		};
	
		this.handleTextChange = this.handleTextChange.bind(this);
		this.handleSearchClick = this.handleSearchClick.bind(this);
	}

	handleTextChange(changeEvent) {
		this.setState({ searchTerm: changeEvent.target.value.trim() })
	}

	handleSearchClick() {
		if (this.state.searchTerm.trim().length === 0) {
			return;
		}

		if (!this.props.onResults) {
			console.error('Results are unhandled.');
			return;
		}

		fetch(`${Urls.search}/${this.state.searchTerm}`)
			.then(results => results.json())
			.then(jsonResults => this.props.onResults(jsonResults))
			.catch(error => console.error(error));
	}

	render() {
		return (
			<fieldset>
				<div className="form-group">
					<input id="search-box" className="form-control top-margin" onChange={this.handleTextChange} placeholder="Search by first name, last name, phone, or email" />
				</div>			
				<button className="btn btn-primary" onClick={this.handleSearchClick}>Search!</button>
			</fieldset>
		);
	}
}

export { SearchBox };