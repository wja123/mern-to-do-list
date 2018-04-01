import React from 'react'
import ReactDOM from 'react-dom'
import ToDoList from './views/ToDoList'
import { hot } from 'react-hot-loader'

const Root = () => <ToDoList />

ReactDOM.render(hot(module)(<Root />), document.getElementById('root'))
