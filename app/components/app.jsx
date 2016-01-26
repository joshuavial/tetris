import React, { Component } from 'react'
import SquareBlock from '../game/squareBlock'

console.log('hello (again)')

//display a line, L and a Z
//display blocks in different orientations
//display blocks of different colours

const blocks = []
blocks.push(new SquareBlock(5,5))
console.log(blocks)


const width = window.innerWidth
const height = window.innerHeight

function getBoard (cellsWide, cellsHigh) {
  const board = []
  for (let i = 0; i < cellsHigh; i++) {
    board[i] = []
    for (let j = 0; j < cellsWide; j++) {
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
    
    const cellWidth = 24
    const checkWidth = Math.floor(window.innerWidth / cellWidth)
    const checkHeight = Math.floor(window.innerHeight / cellWidth)
    
    this.state = {
      board: getBoard(checkWidth, checkHeight)
    }
  }
  
  render () {
    //const board = this.state.board
    const elements = this.state.board.map(function (row, rowIndex) {
      return (
        <tr className='row'>
          {
            row.map(function (cell, cellIndex) {
              let styles = {}
              blocks.map(function(block) {
                if (block.atCoordinate(cellIndex, rowIndex)) {
                  styles['background-color'] = block.color
                }
              })
              return <td style={styles}></td>
            })
          }
        </tr>
      )    
    })

    return <div style={divStyle}>
      <table>
        <tbody> { elements } </tbody>
      </table>
    </div>
  } 
}

export default App
