import { cloneDeep } from 'lodash'
import { transposeGrid, flipGrid, compare } from './BoardUtils'
import {
  CHOICE_ARR,
  CHOICE_ARR_LEN,
  DEFAULT_GAMEBOARD,
  DEFAULT_ROW_LEN,
} from './Constants'
import { Tile } from './Tile'
import { direction, tBoard, tRow } from './Types'

export class Board {
  board: tBoard
  prevBoard: tBoard
  score: number
  win: boolean
  lose: boolean
  started: boolean
  moved: direction
  isMoving: boolean

  constructor(board?: Board | undefined) {
    if (board) {
      /* eslint-disable */
      this.board = board.board.map(r => r.map(t => t = new Tile(t)))
      this.prevBoard = board.prevBoard.map(r => r.map(t => t = new Tile(t)))
      /* eslint-enable */
      this.score = board.score
      this.win = board.win
      this.lose = board.lose
      this.started = board.started
      this.moved = board.moved
      this.isMoving = board.isMoving
      return
    }
    this.board = [...DEFAULT_GAMEBOARD]
    this.prevBoard = [...DEFAULT_GAMEBOARD]
    this.score = 0
    this.win = false
    this.lose = false
    this.started = false
    this.moved = 'noop'
    this.isMoving = false
  }

  addNewValue = (): void => {
    const valIdx = Math.floor(Math.random() * CHOICE_ARR_LEN)
    const insertPointX = Math.floor(Math.random() * DEFAULT_ROW_LEN)
    const insertPointY = Math.floor(Math.random() * DEFAULT_ROW_LEN)

    if (this.board[insertPointX][insertPointY].value === 0) {
      this.board[insertPointX][insertPointY].value = CHOICE_ARR[valIdx]
      this.board[insertPointX][insertPointY].setNew()
    } else {
      this.addNewValue()
    }
  }

  init = (): this => {
    this.started = true
    this.addNewValue()
    return this
  }

  clear = (): this => {
    this.board = this.board.map((r) => r.map(() => new Tile(undefined)))
    this.score = 0
    this.win = false
    this.lose = false
    return this.init()
  }

  setWin = (): this => {
    this.win = true
    return this
  }

  setLose = (): this => {
    this.lose = true
    return this
  }

  operate = (row: tRow): tRow => {
    row = this.slide(row)
    row = this.combine(row)
    row = this.slide(row)
    return row
  }

  slide = (row: tRow): tRow => {
    let arr = row.filter((val) => val.value)
    const missing = 4 - arr.length
    let zeros = Array(missing).fill(0)
    zeros = zeros.map(() => new Tile(undefined))
    arr = zeros.concat(arr)
    return arr
  }

  combine = (row: tRow): tRow => {
    for (let i = 3; i >= 1; i--) {
      const a = row[i].value
      const b = row[i - 1].value
      if (a === b) {
        row[i].value = a + b
        row[i].combined = true
        this.score += row[i].value
        row[i - 1].value = 0
      }
    }
    return row
  }

  move = (direction: string): this => {
    this.prevBoard = cloneDeep(this.board)
    let flipped = false
    let rotated = false
    let played = true

    // reset tile new, combined, and position values
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        this.board[i][j].reset(i, j)
      }
    }

    switch (direction) {
      case 'up':
        this.board = transposeGrid(this.board)
        this.board = flipGrid(this.board)
        rotated = true
        flipped = true
        break
      case 'down':
        this.board = transposeGrid(this.board)
        rotated = true
        break
      case 'left':
        this.board = flipGrid(this.board)
        flipped = true
        break
      case 'right':
        // no-op needed
        break
      default:
        played = false
    }

    if (played) {
      for (let i = 0; i < 4; i++) {
        this.board[i] = this.operate(this.board[i])
      }

      if (flipped) {
        this.board = flipGrid(this.board)
      }
      if (rotated) {
        this.board = transposeGrid(this.board)
      }
    }

    //set all tile curr positions
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        this.board[i][j].setCurrentPosition(i, j)
      }
    }

    // add tile transition classes
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (this.board[i][j].value) {
          /* eslint-disable */
          switch (direction) {
            case 'up':
              this.board[i][j].attr = `
                ver-u-${this.board[i][j].prevRow - this.board[i][j].curRow} overlay
              `
              break
            case 'down':
              this.board[i][j].attr = `
                ver-d-${this.board[i][j].curRow - this.board[i][j].prevRow} overlay
              `
              break
            case 'left':
              this.board[i][j].attr = `
                hor-l-${this.board[i][j].prevCol - this.board[i][j].curCol} overlay
              `
              break
            default:
              this.board[i][j].attr = `
                hor-r-${this.board[i][j].curCol - this.board[i][j].prevCol} overlay
              `
          }
          /* eslint-enable */
        }
      }
    }

    // if board updated -> add new value
    if (compare(this.board, this.prevBoard)) {
      this.addNewValue()
      this.isMoving = true
    }

    return this
  }
}
