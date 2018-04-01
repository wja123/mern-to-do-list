import React from 'react'
import { Table, Icon } from 'react-materialize'
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
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{textAlign: 'center'}}>Alvin</td>
              <td style={{textAlign: 'center'}}>Eclair</td>
              <td style={{textAlign: 'center'}}>$0.87</td>
              <td style={{textAlign: 'center'}}><Icon tiny>mode_edit</Icon></td>
              <td style={{textAlign: 'center'}}><input style={{position: 'relative', left: 0, opacity: 1}} type='checkbox' value={true}/></td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  )
}
