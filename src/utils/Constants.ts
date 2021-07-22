import { getInitialTile } from './Tile';
import { tBoard } from './Types';
/**
 * CONSTANTS and Enums
 */

// localstorage keys
export const BESTSCORE = 'bestScore';

// initial gameboard
export const DEFAULT_GAMEBOARD: tBoard = [
  [getInitialTile(), getInitialTile(), getInitialTile(), getInitialTile()],
  [getInitialTile(), getInitialTile(), getInitialTile(), getInitialTile()],
  [getInitialTile(), getInitialTile(), getInitialTile(), getInitialTile()],
  [getInitialTile(), getInitialTile(), getInitialTile(), getInitialTile()],
];

// choice array is for randomizing where a new value will appear after a move is made
export const CHOICE_ARR: Array<number> = [2, 4, 2, 2, 2, 4, 2, 2, 2, 2, 2, 4, 2, 4, 2, 4, 2, 2];
export const CHOICE_ARR_LEN = CHOICE_ARR.length;
export const DEFAULT_ROW_LEN = 4;
export const THEME = 'theme';

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
