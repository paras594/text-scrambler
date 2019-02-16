import React, { Component } from 'react';

class TextForm extends Component {
	render() {
		return (
			<div className="text-form">
				<h2 className="text-form__heading">Lets Scramble The Text..!!</h2>
				<form>
					<input type="text" placeholder="enter your text" />
					<br />
					<button>scramble!</button>
				</form>
			</div>
		);
	}
}

export default TextForm;
