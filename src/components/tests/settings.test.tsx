import React from 'react'
import { cleanup, fireEvent, screen } from '@testing-library/react'
import { renderWithRecoil } from '../../App.test'
import Settings from '../Settings'



describe("Test Settings Popup", () => {
  beforeEach(() => {
    renderWithRecoil(
      <Settings />
    )
  })

  afterEach(() => {
    cleanup()
  })

  test("Test Initial Render", async () => {

    const settingsCogBtn = document.getElementsByClassName("settings-cog").item(0)
    if (settingsCogBtn) {
      // open the settings popup
      fireEvent.click(settingsCogBtn)
    }

    const theme = screen.getByText("Theme:")
    const version = screen.getByText("Version:")
    const made = screen.getByText("Made with:")

    expect(theme).toBeInTheDocument()
    expect(version).toBeInTheDocument()
    expect(made).toBeInTheDocument()
  })
})