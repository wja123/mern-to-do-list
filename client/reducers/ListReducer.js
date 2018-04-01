import { toDoState } from '../constants/initialStates'

export const ListReducer (state = toDoState, action) {
  switch(action.type){
    case 'ADD_TO_DO':
      return addTodo(state, action);
    case 'UPDATE_LIST':
      return updateList(state, action);
    case 'UPDATE_TO_DO':
      return updateToDo(state, action);
    case 'REMOVE_TO_DO':
      return removeToDo(state, action);
    default:
      return state;
  }
}

function addToDo(state, action){
  let listObject = Object.assign({}, state);
  listObject.list.push(action.value);
  return listObject;
}

function updateList(state, action){
  let listObject = Object.assign({}, state);
  listObject.list = action.value;
  return listObject;
}

function updateToDo(state, action){
  let listObject = Object.assign({}, state);
  listObject = listObject.list.map((x) => {
    if(x._id === action.value._id){
      return action.value;
    } else {
      return x
    }
  });
  return listObject;
}

function removeToDo(state, action){
  let listObject = Object.assign({}, state);
  let delIndex;
  for(let i = 0, len = listObject.list.length; i < len; i ++){
    if(listObject.list[i]._id === action.value._id){
      delIndex = i;
      break;
    }
  }

  if(delIndex){
    listObject.list = listObject.list.splice(i, 1)
  }

  return listObject;
}
