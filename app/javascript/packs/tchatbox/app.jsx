import React from 'react'
import { NewMessage } from './newmessage'
import { ControlPanel } from './controlpanel'

export const App = () => {
  return (
    <>
      <ControlPanel />
      <NewMessage />
    </>
  )
}
