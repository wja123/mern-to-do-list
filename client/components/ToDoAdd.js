import React from 'react'
import { Icon } from 'react-materialize'
// import { Row, Col, Input, Button } from 'react-materialize'

export const ToDoAdd = (props) => {
  return (
    <div style={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', padding: 30 }}>
      <div style={{ display: 'flex', width: '90%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
        <div className="col input-field" style={{ width: '25%', paddingLeft: 10, paddingRight: 10 }}>
          <label htmlFor='todo' className='active'>To Do</label>
          <input name='todo' id='todo'/>
        </div>
        <div className="col input-field" style={{ width: '25%', paddingLeft: 10, paddingRight: 10 }}>
          <label htmlFor='duedate' className='active'>Due Date</label>
          <input type='date' name='duedate' id='duedate'/>
        </div>
        <Icon small>add_box</Icon>
      </div>
    </div>
  )
}
