import React, { useState } from 'react';

const Counter = props => {
	let { id, point, playersArr, endScore, isReverse } = props;
	const [totalPoints, setTotalPoints] = useState(point);
	const [pointsValue, setPointsValue] = useState(0);

	const updatePlayerPoints = (id, addPoints, playersArray) => {
		const playerToUpdate = playersArray.filter(player => player.id === id);
		playerToUpdate[0].points += addPoints;
		playersArray.forEach(player => {
			if (!isReverse && player.points >= endScore) setWhoWins(playersArray);
			if (isReverse && player.points >= endScore) setWhoWinsReverse(playersArray);
		});
		console.log(playersArray);
	};

	const setWhoWinsReverse = allPlayers => {
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
		alert(`Player ${allPlayers[index].name} won with ${allPlayers[index].points} points!`);
	};

	const setWhoWins = allPlayers => {
		const pointsArray = [];
		allPlayers.map(player => pointsArray.push(player.points));
		let index = 0;
		let value = pointsArray[0];
		for (var i = 0; i < pointsArray.length; i++) {
			if (pointsArray[i] > value) {
				value = pointsArray[i];
				index = i;
			}
		}
		alert(`Player ${allPlayers[index].name} won with ${allPlayers[index].points} points!`);
	};

	const handlePointsSubmit = e => {
		e.preventDefault();
		setTotalPoints(totalPoints + pointsValue);
		updatePlayerPoints(id, pointsValue, playersArr);
		setPointsValue(0);
	};

	return (
		<div className='counter-element container'>
			<h4 className='points-title'>Points: {totalPoints}</h4>
			<div>
				<form onSubmit={handlePointsSubmit}>
					<input
						onChange={e => setPointsValue(e.target.valueAsNumber)}
						type='number'
						className='counter-points'
					/>
				</form>
			</div>
		</div>
	);
};

export default Counter;
