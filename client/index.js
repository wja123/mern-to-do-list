import React from 'react'
import ReactDOM from 'react-dom'
import ToDoList from './views/ToDoList'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader'
import { store } from './store.js'
const Root = () => {
  return (
    <Provider store={store}>
      <ToDoList />
    </Provider>
  )
}

ReactDOM.render(hot(module)(<Root />), document.getElementById('root'))
