import React from 'react'
import moment from 'moment'
import { Icon } from 'react-materialize'
import PropTypes from 'prop-types'

export const TableRowEdit = (props) => {
  return (
    <tr key={props.data._id}>
      <td style={{textAlign: 'center'}}><input value={props.data.todo} name='todo' onChange={props._updateEditValue}/></td>
      <td style={{textAlign: 'center'}}>{moment(props.data.created).format('YYYY-MM-DD')}</td>
      <td style={{textAlign: 'center'}}><input type='date' name='due' onChange={props._updateEditValue} value={moment(props.data.due).format('YYYY-MM-DD')} /></td>
      <td style={{textAlign: 'center'}}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: 10, paddingRight: 10, flexDirection: 'row' }}>
          <div onClick={props._saveChanges} style={{ cursor: 'pointer', background: 'dodgerblue', color: 'white', borderRadius: 5, marginLeft: 5, marginRight: 5, paddingLeft: 10, paddingRight: 10 }}>Save</div>
          <div onClick={props._cancelChanges} style={{ cursor: 'pointer', background: 'dodgerblue', color: 'white', borderRadius: 5, marginLeft: 5, marginRight: 5, paddingLeft: 10, paddingRight: 10 }}>Cancel</div>
        </div>
      </td>
      <td style={{textAlign: 'center'}}><input onChange={props._updateEditValue} style={{position: 'relative', left: 0, opacity: 1, cursor: 'pointer'}} type='checkbox' name='completed' checked={props.data.completed}/></td>
      <td style={{textAlign: 'center'}}><div style={{ cursor: 'pointer' }} onClick={() => { props._deleteToDo(props.data) }}><Icon tiny>cancel</Icon></div></td>
    </tr>
  )
}

TableRowEdit.propTypes = {
  data: PropTypes.object,
  _setComplete: PropTypes.func,
  _deleteToDo: PropTypes.func,
  _updateEditValue: PropTypes.func,
  _saveChanges: PropTypes.func,
  _cancelChanges: PropTypes.func
}
