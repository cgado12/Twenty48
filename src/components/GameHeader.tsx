import React from 'react'
import { IScores } from '../utils/Types'
import { useRecoilValue } from 'recoil'
import { ThemeState } from '../state/Atoms'
import '../styles/GameHeader.scss'

interface GameHeaderProps {
  scores: IScores,
  startGame: boolean,
  handleStartGame: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  removeBestScore: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const GameHeader: React.FC<GameHeaderProps> = ({
  scores,
  startGame,
  handleStartGame,
  removeBestScore
}) => {

  const theme = useRecoilValue(ThemeState)

  return (
    <div className="gameboard-header">

      <div className={`gameboard-header-c1 gameboard-header-c1-${theme}`}>
        <h1>Twenty</h1>
        <h1>Forty</h1>
        <h1>Eight</h1>
      </div>

      <div className="gameboard-header-c2">
        <div className={`score score-${theme}`}>
          <h4>
            Score
          </h4>
          <h2>
            {scores.score}
          </h2>
        </div>
        <div
          className={`new-game new-game-${theme}`}
          onClick={handleStartGame}
        >
          <span className={`span-${theme}`}>{startGame ? "Restart" : "New Game"} </span>
        </div>
      </div>

      <div className="gameboard-header-c3">
        <div className={`best-score best-score-${theme}`}>
          <h4>
            Best Score
          </h4>
          <h2>
            {scores.bestScore}
          </h2>
        </div>
        <div
          className={`clear clear-${theme}`}
          onClick={removeBestScore}
        >
          <span className={`span-${theme}`}>Clear</span>
        </div>
      </div>

    </div>
  )
}

export default GameHeader