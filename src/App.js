import React, { Component } from 'react';
import { ElectionJudgeList, ErrorDisplay, SearchBox } from './components';
import Urls from './constants/Urls';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			electionJudges: [],
			errorMessage: '',
		}

		this.handleSearchClick = this.handleSearchClick.bind(this);
	}

	handleSearchClick(searchTerm, callback) {		
		if (!searchTerm || !searchTerm.trim().length) {
			return;
		}

		fetch(`${Urls.search}/${searchTerm}`)
			.then(results => results.json())
			.then(jsonResults => this.setState({ 
				electionJudges: jsonResults,
				errorMessage: '',
			}))
			.then(() => callback())
			.catch(() => { 
				this.setState({ errorMessage: 'There was a problem communicating with the server. Please try again later.' });
				callback();
			});
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
						<ErrorDisplay message={this.state.errorMessage} />
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12">
						<SearchBox 
							onResults={electionJudges => this.setState({ electionJudges })} 
							onClick={this.handleSearchClick} 
							placeholder="Search by first name, last name, phone, or email"
							buttonCaption="Search!" />
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12">
						<div className="top-margin">
							<ElectionJudgeList results={this.state.electionJudges} />
						</div>
					</div>
				</div>										
			</div>
		);
	}
}

export default App;
