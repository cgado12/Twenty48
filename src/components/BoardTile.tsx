import React from 'react';
import { useRecoilValue } from 'recoil';
import { ThemeState } from '../state/Atoms';
import { getColorId } from '../utils/BoardUtils';
import '../styles/TileAnimations.scss'
import { Tile } from '../utils/Tile';
import '../styles/Utility.scss'

interface BoardTileProps {
  tile: Tile
  rowPos: number
  colPos: number
}

const BoardTile: React.FC<BoardTileProps> = ({
  tile,
}) => {
  const theme = useRecoilValue(ThemeState)
  const colorClass = getColorId(tile.value)
  const newClass = tile.value !== 0 && tile.new ? 'new' : ''
  const combinedClass = tile.combined ? 'combined' : ''

  return (
    <>
      <div
        key={`${tile.id}`}
        id={`${colorClass ? `${colorClass}-${theme}` : 'board-tile'}`}
        className={`board-tile board-tile-${theme} ${newClass} ${combinedClass} ${tile.attr} `}
      >
        <div
          className={`board-value `}>
          {tile.value !== 0 ? tile.value : ''}
        </div>
      </div>
    </>
  )
}


export default BoardTile