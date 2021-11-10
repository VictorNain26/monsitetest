import React, { useState } from 'react'
import { render } from 'react-dom'

const test = () => {

  const Hello = props => (
    <div>Hello test {props.name}!</div>
  )

  render(
    <Hello name="React" />,
    document.querySelector('#test')
  )
}

export { test }
