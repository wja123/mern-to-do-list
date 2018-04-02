import React from 'react'
import moment from 'moment'
import { Icon } from 'react-materialize'
import PropTypes from 'prop-types'

export const TableRow = (props) => {
  return (
    <tr key={props.data._id}>
      <td style={{textAlign: 'center'}}>{props.data.todo}</td>
      <td style={{textAlign: 'center'}}>{moment(props.data.created).format('YYYY-MM-DD')}</td>
      <td style={{textAlign: 'center'}}>{moment(props.data.due).format('YYYY-MM-DD')}</td>
      <td style={{textAlign: 'center'}}><div style={{ cursor: 'pointer' }} onClick={() => { props._editToDo(props.data) }}><Icon tiny>mode_edit</Icon></div></td>
      <td style={{textAlign: 'center'}}><input onChange={() => { props._setComplete(props.data) }} style={{position: 'relative', left: 0, opacity: 1, cursor: 'pointer'}} type='checkbox' name='completed' checked={props.data.completed}/></td>
      <td style={{textAlign: 'center'}}><div style={{ cursor: 'pointer' }} onClick={() => { props._deleteToDo(props.data) }}><Icon tiny>cancel</Icon></div></td>
    </tr>
  )
}

TableRow.propTypes = {
  data: PropTypes.object,
  _setComplete: PropTypes.func,
  _deleteToDo: PropTypes.func,
  _editToDo: PropTypes.func
}
