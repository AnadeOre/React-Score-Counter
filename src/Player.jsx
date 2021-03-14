import React from 'react';
import Counter from './Counter';

function Player({ players, endScore, isReverse }) {
	return players.map((player, index) => (
		<div className='player-row ' key={index}>
			<div key={player.id}>
				<h3 className='player-name'>{player.name}</h3>
			</div>
			<div className='counter-container'>
				<Counter
					id={player.id}
					point={player.points}
					playersArr={players}
					endScore={endScore}
					isReverse={isReverse}
				/>
			</div>
		</div>
	));
}

export default Player;
