import React, { useState } from 'react';
import './App.css';
import Board from './components/Board';
import Status from './components/Status';
import { calculateWinner } from './components/helper';

const NEW_GAME = [{board : Array(9).fill(null),isXNext: true}]

function App() {
  const [currentMove, setCurrentMove] = useState(0);
  const [history,setHistory] = useState(NEW_GAME);
  const current = history[currentMove];
  console.log(current.board);

  const { winner, winningSquare } = calculateWinner(current.board);

  const handleSquareClick = position => {

    if (current.board[position] || winner){
      return;
    }

    setHistory(prev => {
      const last = prev[prev.length - 1];

      const newBoard = last.board.map((square,pos) => {
        if (pos === position){
          return last.isXNext ? 'X' : 'O';
        }

        return square;
      });

      return prev.concat({board : newBoard, isXNext : !last.isXNext});
    });
    setCurrentMove(prev => prev + 1);
  }
  const newGame = () => {
    setCurrentMove(0);
    setHistory(NEW_GAME);
  }


  return (
    <div className="App">
      <h2 className="app_title">TIC <span>TAC</span> TOE</h2>
      <Board 
      handleSquareClick={handleSquareClick}
      board={current.board}
      winningSquare={winningSquare}
       />
      <Status winner={winner} current={current} />
      <center><button type="button" onClick={newGame} className={`newgame ${winner ? 'active' : ''} `}>Start New Game</button></center>
    </div>
  );
}

export default App;
