import React from 'react'
import Square from './Square'

const Board = ({board,handleSquareClick,winningSquare}) => {

    const requestSquare = position => {
        const isWinningSquare = winningSquare.includes(position);

        return (
        <Square onclick={() => handleSquareClick(position)}
        value = {board[position]}
        isWinningSquare={isWinningSquare}
        />
        )
    }

    return (
        <div className="board">
            <div className="row">
                {requestSquare(0)}
                {requestSquare(1)}
                {requestSquare(2)}
            </div> 
            <div className="row">
                {requestSquare(3)}
                {requestSquare(4)}
                {requestSquare(5)}
            </div> 
            <div className="row">
                {requestSquare(6)}
                {requestSquare(7)}
                {requestSquare(8)}
            </div> 
        </div>
    )
}

export default Board
