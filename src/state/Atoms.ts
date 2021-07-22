import { THEME, ThemeType, } from '../utils/Constants';
import { atom } from 'recoil';

export const getTheme = (): ThemeType => {
  const t = localStorage.getItem(THEME)
  return t === ThemeType.LIGHT ? ThemeType.LIGHT : ThemeType.DARK
}

export const ThemeState = atom({
  key: "theme",
  default: getTheme()
})