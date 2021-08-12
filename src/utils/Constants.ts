import { ConfettiConfig } from 'react-dom-confetti'
import { getInitialTile } from './Tile'
import { tBoard } from './Types'
/**
 * CONSTANTS and Enums
 */

// localstorage keys
export const BESTSCORE = 'bestScore'
export const GAMESTATE = 'gameState'

// initial gameboard
export const DEFAULT_GAMEBOARD: tBoard = [
  [getInitialTile(), getInitialTile(), getInitialTile(), getInitialTile()],
  [getInitialTile(), getInitialTile(), getInitialTile(), getInitialTile()],
  [getInitialTile(), getInitialTile(), getInitialTile(), getInitialTile()],
  [getInitialTile(), getInitialTile(), getInitialTile(), getInitialTile()],
]

// choice array is for randomizing where a new value will appear after a move is made
export const CHOICE_ARR: Array<number> = [
  2, 4, 2, 2, 2, 4, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2,
]
export const CHOICE_ARR_LEN = CHOICE_ARR.length
export const DEFAULT_ROW_LEN = 4
export const THEME = 'theme'

export enum ThemeType {
  DARK = 'dark',
  LIGHT = 'light',
}

export enum id {
  TWO = 'two',
  FOUR = 'four',
  EIGHT = 'eight',
  SIXTEEN = 'sixteen',
  THIRYTWO = 'thirty-two',
  SIXTYFOUR = 'sixty-four',
  ONETWENTYEIGHT = 'one-twenty-eight',
  TWOFIFTYSIX = 'two-fifty-six',
  FIVETWELVE = 'five-twelve',
  TENTWENTYFOUR = 'ten-twenty-four',
  TWENTYFORTYEIGHT = 'twenty-fourty-eight',
}

// gameWon confetti config
export const confettiConfig: ConfettiConfig = {
  angle: 90,
  spread: 360,
  startVelocity: 70,
  elementCount: 550,
  dragFriction: 0.12,
  duration: 4500,
  stagger: 0.3,
  width: '12px',
  height: '12px',
  colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
}
