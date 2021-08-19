// eslint-disable-next-line
import React from 'react'
import { getInitialTile, Tile } from './../Tile'
import { cleanup } from '@testing-library/react'

describe('Test Tile Class', () => {
  let testTile: Tile

  beforeEach(() => {
    testTile = getInitialTile()
  })

  afterEach(() => {
    cleanup
  })

  test('Test getInitialTile', async () => {
    const expectedTile = new Tile(undefined)

    /* eslint-disable */
    // should be the same - except id and anonymous functions
    const { id, clear, reset, setCurrentPosition, notNew, setNew, ...tTile } =
      testTile
    const {
      id: idtwo,
      clear: c,
      reset: r,
      setCurrentPosition: scp,
      notNew: nn,
      setNew: sn,
      ...eTile
    } = expectedTile
    /* eslint-enable */

    expect(expectedTile).toBeInstanceOf(Tile)
    expect(testTile).toBeInstanceOf(Tile)
    expect(tTile).toEqual(eTile)
  })

  test('Test Load Tile With Values', async () => {
    const exampleTile = {
      id: 0,
      value: 16,
      curRow: 2,
      curCol: 2,
      prevCol: 1,
      prevRow: 3,
      combined: false,
      new: false,
      attr: '',
    }
    const loadedTile = new Tile(exampleTile as Tile)

    expect(loadedTile.value).toEqual(exampleTile.value)
    expect(loadedTile.curCol).toEqual(exampleTile.curCol)
    expect(loadedTile.curRow).toEqual(exampleTile.curRow)
    expect(loadedTile.prevCol).toEqual(exampleTile.prevCol)
    expect(loadedTile.prevRow).toEqual(exampleTile.prevRow)
    expect(loadedTile.combined).toEqual(exampleTile.combined)
    expect(loadedTile.new).toEqual(exampleTile.new)
    expect(loadedTile.attr).toEqual(exampleTile.attr)

    testTile.value = 256
    const newLoadedTile = new Tile(testTile)
    expect(newLoadedTile.value).toEqual(testTile.value)
  })

  test('Test Tile Class Functions', async () => {
    let testTile = getInitialTile()

    testTile = testTile.setNew()
    expect(testTile.new).toBe(true)

    testTile = testTile.notNew()
    expect(testTile.new).toBe(false)

    const x = 2,
      y = 4
    testTile = testTile.setCurrentPosition(x, y)
    expect(testTile.curRow).toBe(x)
    expect(testTile.curCol).toBe(y)

    const zero = 0
    testTile = testTile.reset(zero, zero)
    expect(testTile.prevCol).toBe(zero)
    expect(testTile.prevRow).toBe(zero)
    expect(testTile.curCol).toBe(zero)
    expect(testTile.curRow).toBe(zero)
    expect(testTile.new).toBe(false)
    expect(testTile.combined).toBe(false)

    const initPos = -1
    testTile = testTile.clear()
    expect(testTile.value).toBe(zero)
    expect(testTile.prevCol).toBe(initPos)
    expect(testTile.prevRow).toBe(initPos)
    expect(testTile.curCol).toBe(initPos)
    expect(testTile.curRow).toBe(initPos)
    expect(testTile.new).toBe(true)
  })
})
