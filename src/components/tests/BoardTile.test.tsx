import { cleanup } from '@testing-library/react';
import { renderWithRecoil } from '../../App.test'
import { getInitialTile } from '../../utils/Tile'
import BoardTile from '../BoardTile'

describe('Test Board Tile', () => {
  const testTile1 = getInitialTile()

  afterEach(() => {
    cleanup()
  })

  test('Render an initial tile', async () => {
    renderWithRecoil(<BoardTile tile={testTile1} />)

    const bTile = document.getElementById('board-tile')
    expect(bTile).toBeInTheDocument()
    expect(bTile?.firstChild?.textContent).toBe('')
    // tile has no value so ensure new animation is not set
    expect(!bTile?.classList.contains('new')).toBeTruthy()
  })
})