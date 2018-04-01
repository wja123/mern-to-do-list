import React, { Component } from 'react'
import { ToDoAdd } from '../components/ToDoAdd'
import { ToDoTable } from '../components/ToDoTable'

class ToDoList extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <div style={{ display: 'flex', flex: 1, height: '100%', width: '100%', alignItems: 'center', flexDirection: 'column' }}>
        <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center', background: 'coral' }}>
          <h1 style={{ fontWeight: 200, color: 'white' }}>To Do list</h1>
        </div>
        <ToDoAdd />
        <ToDoTable />
      </div>
    )
  }
}

export default ToDoList
