import React from 'react'
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

export default Result
