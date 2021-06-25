import React from 'react'

const Square = ({onclick,value,isWinningSquare}) => {
    return (
        <button type="button" 
        onClick = {onclick}
        className={`${isWinningSquare ? 'winning' : ''} ${value === 'X' ? 'text-blue' : 'text-orange'}`}
        >{value}</button>
    )
}

export default Square