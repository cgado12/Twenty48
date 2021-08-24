// eslint-disable-next-line
import React from 'react'
import { Board } from '../Board'
import { cleanup } from '@testing-library/react'
import { DEFAULT_GAMEBOARD } from '../Constants'

// eslint-disable
describe('Test Board Class', () => {
  let testBoard: Board

  beforeEach(() => {
    testBoard = new Board(undefined)
  })

  afterEach(() => {
    cleanup()
  })

  test('Test Initial Empty Board Class', async () => {
    expect(testBoard).toBeInstanceOf(Board)
    expect(testBoard.board).toEqual([...DEFAULT_GAMEBOARD])
    expect(testBoard.prevBoard).toEqual([...DEFAULT_GAMEBOARD])
    expect(testBoard.score).toEqual(0)
    expect(testBoard.win).toEqual(false)
    expect(testBoard.lose).toEqual(false)
    expect(testBoard.started).toEqual(false)
    expect(testBoard.moved).toEqual('noop')
    expect(testBoard.isMoving).toEqual(false)
  })

  test('Test Load Board With Value', async () => {
    const testVal = 5
    const testScore = 9000
    const testStarted = true
    testBoard.board[0][0].value = testVal
    testBoard.score = testScore
    testBoard.started = testStarted

    const loadedBoard = new Board(testBoard)
    expect(loadedBoard.board[0][0].value).toEqual(testVal)
    expect(loadedBoard.score).toEqual(testScore)
    expect(loadedBoard.started).toEqual(testStarted)
  })

  test('Test Board Class Functions', async () => {
    // init board and check that some tile is not 0
    testBoard = new Board(undefined)
    testBoard = testBoard.init()
    expect(testBoard.board.some((r) => r.some((t) => t.value !== 0))).toBe(true)

    // expect some value at the end of one of the rows
    testBoard = testBoard.move('right')
    expect(
      testBoard.board.some((row) => {
        return row.some((tile, idx) => {
          if (idx === 3 && tile.value !== 0) {
            return true
          }
          return false
        })
      }),
    ).toBe(true)

    // expect some value to be at the bottom of the board
    testBoard = testBoard.move('down')
    expect(
      testBoard.board.some((row, index) => {
        return row.some((tile) => {
          if (index === 3 && tile.value !== 0) {
            return true
          }
          return false
        })
      }),
    ).toBe(true)

    // expect some value at the begining of one of the rows
    testBoard = testBoard.move('left')
    expect(
      testBoard.board.some((row) => {
        return row.some((tile, idx) => {
          if (idx === 0 && tile.value !== 0) {
            return true
          }
          return false
        })
      }),
    ).toBe(true)

    // expect some value at the top of the board
    testBoard = testBoard.move('up')
    expect(
      testBoard.board.some((row, index) => {
        return row.some((tile) => {
          if (index === 0 && tile.value !== 0) {
            return true
          }
          return false
        })
      }),
    ).toBe(true)

    // expect no changes
    const prevBoard: Board = testBoard
    testBoard = testBoard.move('noop')
    testBoard = testBoard.move('no-direciton')
    expect(prevBoard).toEqual(testBoard)

    // expect only 1 value on the board after clearing
    testBoard = testBoard.clear()
    let valuesInBoard = 0
    testBoard.board.forEach((row) =>
      row.forEach((t) => {
        if (t.value > 0) {
          valuesInBoard += 1
        }
      }),
    )
    expect(valuesInBoard).toBe(1)

    testBoard = testBoard.setWin()
    expect(testBoard.win).toBe(true)

    testBoard = testBoard.setLose()
    expect(testBoard.lose).toBe(true)
  })
})
// eslint-enable
