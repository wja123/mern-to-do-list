import React from 'react'
import ReactDOM from 'react-dom'
import ToDoList from './views/ToDoList'
import { hot } from 'react-hot-loader'

console.log('LOADED')

const Root = () => (
  <div>
    <ToDoList />
  </div>
)

ReactDOM.render(hot(module)(<Root />), document.getElementById('root'))
