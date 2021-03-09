import React, { useState } from 'react';

const Counter = props => {
	let { id, point, playersArr } = props;
	console.log(playersArr);
	console.log(point);
	const [totalPoints, setTotalPoints] = useState(point);

	const updatePlayerPoints = (id, addPoints, playersArray) => {
		const playerToUpdate = playersArray.filter(player => player.id === id);
		playerToUpdate[0].points += addPoints;
		playersArray.forEach(player => {
			if (player.points >= 500) setWhoWins(playersArray);
		});
	};

	const setWhoWins = allPlayers => {
		const pointsArray = [];
		allPlayers.map(player => pointsArray.push(player.points));
		let index = 0;
		let value = pointsArray[0];
		for (var i = 0; i < pointsArray.length; i++) {
			if (pointsArray[i] < value) {
				value = pointsArray[i];
				index = i;
			}
		}
		alert(`Player ${allPlayers[index].name} won!`);
	};

	const handlePointsSubmit = e => {
		e.preventDefault();
		const morePoints = e.target[0].valueAsNumber;
		setTotalPoints(totalPoints + morePoints);
		updatePlayerPoints(id, morePoints, playersArr);
	};

	return (
		<div className='counter-element'>
			<h4 className='points-title'>Points: {totalPoints}</h4>
			<div>
				<form onSubmit={handlePointsSubmit}>
					<input type='number' className='counter-points' />
				</form>
			</div>
		</div>
	);
};

export default Counter;
