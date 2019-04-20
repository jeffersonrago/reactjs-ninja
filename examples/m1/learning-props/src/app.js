'use strict'

import  React from 'react'
import  Title from './title'

const App = React.createClass({
  render: function() {
    return (
      <div id='1' data-id='1' className='container' >
        <Title name='Jefferson Rago' />
        <label htmlFor='input'> Input</label>
        <input type='text' id='input' />
      </div>)
  }
})

export default App
