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
						<p>This is the intro.</p>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12">
						<SearchBox onResults={results => this.setState({ results })} />
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12">
						<div className="well top-margin">
							<ResultsList results={this.state.results} />
						</div>
					</div>
				</div>										
			</div>
		);
	}
}

export default App;
