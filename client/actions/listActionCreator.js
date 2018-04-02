export const addToToDoList = (toDo) => {
  return {type: 'ADD_TO_TO_DO_LIST', value: toDo}
}

export const updateList = (list) => {
  return {type: 'UPDATE_LIST', value: list}
}

export const updateAListValue = (toDo) => {
  return {type: 'UPDATE_A_LIST_VALUE', value: toDo}
}

export const removeToDo = (toDo) => {
  return {type: 'REMOVE_TO_DO', value: toDo}
}
