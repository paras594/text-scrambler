import React, { Component } from 'react';
import DisplayBox from './components/displayBox/DisplayBox';
import Header from './components/header/Header';
import TextForm from './components/textForm/TextForm';

class App extends Component {
	state = {
		scrambledText: ''
	};

	randomLetter = word => {
		return word[Math.floor(Math.random() * word.length)];
	};

	scramble = word => {
		const wordsArr = word.split('');
		const scrambled = [];

		while (scrambled.length !== word.length) {
			const letter = this.randomLetter(wordsArr);
			scrambled.push(letter);
			wordsArr.splice(wordsArr.indexOf(letter), 1);
		}

		return scrambled.join('');
	};

	handleTextChange = text => {
		this.setState({
			scrambledText: this.scramble(text)
		});
	};

	render() {
		return (
			<div>
				<Header />
				<TextForm handleTextChange={this.handleTextChange} />
				<DisplayBox scrambledText={this.state.scrambledText} />
			</div>
		);
	}
}

export default App;
