function getData() {
  return {
    players: [
      {
        playerName: 'Paul!',
        isAI: false,
      },
      {
        playerName: 'Mac',
        isAI: true,
      }
    ]
  }
}

function generateDice() {
  return [0, 0, 0, 0, 0].map(
    () => parseInt((Math.random() * 6)) + 1
  ).sort()
}

function calculatePoints(dice) {
  let diceCount = [0,0,0,0,0,0]
  let result = {
    points: 0,
    text: '',
  }
  let reducer = (count, elem) => elem === 2 ? count + 1 : count

  dice.forEach(elem => diceCount[elem-1]++)

  if (diceCount.includes(5)) {
    result = {
      points: 50,
      text: 'Generala',
    }
  } else if (diceCount.includesAll([1,4])) {
    result = {
      points: 30,
      text: 'Poker',
    }
  } else if (diceCount.includesAll([2,3])) {
    result = {
      points: 25,
      text: 'Full',
    }
  } else if (diceCount.includes(3)) {
    result = {
      points: 20,
      text: 'Trio',
    }
  } else if (diceCount.reduce(reducer, 0) === 2) {
    result = {
      points: 15,
      text: 'Doble Par',
    }
  } else if (diceCount.includes(2)) {
    result = {
      points: 10,
      text: 'Par',
    }
  } else {
    result = {
      points: 40,
      text: 'Escalera',
    }
  }

  return result
}

if (!Array.prototype.includesAll) {
  Array.prototype.includesAll = function(arr) {
    return arr.every(elem => this.includes(elem))
  }
}