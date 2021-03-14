import React, { useState } from 'react';
import Player from './Player';
import PlayerForm from './PlayerForm';

function PlayerList({ endScore, isReverse }) {
	const [players, setPlayers] = useState([]);

	const addPlayer = player => {
		const newPlayers = [player, ...players];
		setPlayers(newPlayers);
	};

	return (
		<div className='container'>
			<h1>Score Counter!</h1>
			<PlayerForm onSubmit={addPlayer} />
			<Player players={players} endScore={endScore} isReverse={isReverse} />
		</div>
	);
}

export default PlayerList;
