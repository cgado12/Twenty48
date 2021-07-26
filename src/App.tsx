import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './styles/App.scss'
import GameBoard from './components/GameBoard'
import GameHeader from './components/GameHeader'
import { BESTSCORE, THEME, ThemeType } from './utils/Constants'
import { initialScores, IScores } from './utils/Types'
import { Board } from './utils/Board'
import { useRecoilState } from 'recoil'
import { ThemeState } from './state/Atoms'
import Switch from 'react-switch'
import { GiMoonBats, GiUbisoftSun } from 'react-icons/gi'
import './styles/MobileStyle.scss'
import { useSwipeable } from 'react-swipeable'

const App: React.FC = () => {
  const [theme, setTheme] = useRecoilState<ThemeType>(ThemeState)
  const [gameboard, setGameboard] = useState<Board>(new Board())
  const [startGame, setStartGame] = useState<boolean>(false)
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
    localStorage.setItem(THEME, theme)
  }, [theme])

  // initial start game
  if (startGame && !gameboard?.started) {
    setGameboard(gameboard.init())
  }

  const handleStartGame = (): void => {
    if (startGame) {
      // Reset the game
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
      <div>
        <Switch
          offHandleColor="#7e7e7e"
          onHandleColor="#fee8f5"
          onColor="#9e9491"
          offColor="#423d33"
          uncheckedIcon={<GiMoonBats size="22px" className="switch-icon" />}
          checkedIcon={<GiUbisoftSun size="22px" className="switch-icon" />}
          className="switch"
          onChange={(): void => {
            setTheme(
              theme === ThemeType.LIGHT ? ThemeType.DARK : ThemeType.LIGHT,
            )
          }}
          checked={theme === ThemeType.LIGHT ? true : false}
        />

        <img src={logo} className="App-logo" alt="logo" />
      </div>

      <div {...useSwipeHandlers} className="content-area">
        <div className="gameboard">
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
          <h5>Version: 0.1.0</h5>
        </div>
      </div>
    </div>
  )
}

export default App
