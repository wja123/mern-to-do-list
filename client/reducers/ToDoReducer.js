import { toDoState } from '../constants/initialStates'

export const ToDoReducer = (state = toDoState, action) => {
  switch (action.type) {
    case 'UPDATE_TO_DO':
      return Object.assign({}, state, action.value)
    default:
      return state
  }
}
