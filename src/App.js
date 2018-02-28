import React, { Component } from 'react';
import { ResultsList, SearchBox } from './components';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			results: [],
		}
	}

	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-xs-12">
						<h1>Election Judge Lookup Tool</h1>
						<p>
							Search for election judge class registrants by either first name, last name, phone (ex. 4105551212), or email address.<br />
							You can click any column header to sort the results.
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12">
						<SearchBox onResults={results => this.setState({ results })} />
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12">
						<div className="top-margin">
							<ResultsList results={this.state.results} />
						</div>
					</div>
				</div>										
			</div>
		);
	}
}

export default App;
