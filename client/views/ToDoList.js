import React, { Component } from 'react'
import axios from 'axios'
import { ToDoAdd } from '../components/ToDoAdd'
import { ToDoTable } from '../components/ToDoTable'
import PropTypes from 'prop-types'
import { addToToDoList, updateList, updateAListValue, removeToDo } from '../actions/listActionCreator'
import { updateToDo } from '../actions/toDoActionCreator'
import { connect } from 'react-redux'

class ToDoList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: [],
      todo: {
        todo: '',
        due: '',
        created: '',
        completed: false
      }
    }
    this._addToDo = this._addToDo.bind(this)
  }
  componentWillMount () {
    axios.get('/todo/').then(response => {
      this.props.updateList(response.data)
      this.setState({list: response.data})
    }).catch(err => {
      console.log(err)
    })
  }
  _addToDo () {
    console.log('addToDo')
  }
  render () {
    return (
      <div style={{ display: 'flex', flex: 1, height: '100%', width: '100%', alignItems: 'center', flexDirection: 'column' }}>
        <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center', background: 'coral' }}>
          <h1 style={{ fontWeight: 200, color: 'white' }}>To Do list</h1>
        </div>
        <ToDoAdd _addToDo={this._addToDo}/>
        <ToDoTable />
      </div>
    )
  }
}

ToDoList.propTypes = {
  ToDoReducer: PropTypes.object,
  ListReducer: PropTypes.object,
  onSelectToDo: PropTypes.func,
  addToToDoList: PropTypes.func,
  updateList: PropTypes.func,
  updateAListValue: PropTypes.func,
  removeToDo: PropTypes.func
}

const mapStateToProps = (state, rrProps) => ({
  ToDoReducer: state.ToDoReducer,
  ListReducer: state.ListReducer
})

const mapDispatchToProps = dispatch => ({
  onSelectToDo: toDo => {
    dispatch(updateToDo(toDo))
  },
  addToToDoList: toDo => {
    dispatch(addToToDoList(toDo))
  },
  updateList: list => {
    dispatch(updateList(list))
  },
  updateAListValue: toDo => {
    dispatch(updateAListValue(toDo))
  },
  removeToDo: toDo => {
    dispatch(removeToDo(toDo))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)
