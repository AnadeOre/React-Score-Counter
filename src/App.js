import React, { useState, useEffect } from 'react';
import './App.css';
import GameSettings from './GameSettings';
import PlayerList from './PlayerList';
import SettingsSet from './SettingsSet'

function App() {
  //Tab name
  useEffect(() => {
    document.title = "Score Counter"
  }, [])

  //Variables for game settings
  const [endScore, setEndScore] = useState(500);
  const [isReverse, setIsReverse] = useState(false);

  const handleSettings = settings => {
    setEndScore(parseInt(settings.scoreToFinish));
    setIsReverse(settings.isItReverse);
  }

  return (
    <div className="overall-container">
      <div className="setting-container">
        <GameSettings onSubmit={handleSettings} />
        <SettingsSet endScoreToShow={endScore} reverseToShow={isReverse} />
      </div>
      <div className="App viewport">
        <PlayerList endScore={endScore} isReverse={isReverse} />
      </div>
    </div>
  );
}

export default App;
