import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  handleMouseMove = (event) => {
    drawChromeBoiAtCoords(event.clientX, event.clientY)
  }

  handleMouseClick = (event) => {
    toggleCycling()
  }

  handleKeyPress = (event) => {
    if (event.key === "a") {
      resize('+')
    } else if (event.key === "s") {
      resize('-')
    }
  }

  render() {
    return (
      <canvas
        onKeyDown={this.handleKeyPress}
        onClick={this.handleMouseClick}
        onMouseMove={this.handleMouseMove}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
