import React from 'react'
import { Table } from 'react-materialize'
import PropTypes from 'prop-types'
import { TableRow } from './TableRow'
import { TableRowEdit } from './TableRowEdit'
// import { Row, Col, Input, Button } from 'react-materialize'

export const ToDoTable = (props) => {
  return (
    <div style={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', width: '80%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
        <Table style={{justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
          <thead>
            <tr>
              <th style={{textAlign: 'center'}} data-field="todo">To Do</th>
              <th style={{textAlign: 'center'}} data-field="created">Created</th>
              <th style={{textAlign: 'center'}} data-field="due">Due</th>
              <th style={{textAlign: 'center'}} data-field="edit">Edit</th>
              <th style={{textAlign: 'center'}} data-field="completed">Complete</th>
              <th style={{textAlign: 'center'}} data-field="remove">Remove</th>
            </tr>
          </thead>
          <tbody>
            {props.toDoList.map(x => (
              x._id === props.editData._id
                ? <TableRowEdit
                  key={x._id}
                  data={props.editData}
                  _setComplete={props._setComplete}
                  _deleteToDo={props._deleteToDo}
                  _editToDo={props._editToDo}
                  _saveChanges={props._saveChanges}
                  _updateValue={props._updateValue}
                  editData={props.editData}
                />
                : <TableRow
                  key={x._id}
                  data={x}
                  _setComplete={props._setComplete}
                  _deleteToDo={props._deleteToDo}
                  _editToDo={props._editToDo}
                />
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  )
}

ToDoTable.propTypes = {
  toDoList: PropTypes.array,
  _setComplete: PropTypes.func,
  _deleteToDo: PropTypes.func,
  _editToDo: PropTypes.func,
  _saveChanges: PropTypes.func,
  _updateValue: PropTypes.func,
  editData: PropTypes.object
}
