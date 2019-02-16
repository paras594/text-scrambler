import React from 'react';

function DisplayBox({ scrambledText }) {
	return <div className="display-box">{scrambledText ? scrambledText : '! Be Crazy !'}</div>;
}

export default DisplayBox;
