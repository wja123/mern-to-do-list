import React from 'react'
import { Icon } from 'react-materialize'
import PropTypes from 'prop-types'
// import { Row, Col, Input, Button } from 'react-materialize'

export const ToDoAdd = (props) => {
  return (
    <div style={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', padding: 30 }}>
      <div style={{ display: 'flex', width: '90%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
        <div className='col input-field' style={{ width: '25%', minWidth: '150px', paddingLeft: 10, paddingRight: 10 }}>
          <label htmlFor='todo' className='active'>To Do</label>
          <input name='todo' id='todo' onChange={props._updateValue}/>
        </div>
        <div className='col input-field' style={{ width: '25%', minWidth: '150px', paddingLeft: 10, paddingRight: 10 }}>
          <label htmlFor='due' className='active'>Due Date</label>
          <input style={{ borderRadius: 0 }} type='date' name='due' id='due' onChange={props._updateValue}/>
        </div>
        <div onClick={props._addToDo}>
          <Icon small>add_box</Icon>
        </div>
      </div>
    </div>
  )
}

ToDoAdd.propTypes = {
  _addToDo: PropTypes.func,
  _updateValue: PropTypes.func
}
