import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import App from './App';
import { THEME } from './utils/Constants';


export const renderWithRecoil = (child: React.ReactElement) => {
  localStorage.setItem(THEME, '')
  return render(
    <RecoilRoot>
      {child}
    </RecoilRoot>
  )
}

describe('Initial render App', () => {

  afterEach(() => {
    cleanup()
  })

  test('render app with default dark theme', async () => {
    renderWithRecoil(<App />)
    const twenty = screen.getByText("Twenty");
    const forty = screen.getByText("Forty");
    const eight = screen.getByText("Eight");

    expect(twenty).toBeInTheDocument();
    expect(forty).toBeInTheDocument();
    expect(eight).toBeInTheDocument();
    // dark theme by default
    expect(twenty.parentElement).toHaveClass('gameboard-header-c1-dark')
  })

  test('render app and switch theme', async () => {
    renderWithRecoil(<App />)
    const switchToggle = document.getElementsByClassName('switch').item(0)
    const score = screen.getByText("Score");
    const newGame = screen.getByText("New Game");
    const bestScore = screen.getByText("Best Score");
    const clearBtn = screen.getByText("Clear");

    expect(score).toBeInTheDocument();
    expect(newGame).toBeInTheDocument();
    expect(bestScore).toBeInTheDocument();
    expect(clearBtn).toBeInTheDocument();
    expect(switchToggle?.parentElement?.parentElement).toHaveClass('App-dark')

    //change theme with toggle
    const toggle = switchToggle?.firstChild
    if (switchToggle && toggle) {
      fireEvent.click(toggle)
    }
    // check for light mode class
    expect(switchToggle?.parentElement?.parentElement).toHaveClass('App-light')
  })

});
