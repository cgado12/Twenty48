import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './styles/App.scss';
import GameBoard from './components/GameBoard';
import GameHeader from './components/GameHeader';
import { BESTSCORE, THEME, ThemeType, } from './utils/Constants';
import { initialScores, IScores } from './utils/Types'
import { Board } from './utils/Board';
import { useRecoilState } from 'recoil';
import { ThemeState } from './state/Atoms';
import Switch from "react-switch";
import { GiMoonBats, GiUbisoftSun } from 'react-icons/gi'

const App: React.FC = () => {
  const [theme, setTheme] = useRecoilState<ThemeType>(ThemeState)
  const [gameboard, setGameboard] = useState(new Board())
  const [startGame, setStartGame] = useState<boolean>(false)
  const [scores, setScores] = useState<IScores>(() => {
    const bs = localStorage.getItem(BESTSCORE)
    return {
      ...initialScores,
      bestScore: !bs ? initialScores.bestScore : bs
    }
  })

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
      return
    }
    setStartGame(true)
  }

  const removeBestScore = (): void => {
    const resp = window.confirm("This will REMOVE your high-score, are you sure you'd like to continue?")
    if (resp) {
      localStorage.clear()
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
          onChange={() => {
            setTheme(theme === ThemeType.LIGHT ? ThemeType.DARK : ThemeType.LIGHT)
          }}
          checked={theme === ThemeType.LIGHT ? true : false}
        />

        <img src={logo} className="App-logo" alt="logo" />
      </div>

      <div className="content-area">

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
        </div>

      </div>
    </div >
  );
}

export default App;
