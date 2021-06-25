import React from 'react'

const Status = ({winner, current}) => {
    const noMovesLeft = current.board.every(el => el !== null);

    return (
        <div className="status">
            {winner && ( 
            <>
                <h3 className="result">Winner is <span className={winner === 'X'?'text-blue':'text-orange'}>{winner}</span></h3>
            </>
            )}
            {!winner && !noMovesLeft && (
            <>
                <h3 className="result">Next Player is <span className={current.isXNext?'text-blue':'text-orange'}>{current.isXNext ? 'X' : 'O'}</span></h3>
            </>
            )}
            {!winner && noMovesLeft && (
                <>
                <h3 className="result">Match Tie...</h3>
                </>
            )}
        </div>
    )
}

export default Status