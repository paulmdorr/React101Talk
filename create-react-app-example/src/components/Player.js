import React from 'react'
import PropTypes from 'prop-types'
import './styles/Player.scss'

function Player(props) {
  const {
    playerName, isAI, dice, nextTurn, index, currentPlayer
  } = props

  function showButton() {
    if (!isAI && (index === currentPlayer)) {
      return <input
        type="button"
        onClick={() => nextTurn()}
        value="Tirar dados"
      />
    }
  }

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
    { showButton() }
  </div>
}

Player.propTypes = {
  playerName: PropTypes.string.isRequired,
  isAI: PropTypes.bool,
  dice: PropTypes.arrayOf(PropTypes.number).isRequired,
  nextTurn: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  currentPlayer: PropTypes.number.isRequired,
}

Player.defaultProps = {
  isAI: false,
}

export default Player
