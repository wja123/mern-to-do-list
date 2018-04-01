export const addToDo = (toDo) => {
  return {type: 'ADD_TO_DO', value: toDo};
}

export const updateList = (list) => {
  return {type: 'UPDATE_LIST', value: list};
}

export const updateToDo = (toDo) => {
  return {type: 'UPDATE_TO_DO', value: toDo};
}

export const removeToDo = (toDo) => {
  return {type: 'REMOVE_TO_DO', value: toDo};
}
