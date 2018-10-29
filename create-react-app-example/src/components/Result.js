import React from 'react'
import PropTypes from 'prop-types'
import { generateWinnerText } from '../utils'
import './styles/Result.scss'

function Result(props) {
  const { players, showResult } = props

  if (showResult) {
    const winnerText = generateWinnerText(players)

    return <div className="result">
      { winnerText }
    </div>
  }

  return ''
}

Result.propTypes = {
  players: PropTypes.array.isRequired,
  showResult: PropTypes.bool.isRequired,
}

export default Result
