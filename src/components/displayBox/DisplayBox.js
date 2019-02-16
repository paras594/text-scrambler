import React, { Component } from 'react';

class DisplayBox extends Component {
	render() {
		return (
			<textarea
				className="display-box"
				cols="30"
				rows="10"
				placeholder="scrambled text will appear here..."
			/>
		);
	}
}

export default DisplayBox;
