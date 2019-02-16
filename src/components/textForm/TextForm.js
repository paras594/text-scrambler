import React, { Component } from 'react';

class TextForm extends Component {
	state = {
		text: ''
	};

	handleChange = e => {
		this.setState({
			text: e.target.value
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.handleTextChange(this.state.text);
	};

	render() {
		return (
			<div className="text-form">
				<h2 className="text-form__heading">Lets Scramble The Text..!!</h2>
				<form onSubmit={this.handleSubmit}>
					<input
						onChange={this.handleChange}
						value={this.state.text}
						type="text"
						placeholder="enter your text"
					/>
					<br />
					<button>scramble!</button>
				</form>
			</div>
		);
	}
}

export default TextForm;
