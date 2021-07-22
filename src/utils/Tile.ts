export const getInitialTile = (): Tile => new Tile()

export class Tile {
  id: number
  value: number
  curRow: number
  curCol: number
  prevRow: number
  prevCol: number
  combined: boolean
  new: boolean
  attr: string


  constructor() {
    this.id = Math.random()
    this.value = 0
    this.curRow = -1
    this.curCol = -1
    this.prevRow = -1
    this.prevCol = -1
    this.combined = false
    this.new = false
    this.attr = ''
  }

  clear = (): this => {
    this.value = 0
    this.curRow = -1
    this.curCol = -1
    this.prevRow = -1
    this.prevCol = -1
    this.new = true
    return this
  }

  notNew = (): this => {
    this.new = false
    return this
  }
  setNew = (): this => {
    this.new = true
    return this
  }

}