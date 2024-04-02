import { vi } from 'vitest'
import { cleanup, fireEvent, screen } from '@testing-library/react';
import { renderWithRecoil } from '../../App.test'
import GameHeader from '../GameHeader';
import { initialScores } from '../../utils/Types';

describe('Test Gameboard Header', () => {
  let mockFunction = vi.fn()

  beforeEach(() => {
    renderWithRecoil(
      <GameHeader
        scores={initialScores}
        startGame={false}
        handleStartGame={mockFunction}
        removeBestScore={mockFunction}
      />
    )
  })

  afterEach(() => {
    cleanup()
  })

  test('Render the gameboard header', async () => {
    const twenty = screen.getByText("Twenty");
    const forty = screen.getByText("Forty");
    const eight = screen.getByText("Eight");

    expect(twenty).toBeInTheDocument();
    expect(forty).toBeInTheDocument();
    expect(eight).toBeInTheDocument();
  })

  test('button clicks are functional', async () => {
    const newGameBtn = screen.getAllByText('New Game')[0]
    fireEvent.click(newGameBtn)
    expect(mockFunction).toHaveBeenCalled()

    const clearBtn = screen.getAllByText('Clear')[0]
    fireEvent.click(clearBtn)
    expect(mockFunction).toHaveBeenCalled()
    expect(mockFunction).toHaveBeenCalledTimes(2)
  })
})