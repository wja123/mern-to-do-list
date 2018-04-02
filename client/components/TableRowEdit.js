import React from 'react'
import moment from 'moment'
import { Icon } from 'react-materialize'
import PropTypes from 'prop-types'

export const TableRowEdit = (props) => {
  return (
    <tr key={props.data._id}>
      <td style={{textAlign: 'center'}}><input value={props.data.todo} name='todo' onChange={props._updateValue}/></td>
      <td style={{textAlign: 'center'}}>{moment(props.data.created).format('YYYY-MM-DD')}</td>
      <td style={{textAlign: 'center'}}><input type='date' name='due' onChange={props._updateValue} value={moment(props.data.due).format('YYYY-MM-DD')} /></td>
      <td style={{textAlign: 'center'}}><div style={{ justifyContent: 'center', alignItems: 'center', paddingLeft: 10, paddingRight: 10 }} onClick={props._saveChanges}><div style={{ cursor: 'pointer', background: 'dodgerblue', color: 'white', borderRadius: 5 }}>Save</div></div></td>
      <td style={{textAlign: 'center'}}><input onChange={props._updateValue} style={{position: 'relative', left: 0, opacity: 1, cursor: 'pointer'}} type='checkbox' name='completed' checked={props.data.completed}/></td>
      <td style={{textAlign: 'center'}}><div style={{ cursor: 'pointer' }} onClick={() => { props._deleteToDo(props.data) }}><Icon tiny>cancel</Icon></div></td>
    </tr>
  )
}

TableRowEdit.propTypes = {
  data: PropTypes.object,
  _setComplete: PropTypes.func,
  _deleteToDo: PropTypes.func,
  _updateValue: PropTypes.func,
  _saveChanges: PropTypes.func
}
