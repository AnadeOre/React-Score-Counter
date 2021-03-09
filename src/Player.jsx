import React from 'react';
import Counter from './Counter';

function Player({ players }) {
	return players.map((player, index) => (
		<div className='player-row' key={index}>
			<div key={player.id} className='player-name'>
				<h3>{player.name}</h3>
			</div>
			<div className='counter-container'>
				<Counter id={player.id} point={player.points} playersArr={players} />
			</div>
		</div>
	));
}

export default Player;
