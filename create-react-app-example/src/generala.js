'use strict'

class Game extends React.Component {
  constructor(props) {
    super(props)
    const { players } = props

    this.state = {
      players: players.map(player => ({
        ...player,
        dice: [0, 0, 0, 0, 0],
        result: {
          points: 0,
          text: '',
        },
      })),
      currentPlayer: 0,
    }

    this.nextTurn = this.nextTurn.bind(this)
  }

  nextTurn() {
    this.setState(prevState => {
      let players = [...prevState.players]
      let lasPlayer = prevState.currentPlayer < players.length - 1
      let nextPlayer = lasPlayer ? prevState.currentPlayer + 1 : 0
      let dice = generateDice()

      players[prevState.currentPlayer] = {
        ...players[prevState.currentPlayer],
        dice,
        result: calculatePoints(dice),
      }

      return { players, currentPlayer: nextPlayer }
    })
  }

  componentDidUpdate() {
    const { players, currentPlayer } = this.state

    if (players[currentPlayer].isAI) {
      setTimeout(() => {
        this.nextTurn()
      }, 500)
    }
  }

  render() {
    const playersElements = this.state.players.map(
      (playerProps, index) => {
        const playerProps = {
          ...playerProps,
          key: index, 
          nextTurn: this.nextTurn,
          index,
          currentPlayer: this.state.currentPlayer,
        }
        
        return <Player {...playerProps} />
      }
    )

    return playersElements
  }
}

function Player(props) {
  const {
    playerName, isAI, dice, nextTurn, index, currentPlayer
  } = props
  const showButton = !isAI && (index === currentPlayer)
  const button = <input type="button" onClick={() => nextTurn() } value="Tirar dados" />

  return (
    <div>
      <div>{ playerName }</div>
      <div>
        { dice.map((elem, key) => (
          <img key={key} className="dice" src={ `assets/dice-${elem}.svg` } />
        )) }
      </div>
      { showButton && button }
    </div>
  )
}

let props = getData()

ReactDOM.render(
  <Game {...props} />,
  document.getElementById('container')
)