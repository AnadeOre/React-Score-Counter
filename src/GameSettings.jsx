import React, { useState } from 'react';

function GameSettings(props) {
	const [endScoreInput, setEndScoreInput] = useState('');
	const [reverseInput, setReverseInput] = useState(false);

	const setSettings = e => {
		e.preventDefault();
		props.onSubmit({ scoreToFinish: endScoreInput, isItReverse: reverseInput });
		setEndScoreInput('');
	};

	const handleChangeEndScore = e => {
		setEndScoreInput(e.target.value);
	};

	const handleChangeCheckbox = e => {
		setReverseInput(e.target.checked);
	};

	return (
		<div>
			<h2 className='settings-title'>Game Settings</h2>
			<form className='settings-form' onSubmit={setSettings}>
				<label className='checkbox-label'>
					Reverse:
					<input
						className='checkbox'
						type='checkbox'
						defaultChecked={reverseInput}
						onChange={handleChangeCheckbox}
					/>
				</label>
				<input
					type='number'
					onChange={handleChangeEndScore}
					className='points-input'
					value={endScoreInput}
					placeholder='Score to finish'
				/>
			</form>
		</div>
	);
}

export default GameSettings;
