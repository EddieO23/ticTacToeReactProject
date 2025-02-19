import React from 'react';

function GameOver({ winner, onRestart }) {
  return (
    <div id='game-over'>
      <h2>Game over!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>It's a draw</p>}
      <p>
        <button onClick={onRestart}>Run it again!</button>
      </p>
    </div>
  );
}

export default GameOver;
