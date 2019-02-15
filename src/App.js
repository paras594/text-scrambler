import React, { Component } from 'react';
import DisplayBox from './components/displayBox/DisplayBox';
import Header from './components/header/Header';
import TextForm from './components/textForm/TextForm';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<TextForm />
				<DisplayBox />
			</div>
		);
	}
}

export default App;
