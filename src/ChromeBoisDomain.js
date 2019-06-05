import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  handleMouseMove = (event) => {
    console.log(this.props);
    console.log(event.clientX, event.clientY)
    drawChromeBoiAtCoords(event.clientX, event.clientY)
  }

  handleClick = () => {
    console.log('click')
    toggleCycling()
  }

  handleKeyPress = (event) => {
    console.log(event.key, 'key press')
    if (event.key == 'a'){
      resize('+')
    }
    else if (event.key === 's') {
      resize('-')
    }
  }

  someFunction = () => {
    if(this.state.isClicked){
      return <div></div>
    }
  }

    // test
    // state = {
    //   isClicked = false
    // }
    /* TODO: Create an event handler which, when fired, invokes the provided
   * `toggleCycling` function with no arguments. Don't forget the click event
   * listener that should fire it!
   */

  /* TODO: Add an event listener to the `<canvas>` element to capture when a key
  /* is pressed. When a key is pressed, an event handler should invoke the the
  /* provided `resize` function with a single argument of either '+' or '-'
  /* if the key pressed was 'a', then it should call `resize` with '+'
  /* if the key pressed was 's', then it should call `resize` with '-'
   */

  render() {
    return (

      <canvas
        onClick={this.handleClick}
        onMouseMove={this.handleMouseMove}
        onKeyUp={this.handleKeyPress}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
