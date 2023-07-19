import React, { useState } from 'react'
import Board from './Components/Board'
import './animationCss/animations.css'
import './App.css'

export default function App() {

  const [history, setHistory] = useState([Array(9).fill(null)]);  
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove%2===0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  const jumpto = (nextMove) => {
    setCurrentMove(nextMove)
  }
  const moves = history.map((squares, move) =>{
    let description;
    if(move>0){
      description = 'Go to move #'+ move;
    }
    else{
      description = 'Go to game start';
    }
    return(
      <li key={move}>
        <button className='historyButton' onClick={()=>jumpto(move)} >{description}</button>
      </li>
    );
  } );
  

  return ( 
    <>
      <div className='mainBox'>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      <ol>{moves}</ol>
      </div>
    </>
  )
}
