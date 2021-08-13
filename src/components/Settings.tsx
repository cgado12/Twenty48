import React, { useState, useEffect } from 'react'
import logo from '../logo.svg'
import { FiSettings } from 'react-icons/fi'
import { useRecoilState } from 'recoil'
import { ThemeState } from '../state/Atoms'
import { Divider, FormControl, NativeSelect, Popover } from '@material-ui/core'
import '../styles/Settings.scss'
import { BESTSCORE, GAMESTATE, THEME, ThemeType } from '../utils/Constants'
import packJson from '../../package.json'
import { GiMoonBats, GiUbisoftSun } from 'react-icons/gi'

const Settings: React.FC = () => {
  const version = packJson['version']
  const [theme, setTheme] = useRecoilState<ThemeType>(ThemeState)
  const [anchorEl, setAnchorEl] = useState<Element | null | undefined>(null)

  const [isCacheClear, setIsCacheClear] = useState(() => {
    if (
      localStorage.getItem(BESTSCORE) ||
      localStorage.getItem(GAMESTATE) ||
      localStorage.getItem(THEME)
    ) {
      return false
    }
    return true
  })
  const cacheClearText = isCacheClear ? 'Cache is Clear' : 'Clear Cache'

  useEffect(() => {
    localStorage.setItem(THEME, theme)
  }, [theme])

  const removeLocalStorage = (): void => {
    localStorage.removeItem(THEME)
    localStorage.removeItem(GAMESTATE)
    localStorage.removeItem(BESTSCORE)
    setIsCacheClear(true)
  }

  const setSelectedTheme = (
    e: React.ChangeEvent<{ name?: string; value: unknown }>,
  ): void => {
    setTheme(e.target.value as ThemeType)
  }

  const getPopoverBody = (): React.ReactElement => {
    return (
      <div className={`popover-body popover-body-${theme}`}>
        <div className="settings-item center">
          <h3 onClick={removeLocalStorage}>{cacheClearText}</h3>
        </div>
        <Divider />
        <div className="settings-item">
          <h3>Theme:</h3>
          <div className="center-item">
            {theme === ThemeType.DARK ? (
              <GiMoonBats size="22px" className="theme-icon" />
            ) : (
              <GiUbisoftSun size="22px" className="theme-icon" />
            )}
            <FormControl className="no-decoration">
              <NativeSelect
                value={theme}
                className={`select-${theme}`}
                onChange={setSelectedTheme}
              >
                {Object.values(ThemeType).map((type, idx) => {
                  return (
                    <option key={idx} value={type}>
                      {type}
                    </option>
                  )
                })}
              </NativeSelect>
            </FormControl>
          </div>
        </div>
        <Divider />
        <div className="settings-item">
          <h3>Version:</h3>
          <h4 className="center-item">{version}</h4>
        </div>
        <Divider />
        <div className="settings-item ">
          <h3>Made with:</h3>
          <img src={logo} className="react-icon" />
        </div>
      </div>
    )
  }

  return (
    <>
      <div>
        <FiSettings
          id="settings-cog"
          className="settings-cog"
          size="30px"
          onClick={(e): void => setAnchorEl(e.currentTarget)}
        />
      </div>

      {/* Popover component: hidden until above button click */}
      <Popover
        open={anchorEl !== null}
        anchorEl={anchorEl}
        onClose={(): void => setAnchorEl(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        {getPopoverBody()}
      </Popover>
    </>
  )
}

export default Settings
