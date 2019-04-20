'use strict'

import  React, { Component } from 'react'
import  Title from './title'
import NewTitle from './newTitle'
import Square from  './square'


 class App extends Component {
  render () {
    return (
      <div>
        <Title name='Jefferson' lastname={{ first: 'Silva', last: 'Rago'}}/>
        <NewTitle lastname={{ last: 'Rago'}} />
        { ['blue', 'red', 'green'].map((square, index) => (
          <Square key={index} color={square} />

        )) }

        <Square color='blue'/>
      </div>
    )
  }
 }


// const App = React.createClass({
//  render: function() {
// return (
//      <div id='1' data-id='1' className='container' >
//        <Title name='Jefferson' lastname={{ first: 'Silva', last: 'Rago'}}/>
//        <NewTitle lastname={{ last: 'Rago'}} />
//        <label htmlFor='input'> Input</label>
//        <input type='text' id='input' />
//      </div>)
//  }
//})

export default App
