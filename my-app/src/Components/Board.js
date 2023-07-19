import React from 'react'
import Square from './Square'

export default function Board ({ xIsNext, squares, onPlay}) {
    const calculateWinner = (squares)=>{
        const line = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        for(let i=0; i<line.length; i++){
            const [a,b,c] = line[i];
            if( squares[a] && squares[a] === squares[b] && squares[b] === squares[c] ){
                return squares[a];
            }
        }
    }

    const handleClick = (i) =>{
        if(calculateWinner(squares) || squares[i]) return;
        const nextSquares = squares.slice();
        // console.log("nextSquares:",nextSquares)
        if(xIsNext){
            nextSquares[i]='X' ;
        }
        else{
            nextSquares[i]='O';
        }
        onPlay(nextSquares);
        
    }

    

    const winner = calculateWinner(squares);
    let status;
    
    if(winner){
        status = 'Winner: ' + winner;
    } 
    else if(squares.includes(null) && !winner){
        status = 'Next Player: ' + ( xIsNext ? "X" : "O" );
    }
    else{
        status = 'Draw';
    }


  return (
    <>
    <div className='board'>
        <div className="status">{status}</div>
        <div className='board-row' style={{display:'flex'}} >
            <Square value={squares[0]} onSquareClick={()=> handleClick(0)} className={'text-flicker-in-glow'} />
            <Square value={squares[1]} onSquareClick={()=> handleClick(1)} className={'scale-up-center'} />
            <Square value={squares[2]} onSquareClick={()=> handleClick(2)} className={'bounce-in-top'} />
        </div>
    
        <div className='board-row' style={{display:'flex'}} >
            <Square value={squares[3]} onSquareClick={()=> handleClick(3)} className={'roll-in-blurred-left'} />
            <Square value={squares[4]} onSquareClick={()=> handleClick(4)} className={'rotate-center'}/>
            <Square value={squares[5]} onSquareClick={()=> handleClick(5)} className={'swirl-in-top-fwd'}/>
        </div>
   
        <div className='board-row' style={{display:'flex'}} >
            <Square value={squares[6]} onSquareClick={()=> handleClick(6)} className={'bounce-in-fwd'}/>
            <Square value={squares[7]} onSquareClick={()=> handleClick(7)} className={'slit-in-diagonal-2'}/>
            <Square value={squares[8]} onSquareClick={()=> handleClick(8)} className={'slide-in-elliptic-right-fwd'}/>
        </div>
        {winner && <div className='winnerBanner bounce-in-top'>{status}</div> }
        {status==='Draw' && <div className='winnerBanner bounce-in-top'>{status}</div> }
    </div>
    </>
  )
}
