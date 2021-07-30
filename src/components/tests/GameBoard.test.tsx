import React from 'react'
import { cleanup, fireEvent, screen } from '@testing-library/react';
import { renderWithRecoil } from '../../App.test'
import GameBoard from '../GameBoard';
import { Board } from '../../utils/Board';


describe('Test Gameboard', () => {
  let mockFunction = jest.fn()

  afterEach(() => {
    cleanup()
  })

  test('Gameboard is Rendered', async () => {
    renderWithRecoil(
      <GameBoard
        gameboard={new Board}
        startGame={false}
        updateScore={mockFunction}
        setGameboard={mockFunction}
      />
    )
    const boardContainer = document.getElementsByClassName('gameboard-board').item(0)
    expect(boardContainer).toBeInTheDocument()
  })

  test('Game starts correctly with initial tile with value', async () => {
    const b = new Board
    renderWithRecoil(
      <GameBoard
        gameboard={b.init()}
        startGame={true}
        updateScore={mockFunction}
        setGameboard={mockFunction}
      />
    )
    // initial tile can be a 2 || 4
    let containsTwo = false
    b.board.forEach(r => {
      r.some(t => {
        if (t.value === 2) {
          containsTwo = true
        }
      })
    })

    let tileWithVal2
    let tileWithVal4
    if (containsTwo) {
      tileWithVal2 = screen.getAllByText(2)[0]
      expect(tileWithVal2).toBeInTheDocument()
    } else {
      tileWithVal4 = screen.getAllByText(4)[0]
      expect(tileWithVal4).toBeInTheDocument()
    }
  })

  test('Gameboard calls setGameboard when arrow key is hit', async () => {
    const b = new Board
    renderWithRecoil(
      <GameBoard
        gameboard={b.init()}
        startGame={true}
        updateScore={mockFunction}
        setGameboard={mockFunction}
      />
    )
    fireEvent.keyDown(document, { key: 'ArrowLeft', code: 'ArrowLeft' })
    expect(mockFunction).toHaveBeenCalled()
    expect(mockFunction).toHaveBeenCalledTimes(1)
  })
})