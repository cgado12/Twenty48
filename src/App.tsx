import React, { useEffect, useState } from 'react'
import './styles/App.scss'
import GameBoard from './components/GameBoard'
import GameHeader from './components/GameHeader'
import { BESTSCORE, GAMESTATE, ThemeType } from './utils/Constants'
import { initialScores, IScores } from './utils/Types'
import { Board } from './utils/Board'
import { useRecoilValue } from 'recoil'
import { ThemeState } from './state/Atoms'
import './styles/MobileStyle.scss'
import { useSwipeable } from 'react-swipeable'
import { isGameOver, isGameWon } from './utils/BoardUtils'
import GameStatus from './components/GameStatus'
import Settings from './components/Settings'

const App: React.FC = () => {
  const theme = useRecoilValue<ThemeType>(ThemeState)

  const [gameboard, setGameboard] = useState<Board>(() => {
    const storedBoard = localStorage.getItem(GAMESTATE)
    return storedBoard !== '' && storedBoard !== null
      ? new Board(JSON.parse(storedBoard))
      : new Board(undefined)
  })
  const [startGame, setStartGame] = useState<boolean>(gameboard.started)

  const [scores, setScores] = useState<IScores>(() => {
    const bs = localStorage.getItem(BESTSCORE)
    return {
      ...initialScores,
      bestScore: !bs ? initialScores.bestScore : bs,
    }
  })

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      setGameboard({ ...gameboard.move('left') })
    },
    onSwipedUp: () => {
      setGameboard({ ...gameboard.move('up') })
    },
    onSwipedRight: () => {
      setGameboard({ ...gameboard.move('right') })
    },
    onSwipedDown: () => {
      setGameboard({ ...gameboard.move('down') })
    },
  })
  const useSwipeHandlers = startGame ? swipeHandlers : {}

  useEffect(() => {
    const setTileSizeOnResize = (): void => {
      const tile = document.getElementById('board-tile')
      const tileWidth = tile?.offsetWidth
      const tileHeight = tile?.offsetHeight
      if (tileWidth) {
        document.documentElement.style.setProperty(
          '--tile-width',
          `${tileWidth}px`,
        )
        document.documentElement.style.setProperty(
          '--tile-height',
          `${tileHeight}px`,
        )
      }
    }
    window.addEventListener('resize', setTileSizeOnResize)
    setTileSizeOnResize()
    return (): void => {
      window.removeEventListener('resize', setTileSizeOnResize)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(GAMESTATE, JSON.stringify(gameboard))
  }, [gameboard])

  // initial start game
  if (startGame && !gameboard?.started) {
    setGameboard(gameboard.init())
  }

  const handleStartGame = (): void => {
    if (startGame) {
      // Reset the game
      localStorage.removeItem(GAMESTATE)
      setGameboard({ ...gameboard.clear() })
      updateScores(0)
      return
    }
    setStartGame(true)
  }

  const removeBestScore = (): void => {
    const resp = window.confirm(
      "This will REMOVE your high-score, are you sure you'd like to continue?",
    )
    if (resp) {
      localStorage.removeItem(BESTSCORE)
      setScores({ ...initialScores, score: scores.score })
    }
  }

  const updateScores = (score: number): void => {
    if (score > parseInt(scores.bestScore)) {
      localStorage.setItem(BESTSCORE, score.toString())
      setScores({ score: score, bestScore: score.toString() })
      return
    }
    setScores({ ...scores, score: score })
  }

  return (
    <div className={`App App-${theme}`}>
      <Settings />

      <div {...useSwipeHandlers} className="content-area">
        <div className="gameboard">
          {/*eslint-disable*/}
          {((!gameboard.win && isGameWon(gameboard.board)) ||
            (gameboard.lose && isGameOver(gameboard.board))) && (
              <GameStatus
                isGameWon={false}
                reset={(): void => {
                  handleStartGame()
                }}
                keepGoing={(): void => {
                  setGameboard({ ...gameboard.setWin() })
                }}
                renderForLose={gameboard.lose}
              />
            )}
          {/*eslint-enable*/}
          <GameHeader
            scores={scores}
            startGame={startGame}
            handleStartGame={handleStartGame}
            removeBestScore={removeBestScore}
          />

          <GameBoard
            gameboard={gameboard}
            setGameboard={setGameboard}
            startGame={startGame}
            updateScore={updateScores}
          />
        </div>
      </div>
    </div>
  )
}

export default App
