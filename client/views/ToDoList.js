import React, { Component } from 'react'
import axios from 'axios'
import moment from 'moment'
import Loader from 'react-loaders'
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
      loading: false,
      editId: '',
      list: [],
      todo: {
        _id: '',
        todo: '',
        due: '',
        created: '',
        completed: false
      }
    }
    this._addToDo = this._addToDo.bind(this)
    this._updateValue = this._updateValue.bind(this)
    this._setComplete = this._setComplete.bind(this)
    this._deleteToDo = this._deleteToDo.bind(this)
    this._editToDo = this._editToDo.bind(this)
    this._saveChanges = this._saveChanges.bind(this)
    this._cancelChanges = this._cancelChanges.bind(this)
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
    if (this.state.todo.todo !== '' && this.state.todo.due !== '') {
      let newToDo = Object.assign({}, this.state.todo, { created: Date.now(), completed: false }, {due: moment(this.state.todo.due, 'YYYY-MM-DD').format()})
      this.setState({ todo: newToDo, loading: true })
      delete newToDo._id

      axios.post('/todo/', newToDo).then(response => {
        this.props.addToToDoList(response.data)
        this.props.updateToDo(response.data)
        this.setState({todo: {
          _id: '',
          todo: '',
          due: '',
          created: '',
          completed: false
        },
        loading: false
        })
      }).catch(err => {
        console.log(err)
      })
    }
  }
  _updateValue (e) {
    let stateObj = Object.assign({}, this.state.todo)
    stateObj[e.target.name] = e.target.value
    this.setState({todo: stateObj})
  }
  _setComplete (toDo) {
    this.setState({ loading: true })
    toDo.completed = !toDo.completed
    axios.put('/todo/' + toDo._id, toDo).then(response => {
      this.props.updateAListValue(response.data)
      this.props.updateToDo(response.data)
      this.setState({ loading: false })
    }).catch(err => {
      console.log(err)
    })
  }
  _deleteToDo (toDo) {
    this.setState({ loading: true })
    if (toDo) {
      axios.delete('/todo/' + toDo._id).then(response => {
        this.props.removeToDo(response.data)
        this.setState({ loading: false })
      }).catch(err => {
        console.log(err)
      })
    }
  }
  _editToDo (todo) {
    if (todo) {
      let todoObj = Object.assign({}, this.state.todo, todo)
      delete todoObj._v
      this.setState({ todo: todoObj })
    }
  }
  _cancelChanges (todo) {
    this.setState({todo: {
      _id: '',
      todo: '',
      due: '',
      created: '',
      completed: false
    }})
  }
  _saveChanges () {
    this.setState({ loading: true })
    axios.put('/todo/' + this.state.todo._id, this.state.todo).then(response => {
      this.props.updateAListValue(response.data)
      this.setState({todo: {
        _id: '',
        todo: '',
        due: '',
        created: '',
        completed: false
      },
      loading: false
      })
    }).catch(err => {
      console.log(err)
    })
  }
  render () {
    return (
      <div style={{ display: 'flex', flex: 1, height: '100%', width: '100%', alignItems: 'center', flexDirection: 'column' }}>
        <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center', background: 'coral' }}>
          <h1 style={{ fontWeight: 200, color: 'white' }}>To Do list</h1>
        </div>
        <ToDoAdd _addToDo={this._addToDo} _updateValue={this._updateValue}/>
        { this.state.loading
          ? <Loader type="line-scale" active />
          : <ToDoTable
            toDoList={this.props.ListState.list}
            _setComplete={this._setComplete}
            _deleteToDo={this._deleteToDo}
            _editToDo={this._editToDo}
            _saveChanges={this._saveChanges}
            _cancelChanges={this._cancelChanges}
            _updateValue={this._updateValue}
            editData={this.state.todo}/>
        }
      </div>
    )
  }
}

ToDoList.propTypes = {
  ToDoState: PropTypes.object,
  ListState: PropTypes.object,
  updateToDo: PropTypes.func,
  addToToDoList: PropTypes.func,
  updateList: PropTypes.func,
  updateAListValue: PropTypes.func,
  removeToDo: PropTypes.func
}

const mapStateToProps = (state, rrProps) => ({
  ToDoState: state.ToDoState,
  ListState: state.ListState
})

const mapDispatchToProps = dispatch => ({
  updateToDo: toDo => {
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
