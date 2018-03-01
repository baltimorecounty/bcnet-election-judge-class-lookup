import React, { Component } from 'react';

class SearchBox extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchTerm: '',
			isLoading: false,
		};
	
		this.handleTextChange = this.handleTextChange.bind(this);
		this.renderButton = this.renderButton.bind(this);
		this.search = this.search.bind(this);
		this.afterSearch = this.afterSearch.bind(this);
	}

	handleTextChange(changeEvent) {
		this.setState({ searchTerm: changeEvent.target.value.trim() })
	}

	search() {
		if (this.state.searchTerm.length) {
			this.setState({ isLoading: true });
			this.props.onClick(this.state.searchTerm, this.afterSearch);
		}
	}

	afterSearch(errorMessage) {
		if (errorMessage && errorMessage.length) {
			alert(errorMessage);
		}

		this.setState({ isLoading: false });
	}

	renderButton() {
		if (this.state.isLoading) {
			return (
				<button className="btn btn-primary" onClick={this.search}>
					<i className="fa fa-spin fa-refresh" aria-hidden="true"></i>
				</button>				
			)
		}

		return (
			<button className="btn btn-primary" onClick={this.search}>
				{this.props.buttonCaption}
			</button>				
		);
	}

	render() {
		return (
			<fieldset>
				<div className="form-group">
					<input id="search-box" className="form-control top-margin" onChange={this.handleTextChange} placeholder={this.props.placeholder} />
				</div>			
				{this.renderButton()}
			</fieldset>
		);
	}
}

export { SearchBox };