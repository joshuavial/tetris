import Block from './block'

export default class SquareBlock extends Block {
  constructor(x,y) {
    super(x,y)
    this.color = 'green'
  }

  atCoordinate(x,y) {
    if(x == this.x && y == this.y ||
       x == this.x && y == this.y+1 ||
       x == this.x+1 && y == this.y ||
       x == this.x+1 && y == this.y+1
        ) {
      return true
    }
    return false
  }
}
