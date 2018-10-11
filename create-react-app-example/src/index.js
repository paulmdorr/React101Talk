import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Game from './components/Game'
import * as serviceWorker from './serviceWorker'
import { getData } from './utils'

const props = getData()

ReactDOM.render(
  <Game {...props}/>,
  document.getElementById('container')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
