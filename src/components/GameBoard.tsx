import React, { useEffect } from 'react'
import '../styles/GameBoard.scss'
import { Board } from '../utils/Board'
import { isGameOver, isGameWon } from '../utils/BoardUtils'
import { useRecoilValue } from 'recoil'
import { ThemeState } from '../state/Atoms'
import '../styles/DarkTileStyles.scss'
import '../styles/LightTileStyles.scss'
import BoardTile from './BoardTile'

interface GameBoardProps {
  gameboard: Board
  startGame: boolean
  updateScore: (score: number) => void
  setGameboard: React.Dispatch<React.SetStateAction<Board>>
}

const GameBoard: React.FC<GameBoardProps> = ({
  gameboard,
  startGame,
  updateScore,
  setGameboard,
}) => {
  const theme = useRecoilValue(ThemeState)

  const arrowKeyChecker = (e: KeyboardEvent): void => {
    // block keypresses except refresh
    if (e.code !== 'KeyR') {
      e.preventDefault()
    }

    switch (e.code) {
      case 'ArrowLeft':
        setGameboard({ ...gameboard.move('left') })
        break
      case 'ArrowUp':
        setGameboard({ ...gameboard.move('up') })
        break
      case 'ArrowRight':
        setGameboard({ ...gameboard.move('right') })
        break
      case 'ArrowDown':
        setGameboard({ ...gameboard.move('down') })
        break
      default:
        break
    }
  }

  useEffect(() => {
    if (startGame === true) {
      document.addEventListener('keydown', arrowKeyChecker)
    }

    return (): void => {
      document.removeEventListener('keydown', arrowKeyChecker)
    }
    // eslint-disable-next-line
  }, [startGame])

  useEffect(() => {
    const { board, score } = gameboard

    if (score !== 0) {
      updateScore(gameboard.score)
    }

    if (isGameOver(board)) {
      alert('Game over')
    }

    if (isGameWon(board)) {
      alert('You won!')
    }
    // eslint-disable-next-line
  }, [gameboard, gameboard.board, gameboard.score])

  return (
    <>
      <div className={`gameboard-board gameboard-board-${theme}`}>
        {gameboard?.board?.map((row, rIdx) => (
          <div key={`${rIdx}-${Math.random()}`} className="gameboard-board-row">
            {row.map((r, cIdx) => {
              return (
                <div
                  key={`${cIdx}-${Math.random()}`}
                  className={`underlay underlay-${theme}`}
                >
                  <BoardTile tile={r} rowPos={rIdx} colPos={cIdx} />
                </div>
              )
            })}
          </div>
        ))}
      </div>
      <p>
        <i>Use the arrow keys to combine tiles and get to 2048!</i>
      </p>
    </>
  )
}

export default GameBoard
