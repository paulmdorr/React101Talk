import React from 'react'
import { generateWinnerText } from '../utils'
import './styles/Result.scss'

function Result(props) {
  const { players, showResult } = props

  if (showResult) {
    const winnerText = generateWinnerText(players)

    return (
      <div>
        <div>{ winnerText }</div>
      </div>
    )
  }

  return ''
}

export default Result