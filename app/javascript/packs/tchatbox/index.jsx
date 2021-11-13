import React from 'react'
import { render } from 'react-dom'
import { NewMessage } from './newmessage'

export const tchatbox = () => {

  render(
    <NewMessage/>,
    document.querySelector('#chat')
  )
}
