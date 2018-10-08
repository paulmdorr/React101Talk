class Game extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      dice: [0, 0, 0, 0, 0],
    }

    this.nextTurn = this.nextTurn.bind(this)
  }

  nextTurn() {
    this.setState({
      dice: generateDice(),
    })
  }

  render() {
    return React.createElement(Player, {
      dice: this.state.dice,
      nextTurn: this.nextTurn,
    })
  }
}

function Player(props) {
  const { dice, nextTurn } = props

  return React.createElement("div", null,
    React.createElement("div", null,
      dice.map(function(elem, key) {
        return React.createElement("img", {
          key: key,
          className: "dice",
          src: "assets/dice-" + elem + ".svg",
        })
      })
    ),
    React.createElement("input", {
      type: "button",
      onClick: () => nextTurn(),
      value: "Tirar dados",
    })
  )
}

ReactDOM.render(
  React.createElement(Game),
  document.getElementById('container')
)