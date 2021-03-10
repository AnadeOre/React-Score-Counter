import React from 'react';

function SettingsSet({ endScoreToShow, reverseToShow }) {
	console.log(endScoreToShow, reverseToShow);
	return (
		<div>
			<div className='settings-set'>
				<h3 className='set-text'>Set to:</h3>
				<h5 className='score-texts'>{`End Score: ${endScoreToShow}`}</h5>
				<h5>
					Reverse: <span className='reverse-text'>{`${reverseToShow}`}</span>
				</h5>
			</div>
		</div>
	);
}

export default SettingsSet;
