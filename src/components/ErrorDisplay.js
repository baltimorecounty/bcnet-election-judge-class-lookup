import React, { Component } from 'react';

class ErrorDisplay extends Component {
	render() {
		if (!this.props.message) return (<span />);

		return (
			<div class="alert-warning" role="alert">
				<h2>Warning:</h2>
				<p>{this.props.message}</p>
			</div>
		);
	}
}

export { ErrorDisplay };
