const includesAll = (arr1, arr2) => {
  return arr2.every(elem => arr1.includes(elem))
}
 
module.exports = {
  getData: () => {
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
  },
  generateDice: () => {
    return [0, 0, 0, 0, 0].map(
      () => parseInt((Math.random() * 6)) + 1
    ).sort()
  },
  calculatePoints: (dice) => {
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
    } else if (includesAll(diceCount, [1,4])) {
      result = {
        points: 30,
        text: 'Poker',
      }
    } else if (includesAll(diceCount, [2,3])) {
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
}