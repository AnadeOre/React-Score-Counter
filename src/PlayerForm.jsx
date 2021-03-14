import React, { useState } from 'react';

function PlayerForm(props) {
	const [inputName, setInputName] = useState('');
	const [inputPoints, setInputPoints] = useState(0);

	const handleSubmit = e => {
		e.preventDefault();

		props.onSubmit({ name: inputName, id: Math.floor(Math.random() * 10000), points: inputPoints });

		setInputName('');
		setInputPoints(0);
	};

	const handleNameChange = e => {
		setInputName(e.target.value);
	};

	return (
		<div>
			<form className='player-form' onSubmit={handleSubmit}>
				<div className='player-input container'>
					<input
						className='inner-input name-input'
						type='text'
						placeholder='Add a player'
						value={inputName}
						onChange={handleNameChange}
						maxLength='12'
					/>
					<button className='player-button'>Add Player</button>
				</div>
			</form>
		</div>
	);
}

export default PlayerForm;
