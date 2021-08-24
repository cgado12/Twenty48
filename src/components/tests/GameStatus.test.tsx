import React from 'react';
import { cleanup, fireEvent, screen } from '@testing-library/react';
import GameStatus from '../GameStatus';
import { renderWithRecoil } from '../../App.test';



describe("Test Game Win|Fail", () => {
  let mockFunction = jest.fn()
  afterEach(() => {
    cleanup()
  })

  test("Initial Render Game Won", async () => {
    const win = "You Won!"
    const restart = "Restart"
    const keepGoing = "Keep Going!"

    renderWithRecoil(
      <GameStatus
        isGameWon={false}
        reset={mockFunction}
        keepGoing={mockFunction}
        renderForLose={false}
      />
    )

    const gameWonTxt = screen.getByText(win)
    const restartBtn = screen.getByText(restart)
    const keepGoingBtn = screen.getByText(keepGoing)

    expect(gameWonTxt).toBeInTheDocument()
    expect(restartBtn).toBeInTheDocument()
    expect(keepGoingBtn).toBeInTheDocument()
    expect(document.getElementsByClassName("game-won-container").item(0)).toBeInTheDocument()

    fireEvent.click(restartBtn)
    expect(mockFunction).toHaveBeenCalled()

    fireEvent.click(keepGoingBtn)
    expect(mockFunction).toHaveBeenCalled()
    expect(mockFunction).toHaveBeenCalledTimes(2)
  })

  test("Test Render Game Over", async () => {
    const lose = "Game Over!"
    const tryAgain = "Try Again?"

    renderWithRecoil(
      <GameStatus
        isGameWon={false}
        reset={mockFunction}
        keepGoing={mockFunction}
        renderForLose={true}
      />
    )

    const gameOverText = screen.getByText(lose)
    const tryAgainBtn = screen.getByText(tryAgain)

    expect(gameOverText).toBeInTheDocument()
    expect(tryAgainBtn).toBeInTheDocument()
    expect(document.getElementsByClassName("game-won-container").item(0)).toBeInTheDocument()

    fireEvent.click(tryAgainBtn)
    expect(mockFunction).toHaveBeenCalled()
    expect(mockFunction).toHaveBeenCalledTimes(1)
  })
})