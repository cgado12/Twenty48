import React, { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { ThemeState } from '../state/Atoms'
import Confetti from 'react-dom-confetti'
import '../styles/GameWon.scss'
import { confettiConfig } from '../utils/Constants'
import { useEffect } from 'react'

interface GameWonProps {
  isGameWon: boolean
  reset: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  keepGoing: () => void
  renderForLose: boolean
}

const GameWon: React.FC<GameWonProps> = ({
  isGameWon,
  reset,
  keepGoing,
  renderForLose,
}) => {
  const theme = useRecoilValue(ThemeState)
  const [gameWon, setGameWon] = useState(isGameWon)
  const title = renderForLose ? 'Game Over!' : 'You Won!'
  const btnText = renderForLose ? 'Try Again' : 'Restart'

  useEffect(() => {
    setTimeout(() => {
      setGameWon(true)
    }, 500)
  }, [])

  return (
    <div className="game-won-container">
      <div className="game-won-container-box">
        <h3 className="game-won-container-text">{title}</h3>
        <div className="button-container">
          <div className={`game-won-btn game-won-btn-${theme}`} onClick={reset}>
            <span className={`span-${theme}`}>{btnText}</span>
          </div>

          {!renderForLose && (
            <>
              <Confetti active={gameWon} config={confettiConfig} />

              <div
                className={`game-won-btn game-won-btn-${theme}`}
                onClick={keepGoing}
              >
                <span className={`span-${theme}`}>Keep Going!</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default GameWon
