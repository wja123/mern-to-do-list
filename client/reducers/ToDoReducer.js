import { toDoState } from '../constants/initialStates'

export const ToDoReducer (state = toDoState, action) {
  switch(action.type){
    case 'ADD_TO_DO':
      return Object.assign({}, state, action.todo);
    default:
      return state;
  }
}
