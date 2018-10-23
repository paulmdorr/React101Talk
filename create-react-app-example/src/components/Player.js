import React from 'react'
import './styles/Player.scss'

function Player(props) {
  const {
    playerName, isAI, dice, nextTurn, index, currentPlayer
  } = props
  const showButton = !isAI && (index === currentPlayer)
  const button = <input
    type="button"
    onClick={() => nextTurn()}
    value="Tirar dados"
  />

  return <div className="player">
    <div className="playerName">{ playerName }</div>
    <div>
      { dice.map((elem, key) => (
        <img
          key={key}
          className="dice"
          src={`assets/dice-${elem}.svg`}
          alt={`Dice-${elem}.svg`}
        />
      )) }
    </div>
    { showButton && button }
  </div>
}

export default Player