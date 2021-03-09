import React, { useState } from 'react';
import Player from './Player';
import PlayerForm from './PlayerForm';

function PlayerList() {
	const [players, setPlayers] = useState([]);

	const addPlayer = player => {
		const newPlayers = [player, ...players];
		setPlayers(newPlayers);
	};

	return (
		<div className='container'>
			<h1>Score Counter with React!</h1>
			<PlayerForm onSubmit={addPlayer} />
			<Player players={players} />
		</div>
	);
}

export default PlayerList;
