import React, { Component } from 'react'
import { generateDice, calculatePoints } from '../utils'
import './styles/Game.scss'
import Player from './Player'
import Result from './Result'

class Game extends Component {
  constructor(props) {
    super(props)
    const { players } = props

    this.state = {
      players: players.map(player => ({
        ...player,
        dice: [1, 1, 1, 1, 1],
        result: {
          points: 0,
          text: '',
        },
      })),
      currentPlayer: 0,
      showResult: false,
    }

    this.nextTurn = this.nextTurn.bind(this)
  }

  componentDidUpdate() {
    const { players, currentPlayer } = this.state

    if (players[currentPlayer].isAI) {
      setTimeout(() => {
        this.nextTurn()
      }, 500)
    }
  }

  nextTurn() {
    this.setState(prevState => {
      let players = [...prevState.players]
      let lastPlayer = prevState.currentPlayer === players.length - 1
      let nextPlayer = !lastPlayer ? prevState.currentPlayer + 1 : 0
      let dice = generateDice()

      players[prevState.currentPlayer] = {
        ...players[prevState.currentPlayer],
        dice,
        result: calculatePoints(dice),
      }

      return {
        players,
        currentPlayer: nextPlayer,
        showResult: nextPlayer === 0,
      }
    })
  }

  render() {
    const playersElements = this.state.players.map(
      (playerProps, index) => {
        playerProps = {
          ...playerProps,
          key: index,
          nextTurn: this.nextTurn,
          index,
          currentPlayer: this.state.currentPlayer,
        }

        return <Player {...playerProps} />
      }
    )

    return <div className="game">
      { playersElements }
      <Result
        players={this.state.players}
        showResult={this.state.showResult}
      />
    </div>
  }
}

export default Game
