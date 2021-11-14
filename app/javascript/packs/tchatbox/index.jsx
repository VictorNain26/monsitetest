import React from 'react'
import { render } from 'react-dom'
import { App } from './app'

export const tchatbox = () => {
  render(
    <App />,
    document.querySelector('#container-main')
  )
}
