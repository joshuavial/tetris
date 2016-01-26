import React, { Component } from 'react'

console.log('working')

const width = window.innerWidth
const height = window.innerHeight

function getBoard (w, h) {
  const board = []
  for (let i = 0; i < h; i++) {
    board[i] = []
    for (let j = 0; j < w; j++) {
      board[i][j] = 0
    }
  }
  return board
}

const divStyle = {
  width: width,
  height: height
}

class App extends Component {
  constructor (props) {
    super(props)
    const width = window.innerWidth
    const height = window.innerHeight
    const cellWidth = 24
    const widthCount = Math.floor(width / cellWidth)
    const heightCount = Math.floor(height / cellWidth)
    
    this.state = {
      board: getBoard(widthCount, heightCount)
    }
  }
  
  render () {
    const board = this.state.board
    const elements = board.map(function (row) {
      return (
        <tr className='row'>
          {
            row.map(function (cell) {
              return <td></td>
            })
          }
        </tr>
      )    
    })
    console.log(board)
    return <div style={divStyle}>
      <table>
        <tbody>
          {
            elements
          }
        </tbody>
      </table>
    </div>
  } 
}

export default App
