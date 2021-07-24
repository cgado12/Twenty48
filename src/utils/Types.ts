import { Tile } from './Tile'
/**
 * Interfaces and Type declarations
 */

export type tBoard = Array<Array<Tile>>
export type tRow = Array<Tile>
export type direction = 'left' | 'right' | 'up' | 'down' | 'noop'

export interface IScores {
  score: number
  bestScore: string
}

export const initialScores: IScores = {
  score: 0,
  bestScore: '0',
}
