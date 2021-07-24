import { tBoard } from './Types'
import { cloneDeep } from 'lodash'
import { DEFAULT_GAMEBOARD, id } from './Constants'

export const compare = (a: tBoard, b: tBoard): boolean => {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (a[i][j].value !== b[i][j].value) {
        return true
      }
    }
  }
  return false
}

export const flipGrid = (grid: tBoard): tBoard => {
  return grid.map((r) => r.reverse())
}

export const transposeGrid = (grid: tBoard): tBoard => {
  // prefers const error
  // eslint-disable-next-line
  let newGrid = cloneDeep(DEFAULT_GAMEBOARD);
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      newGrid[i][j] = grid[j][i]
    }
  }
  return newGrid
}

export const isGameWon = (board: tBoard): boolean => {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (board[i][j].value === 2048) {
        return true
      }
    }
  }
  return false
}

export const isGameOver = (board: tBoard): boolean => {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (board[i][j].value === 0) {
        return false
      }
      if (i !== 3 && board[i][j].value === board[i + 1][j].value) {
        return false
      }
      if (j !== 3 && board[i][j].value === board[i][j + 1].value) {
        return false
      }
      if (i !== 0 && board[i][j].value === board[i - 1][j].value) {
        return false
      }
      if (j !== 0 && board[i][j].value === board[i][j - 1].value) {
        return false
      }
    }
  }
  return true
}

export const getColorId = (rValue: number): string => {
  switch (rValue) {
    case 0:
      return ''
    case 2:
      return id.TWO
    case 4:
      return id.FOUR
    case 8:
      return id.EIGHT
    case 16:
      return id.SIXTEEN
    case 32:
      return id.THIRYTWO
    case 64:
      return id.SIXTYFOUR
    case 128:
      return id.ONETWENTYEIGHT
    case 256:
      return id.TWOFIFTYSIX
    case 512:
      return id.FIVETWELVE
    case 1024:
      return id.TENTWENTYFOUR
    case 2048:
    default:
      return id.TWENTYFORTYEIGHT
  }
}
