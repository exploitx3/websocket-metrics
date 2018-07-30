/* eslint-disable import/no-named-as-default */
import {NavLink, Route, Switch} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import WSReader from './websocket-reader'
import PropTypes from 'prop-types'
import React from 'react'
import {hot} from 'react-hot-loader'
import '../styles/styles.scss'


// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    const activeStyle = { color: 'blue' }
    return (
      <div>
        <WSReader></WSReader>
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.element
}

export default hot(module)(App)
